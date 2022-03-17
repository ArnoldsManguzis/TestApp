import React from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    ActivityIndicator,
} from "react-native";
import { CommentData } from "../../../helpers/types";
import Comment from "./Comment";

interface CommentSectionProps {
    comments: CommentData[];
}
const CommentSection = ({ comments }: CommentSectionProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.commentSectionTitleContainer}>
                <Text style={styles.commentSectionTitle}>Comments</Text>
            </View>
            {comments.length > 0 ? (
                <FlatList
                    data={comments}
                    keyExtractor={(comment) => `${comment.id}`}
                    renderItem={(comment) => <Comment comment={comment.item} />}
                    ItemSeparatorComponent={() => (
                        <View style={{ marginVertical: 5 }} />
                    )}
                    contentContainerStyle={{ paddingBottom: 10 }}
                    ListHeaderComponent={() => (
                        <View style={{ marginTop: 10 }} />
                    )}
                    ListFooterComponent={() => (
                        <View style={{ marginBottom: 10 }} />
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
        </View>
    );
};

export default CommentSection;

const styles = StyleSheet.create({
    container: {
        height: 300,
        backgroundColor: "#EAF4F4",
        paddingHorizontal: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    commentSectionTitleContainer: { alignItems: "center" },
    commentSectionTitle: {
        fontSize: 20,
        fontWeight: "bold",
    },
});
