import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";
import { capitalize } from "../../../helpers/helpers";

interface PostProps {
    title: string;
    onPressPost: () => void;
    index: number;
}
const Post = ({ title, onPressPost, index }: PostProps) => {
    return (
        <Pressable
            style={[
                styles.container,
                { backgroundColor: index % 2 === 0 ? "#EAF4F4" : "#D7EAEA" },
            ]}
            onPress={onPressPost}
        >
            <Text style={{ flex: 29 / 30 }}>{capitalize(title)}</Text>
            <Text style={styles.icon}>{"ᐳ"}</Text>
        </Pressable>
    );
};

export default Post;

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        minHeight: 50,
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 10,
        elevation: 1,
        flexDirection: "row",
    },
    icon: {
        flex: 1 / 30,
        fontWeight: "bold",
        marginLeft: 10,
    },
});
