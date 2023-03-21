import moment from "moment/moment";
import { useSelector } from "react-redux";
import { useGetConversationsQuery } from "../../features/conversations/conversationsApi";
import getPartnerInfo from "../../utils/getPartnerInfo";
import Error from "../ui/Error";
import ChatItem from "./ChatItem";
import gravatarUrl from "gravatar-url";
import { Link } from "react-router-dom";

export default function ChatItems() {
    const { user } = useSelector(state => state.auth);

    const { data: conversations, isLoading, isError, error, } = useGetConversationsQuery(user?.email);


    let content = null;
    if (isLoading) content = <li className="text-center py-2">Loading...</li>;
    if (isError) content = <li className="text-center p-2"><Error message={error?.error?.split(":")[1] || error?.data} /></li>;
    if (!isLoading && !isError && conversations.length < 1) content = <li className="text-center py-2">No conversations found!</li>
    if (!isLoading && !isError && conversations.length > 0) content = conversations.map(conversation => {
        const { id, message, timestamp, users } = conversation || {};
        const { name, email } = getPartnerInfo(users, user.email);
        return <li key={conversation.id}>
            <Link to={`/inbox/${id}`}>
                <ChatItem
                    avatar={gravatarUrl(email, { size: 80 })}
                    name={name}
                    lastMessage={message}
                    lastTime={moment(timestamp).fromNow()}
                />
            </Link>
        </li>
    })


    return <ul>{content}</ul>;
}
