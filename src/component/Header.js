import React from 'react';
import {View, Text, Image, StyleSheet, AppRegistry} from 'react-native';

const Header = ({head}) => {
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.headStyles}>{head}</Text>
                <Image style={styles.MessageIcon}></Image>
                <Image style={styles.RequestIcon}></Image>
                <Image style={styles.ShareIcon}></Image>
            </View>
        </View>
    );
};

AppRegistry.registerComponent('AndroidFonts', () => AndroidFonts);

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 50,
        backgroundColor: "gray",
        display: "flex",
        flexDirection: "row",
    },
    headStyles: {
        fontSize: 30,
        fontWeight: "600",
        fontStyle: "italic",
        width: 150,
        left: 10,
        fontFamily: 'sans-serif-condensed',
    },
    MessageIcon: {
        width: 30,
        height: 30,
        backgroundColor: "rgba(0,0,0,0.2)",
        position: "absolute",
        right: 20,
        top: 10,
    },
    RequestIcon: {
        width: 30,
        height: 30,
        backgroundColor: "rgba(0,0,0,0.2)",
        position: "absolute",
        right: 70,
        top: 10,
    },
    ShareIcon: {
        width: 30,
        height: 30,
        backgroundColor: "rgba(0,0,0,0.2)",
        position: "absolute",
        right: 120,
        top: 10,
    }
});

export default Header;