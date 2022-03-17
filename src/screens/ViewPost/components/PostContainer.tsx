import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

interface PostContainerProps {
    title: string;
    body: string;
}
const PostContainer = ({ title, body }: PostContainerProps) => {
    return (
        <View style={{ flex: 1, paddingHorizontal: 10 }}>
            <Text style={styles.title}>{title}</Text>
            <ScrollView style={{ flex: 1 }}>
                <Text style={styles.body}>{body}</Text>
            </ScrollView>
        </View>
    );
};

export default PostContainer;

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 10,
    },
    body: {
        fontSize: 14,
        textAlign: "left",
    },
});
