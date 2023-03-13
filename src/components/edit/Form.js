import { useState } from "react";
import { useUpdateVideoMutation } from "../../features/api/apiSlice";
import Error from "../ui/Error";
import Success from "../ui/Success";
import TextArea from "../ui/TextArea";
import TextInput from "../ui/TextInput";

export default function Form({ video }) {
    const [updateVideo, { isError, isLoading, isSuccess }] = useUpdateVideoMutation();


    const [videoData, setVideoData] = useState({
        title: video.title,
        description: video.description,
        author: video.author,
        date: video.date,
        duration: video.duration,
        views: video.views,
        link: video.link,
        thumbnail: video.thumbnail,
    })

    
    const handleChange = e => {
        setVideoData(pre => ({ ...pre, [e.target.name]: e.target.value }))
    }

    const handleSubmit = e => {
        e.preventDefault();
        updateVideo({...videoData, id: video.id})
        // console.log({ ...videoData, id: video.id });
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                            <TextInput
                                name="title"
                                value={videoData.title}
                                onChange={handleChange}
                                title="Video Title" />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <TextInput
                                name="author"
                                value={videoData.author}
                                onChange={handleChange}
                                title="Author" />
                        </div>

                        <div className="col-span-6">
                            <TextArea
                                name="description"
                                value={videoData.description}
                                onChange={handleChange}
                                title="Description" />
                        </div>

                        <div className="col-span-6">
                            <TextInput
                                name="link"
                                value={videoData.link}
                                onChange={handleChange}
                                title="YouTube Video link" />
                        </div>

                        <div className="col-span-6">
                            <TextInput
                                name="thumbnail"
                                value={videoData.thumbnail}
                                onChange={handleChange}
                                title="Thumbnail link" />
                        </div>

                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                            <TextInput
                                name="date"
                                value={videoData.date}
                                onChange={handleChange}
                                title="Upload Date" />
                        </div>

                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <TextInput
                                name="duration"
                                value={videoData.duration}
                                onChange={handleChange}
                                title="Video Duration" />
                        </div>

                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <TextInput
                                name="views"
                                value={videoData.views}
                                onChange={handleChange}
                                title="Video no of views" />
                        </div>
                    </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button
                    disabled={isLoading}
                        type="submit"
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-indigo-500"
                    >
                        {isLoading ? "Updating..." : "Update"}
                    </button>
                </div>
            </div>
            {isSuccess && <Success message="Video was updated successfully" />}
            {isError && <Error message="There was an error occured" />}
        </form>
    );
}
