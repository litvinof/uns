/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Touchable,
  useColorScheme,
  View,
} from 'react-native';

import { AppStyles } from "./src/AppStyles";
import { ActivityIndicator } from "react-native";


import Logo from "./assets/icons/logo.svg";
import BackWave from "./assets/icons/mainBackWave.svg";
import FrontWave from "./assets/icons/mainFrontWave.svg";
import {
  PulseIndicator,
} from 'react-native-indicators';

            // <ActivityIndicator color={AppStyles.color.mainpurple} size='large' style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}/>

// import { Image, TouchableOpacity } from "react-native";
// import LoadingScreen from "./LoadingAnimation";
// import Logosvg from "./assets/icons/logo.svg";
// import SignInIcon from "./assets/icons/welcomeSignIn.svg";
// import SignUpIcon from "./assets/icons/welcomeSignUp.svg";
// import BigWave from "./assets/icons/welcomeBigWave.png";
// import SmallWave from "./assets/icons/welcomeSmallWave.png";


async function getItems() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return ['Apple', 'Banana', 'Orange', 'Pineapple', 'Mango', 'Kiwi'];
}

const App = () => {
    const [items, setItems] = useState(['Pineapple', 'Mango', 'Kiwi']);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        getItems().then((items) => {
            setItems(items);
            setLoading(false);
        });
    }, []);

    if (loading) {
        // stuff = <LoadingScreen/> 
    } else {
        // stuff = <View style={styles.container}>
		// 		<View style={styles.logoContainer}>
		// 			<Logosvg
		// 				width="30%"
		// 			/>
		// 		</View>

		// 		<View style={styles.welcomeTextContainer}>
		// 			<Text style={styles.welcomeText}>WELCOME</Text>
		// 		</View>

		// 		<View style={styles.normalTextContainer}>
		// 			<Text style={styles.normalText}>Sign in to continue</Text>
		// 		</View>

		// 		<View style={styles.selectionContainer}>
		// 			<View style={styles.signInContainer}>
		// 				<TouchableOpacity
		// 					onPress={() => { this.props.navigation.navigate("Login"); }}
		// 					style={styles.signIn}>
		// 					<SignInIcon

		// 					/>
		// 				</TouchableOpacity>
		// 			</View>


		// 			<View style={styles.signUpContainer}>
		// 				<TouchableOpacity
		// 					onPress={() => { this.props.navigation.navigate("Registration"); }}
		// 					style={styles.signUp}>
		// 					<SignUpIcon

		// 					/>
		// 				</TouchableOpacity>
		// 			</View>


		// 		</View>
		// 		<Image source={SmallWave} style={styles.smallWave} />
		// 		<Image source={BigWave} style={styles.bigWave} />

		// 		<View style={styles.emptyFillContainer}>
		// 		</View>

		// 	</View>
        stuff = null;
    }
    // stuff = () => {throw 42}; 
    return (
        <SafeAreaView style={styles.container}>
            <Text style={{borderWidth: 1, color: "black"}}> Hey there </Text>
        </SafeAreaView>

    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'white',
    },
	logoContainer: {
		flex: 50,
		alignSelf: "stretch",
		alignItems: "center",
		justifyContent: "flex-end",
	},
	welcomeTextContainer: {
		flex: 15,
		justifyContent: "center",
	},
	normalTextContainer: {
		flex: 10,
		justifyContent: "flex-start",
	},
	welcomeText: {
		fontFamily: AppStyles.fontName.bold,
		color: AppStyles.color.text,
		fontSize: 24,
	},
	normalText: {
		color: AppStyles.color.text,
		fontFamily: AppStyles.fontName.main,
		fontSize: 14,
	},
	selectionContainer: {
		flex: 50,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: "stretch",
	},
	signInContainer: {
		flex: 2,
		justifyContent: 'center',
		alignItems: 'flex-end',
		marginRight: '5%'
	},
	signUpContainer: {
		flex: 2,
		justifyContent: 'center',
		alignItems: 'flex-start'
	},
	emptyFillContainer: {
		flex: 40
	},
	smallWave: {
		position: 'absolute',
		zIndex: 1,
		bottom: 0,
		width: '100%',
		height: '22%'
	},
	bigWave: {
		position: 'absolute',
		zIndex: 2,
		bottom: 0,
		width: '100%',
		height: '25%'
	},
	signUp: {
		shadowColor: "#000000",
		shadowOpacity: 0.25,
		shadowRadius: 5,
		shadowOffset: {
			height: 1,
			width: 1
		},
	},
	signIn: {
		shadowColor: "#000000",
		shadowOpacity: 0.25,
		shadowRadius: 5,
		shadowOffset: {
			height: 1,
			width: 1
		},
	}
});

export default App;
