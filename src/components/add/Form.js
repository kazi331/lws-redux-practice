// import Success from "../ui/Success";
import { useState } from "react";
import { useAddVideoMutation } from "../../features/api/apiSlice";
import Error from "../ui/Error";
import Success from "../ui/Success";
import TextArea from "../ui/TextArea";
import TextInput from "../ui/TextInput";

export default function Form() {
    const [addVideo, { isError, isLoading, isSuccess, data }] = useAddVideoMutation();


    const [videoData, setVideoData] = useState({
        title: "",
        description: "",
        author: "",
        date: "",
        duration: "",
        views: "",
        link: "",
        thumbnail: "",
    })

    const handleChange = e => {
        setVideoData(pre => ({ ...pre, [e.target.name]: e.target.value }))
    }

    const handleSubmit = e => {
        e.preventDefault();
        addVideo(videoData)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                            <TextInput name="title" value={videoData.title}
                                onChange={handleChange}
                                title="Video Title" />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <TextInput name="author" value={videoData.author}
                                onChange={handleChange}
                                title="Author" />
                        </div>

                        <div className="col-span-6">
                            <TextArea name="description" value={videoData.description}
                                onChange={handleChange}
                                title="Description" />
                        </div>

                        <div className="col-span-6">
                            <TextInput name="link" value={videoData.link}
                                onChange={handleChange}
                                title="YouTube Video link" />
                        </div>

                        <div className="col-span-6">
                            <TextInput name="thumbnail" value={videoData.thumbnail}
                                onChange={handleChange}
                                title="Thumbnail link" />
                        </div>

                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                            <TextInput name="date" value={videoData.date}
                                onChange={handleChange}
                                title="Upload Date" test="test" />
                        </div>

                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <TextInput name="duration" value={videoData.duration}
                                onChange={handleChange}
                                title="Video Duration" />
                        </div>

                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <TextInput name="views" value={videoData.views}
                                onChange={handleChange}
                                title="Video no of views" />
                        </div>
                    </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button disabled={isLoading} type="submit" className=" py-2 px-4 border  text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-0 focus:ring-2 ">{isLoading ? "Saving..." : isSuccess ? "Saved" : "Save"}</button>
                </div>

                {isSuccess && <Success message="Video was added successfully" />}
                {isError && <Error message="There was an error occured" />}
            </div>
        </form>
    );
}
