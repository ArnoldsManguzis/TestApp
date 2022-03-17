import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { capitalize } from "../../../helpers/helpers";

interface PostContainerProps {
    title: string;
    body: string;
}
const PostContainer = ({ title, body }: PostContainerProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{capitalize(title).trim()}</Text>
            <ScrollView style={{ flex: 1 }}>
                <Text style={styles.body}>{capitalize(body).trim()}</Text>
            </ScrollView>
        </View>
    );
};

export default PostContainer;

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "left",
        marginBottom: 10,
    },
    body: {
        fontSize: 14,
        textAlign: "left",
    },
});
