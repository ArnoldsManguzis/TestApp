import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { View, StyleSheet, FlatList, ActivityIndicator } from "react-native";
import { RootStackParamList } from "../../../../App";
import { PostData } from "../../../helpers/types";
import Post from "./Post";

interface AllPostsProps {
    posts: PostData[];
}
const AllPosts = ({ posts }: AllPostsProps) => {
    const navigation =
        useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    return (
        <>
            {posts.length > 0 ? (
                <FlatList
                    data={posts}
                    keyExtractor={(post) => `${post.id}`}
                    renderItem={(post) => (
                        <Post
                            title={post.item.title}
                            onPressPost={() =>
                                navigation.navigate("ViewPost", {
                                    post: post.item,
                                })
                            }
                        />
                    )}
                    ItemSeparatorComponent={() => (
                        <View style={{ marginVertical: 5 }} />
                    )}
                    contentContainerStyle={{ paddingBottom: 10 }}
                    ListHeaderComponent={() => (
                        <View style={{ marginTop: 10 }} />
                    )}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                />
            ) : (
                <ActivityIndicator
                    style={{ marginTop: 20 }}
                    color="black"
                    size={32}
                />
            )}
        </>
    );
};

export default AllPosts;

const styles = StyleSheet.create({});
