import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { PostData } from "./src/helpers/types";
import HomeScreen from "./src/screens/HomeScreen";
import ViewPost from "./src/screens/ViewPost";
export type RootStackParamList = {
    Home: undefined;
    ViewPost: { post: PostData };
};
const RootStack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
    return (
        <NavigationContainer>
            <RootStack.Navigator
                initialRouteName="Home"
                screenOptions={{ headerTitleAlign: "center" }}
            >
                <RootStack.Screen name="Home" component={HomeScreen} />
                <RootStack.Screen
                    name="ViewPost"
                    component={ViewPost}
                    options={{ title: "Post" }}
                />
            </RootStack.Navigator>
        </NavigationContainer>
    );
};

export default App;
