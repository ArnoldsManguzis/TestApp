import { RouteProp } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { RootStackParamList } from "../../../App";
import { fetchComments } from "../../helpers/requests";
import { CommentData } from "../../helpers/types";
import CommentSection from "./components/CommentSection";
import PostContainer from "./components/PostContainer";

interface ViewPostProps {
    route: RouteProp<RootStackParamList, "ViewPost">;
}
const ViewPost = ({ route }: ViewPostProps) => {
    const { post } = route.params;
    const [comments, setComments] = useState<CommentData[]>([]);

    const fetchData = async () => {
        const data = await fetchComments(post.id);
        setComments(data);
    };
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <View style={styles.container}>
            <PostContainer title={post.title} body={post.body} />
            <CommentSection comments={comments} />
        </View>
    );
};

export default ViewPost;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#CCE3DE",
    },
});
