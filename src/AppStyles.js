import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const SCREEN_WIDTH = width < height ? width : height;
const numColumns = 2;

export const AppStyles = {
    color: {
        main: "#5ea23a",
        text: "#442941",
        title: "#464646",
        subtitle: "#545454",
        lightgrey: "#e6e6e6",
        categoryTitle: "#161616",
        tint: "#7e4796",
        description: "#bbbbbb",
        filterTitle: "#8a8a8a",
        starRating: "#2bdf85",
        location: "#a9a9a9",
        white: "white",
        facebook: "#4267b2",
        grey: "#cecece",
        greyfill: "#f1f1f1",
        pink: "#C35399",
        greenBlue: "#00aea8",
        placeholder: "#a0a0a0",
        background: "#f2f2f2",
        blue: "#3293fe",
        mainpurple: "#833F8B",
    },
    fontSize: {
        title: 30,
        content: 20,
        normal: 16
    },
    buttonWidth: {
        main: "70%"
    },
    textInputWidth: {
        main: "80%"
    },
    fontName: {
        main: "Montserrat",
        bold: "Montserrat-Bold",
        light: "Montserrat-Light"
    },
    borderRadius: {
        main: 25,
        small: 5
    }
};
