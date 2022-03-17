import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { fetchPosts } from "../../helpers/requests";
import { PostData } from "../../helpers/types";
import AllPosts from "./components/AllPosts";

const HomeScreen = () => {
    const [posts, setPosts] = useState<PostData[]>([]);

    const fetchData = async () => {
        const data = await fetchPosts();
        setPosts(data);
    };
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <SafeAreaView style={styles.container}>
            <AllPosts posts={posts} />
        </SafeAreaView>
    );
};
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#CCE3DE",
        paddingHorizontal: 20,
    },
});
