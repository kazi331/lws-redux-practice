import axios from "../../utils/axios";

export const getRelatedVideos = async ({ tags, id }) => {
    // tags_like=javascript&tags_like=react&id_ne=1&_limit=5

    const limit = 5;
    const queryString = tags?.length > 0 ? tags?.map(tag => `tags_like=${tag}`).join('&') + `&id_ne=${id}&_limit=${limit}`
        : `&id_ne=${id}&_limit=${limit}`

    console.log(`/videos?${queryString}`);
    const res = await axios.get(`/videos?${queryString}`)
    return res.data;
    
} 