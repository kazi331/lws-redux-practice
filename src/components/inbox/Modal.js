import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { conversationsApi, useAddConversationMutation, useEditConversationMutation } from "../../features/conversations/conversationsApi";
import { useGetUsersQuery } from "../../features/users/usersApi";
import isValidEmail from "../../utils/isValidEmail";
import Error from "../ui/Error";

export default function Modal({ open, control }) {
    const [sendTo, setSendTo] = useState("");
    const [message, setMessage] = useState("")
    const [checkUser, setCheckUser] = useState(false)
    const { user: loggedInUser } = useSelector(state => state.auth) || {}
    const { email: myEmail } = loggedInUser || {}
    const dispatch = useDispatch();
    const [conversation, setConversation] = useState(undefined)

    const { data: participant } = useGetUsersQuery(sendTo, {
        skip: !checkUser
    })


    const [addConversation, { isSuccess: addSuccess }] = useAddConversationMutation();
    const [editConversation, { isSuccess: editSuccess }] = useEditConversationMutation();

    //  hide modal 
    useEffect(() => {
        control();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [addSuccess, editSuccess])

    useEffect(() => {
        if (participant?.length > 0 && participant[0].email !== myEmail) {
            // check conversation existance
            dispatch(conversationsApi.endpoints.getConversation.initiate({
                userEmail: myEmail,
                partnerEmail: sendTo
            }))
                .unwrap()
                .then(data => setConversation(data))
                .catch(err => console.log(err))
        }

    }, [participant, myEmail, dispatch, sendTo])

    // debounce handler function
    const debounceHandler = (fn, delay) => {

        let timeoutId;
        return (...args) => {

            clearTimeout(timeoutId)

            timeoutId = setTimeout(() => {
                fn(...args)
            }, delay);
        }
    }

    // actual search fn
    const search = (value) => {
        // check if the email is valid
        if (isValidEmail(value)) {
            // actual user search fn
            setCheckUser(true)

        }
        setSendTo(value)
    }

    const handleSearch = debounceHandler(search, 500);
    const handleSubmit = e => {
        e.preventDefault();
        // add or edit conversation
        if (conversation.length > 0) {
            // edit conversation
            editConversation({
                id: conversation[0].id,
                sender: myEmail,
                data: {
                    participants: `${myEmail}-${sendTo}`,
                    users: [
                        { email: participant[0].email, name: participant[0].name },
                        { email: loggedInUser.email, name: loggedInUser.name }
                    ],
                    message,
                    timestamp: new Date().getTime()
                }
            })
        } else if (conversation.length === 0) {
            // add conversation 
            addConversation({
                sender: myEmail,
                data: {
                    participants: `${myEmail}-${sendTo}`,
                    users: [
                        { email: participant[0].email, name: participant[0].name },
                        { email: loggedInUser.email, name: loggedInUser.name }
                    ],
                    message,
                    timestamp: new Date().getTime()
                }
            })
        }
    }

    return (
        open && (
            <>
                <div
                    onClick={control}
                    className="fixed w-full h-full inset-0 z-10 bg-black/50 cursor-pointer"
                ></div>
                <div className="rounded w-[400px] lg:w-[600px] space-y-8 bg-white p-10 absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Send message
                    </h2>
                    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                        <input type="hidden" name="remember" value="true" />
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label htmlFor="to" className="sr-only">
                                    To
                                </label>
                                <input
                                    id="to"
                                    name="to"
                                    type="email"
                                    required
                                    className="appearance-none rounded-none relative block invalid:ring-red-500 w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
                                    placeholder="Send to"
                                    // value={sendTo}
                                    onChange={e => handleSearch(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="sr-only">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    type="text"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
                                    placeholder="Message"
                                    value={message}
                                    onChange={e => setMessage(e.target.value)}
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
                                disabled={conversation === undefined || (participant?.length > 0 && participant[0].email === myEmail)}
                            >
                                Send Message
                            </button>
                        </div>

                        {participant?.length < 1 && <Error message="User doesn't exists" />}
                        {participant?.length > 0 && participant[0].email === myEmail && <Error message="You cannot message yourself" />}
                    </form>
                </div>
            </>
        )
    );
}
