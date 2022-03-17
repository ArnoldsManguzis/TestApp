import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { capitalize } from "../../../helpers/helpers";
import { CommentData } from "../../../helpers/types";

interface CommentProps {
    comment: CommentData;
}
const Comment = ({ comment }: CommentProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.commentHeader}>
                <Text style={[styles.text, { textAlign: "left" }]}>
                    {capitalize(comment.name)}
                </Text>
                <Text style={[styles.text, { textAlign: "right" }]}>
                    {comment.email}
                </Text>
            </View>
            <Text style={styles.bodyText}>{capitalize(comment.body)}</Text>
        </View>
    );
};

export default Comment;

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        backgroundColor: "#CCE3DE",
        justifyContent: "center",
        paddingHorizontal: 10,
        elevation: 2,
    },
    commentHeader: {
        flexDirection: "row",
        marginBottom: 5,
        paddingVertical: 5,
        borderBottomWidth: 1,
    },
    text: {
        width: "50%",
        fontSize: 12,
        fontWeight: "bold",
    },
    bodyText: {
        marginBottom: 10,
        fontSize: 12,
    },
});
