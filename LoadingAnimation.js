import React from 'react';
import type {Node} from 'react';
import {
  StyleSheet,
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


const LoadingAnimation: () => Node = () => {
  return (
    <View style={styles.container}> 
        <Logo style={styles.logo}/>
        <View style={styles.activityIndicator}>
            <PulseIndicator color={AppStyles.color.mainpurple} style={{ transform: [{ scaleX: 1.4 }, { scaleY: 1.3 }] }}/>
        </View>
        <View style={styles.smallWave}>
            <BackWave  width="100%" style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}/>
        </View>
        
        <View style={styles.frontWaveContainer}>
            <View style={styles.frontWave}>
                <FrontWave width="100%" style={{ transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }] }}/>
            </View>
        </View>

    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'white',
        width: "100%"
    },
    logo: {
        position: "absolute",
        padding: "auto",
    },
    smallWave: {
        flex: 10,
        justifyContent: 'flex-end',
        width: "100%",
        borderWidth: 2
    },
    frontWave: {
        flex: 1,
        justifyContent: 'flex-end',
        width: "100%",
        borderWidth: 2
    },
    frontWaveContainer: {
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        borderWidth: 3,
    },
    activityIndicator: {
        flex: 117,
        justifyContent: 'flex-end',
    }
});

export default LoadingAnimation;
