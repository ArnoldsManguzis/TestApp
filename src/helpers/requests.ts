import axios, { AxiosResponse } from "axios";
import { Alert } from "react-native";
import { CommentData, PostData } from "./types";

export const fetchPosts = async () => {
    try {
        const posts: AxiosResponse<PostData[]> = await axios.get(
            "https://jsonplaceholder.typicode.com/posts"
        );
        return posts.data;
    } catch (err) {
        const error = err as Error;
        Alert.alert("An unexpected error occurred", error.message);
        return [];
    }
};

export const fetchComments = async (postId: number) => {
    try {
        const comments: AxiosResponse<CommentData[]> = await axios.get(
            "https://jsonplaceholder.typicode.com/comments"
        );
        return comments.data.filter((comment) => comment.postId === postId);
    } catch (err) {
        const error = err as Error;
        Alert.alert("An unexpected error occurred", error.message);
        return [];
    }
};
