import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";
import { PostData } from "../../../helpers/types";

interface PostProps {
    title: string;
    onPressPost: () => void;
}
const Post = ({ title, onPressPost }: PostProps) => {
    return (
        <Pressable style={styles.container} onPress={onPressPost}>
            <Text>{title}</Text>
        </Pressable>
    );
};

export default Post;

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        minHeight: 50,
        maxHeight: 75,
        backgroundColor: "#EAF4F4",
        justifyContent: "center",
        paddingHorizontal: 10,
    },
});
