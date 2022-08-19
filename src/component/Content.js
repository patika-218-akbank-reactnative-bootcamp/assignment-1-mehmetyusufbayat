import React from "react";
import {View, Text, Image, Pressable, StyleSheet, ScrollView} from 'react-native';

const Content = ({}) => {
    return (
        <ScrollView>
            <View>
                <View style={styles.topcontent}>
                    <Image style={styles.contentprofile} source={{uri:'https://picsum.photos/200/208'}}>

                    </Image>
                    <Text style={styles.menu}>...</Text>
                </View>
                <Image style={styles.content} source={{uri:'https://picsum.photos/200/300'}}>

                </Image>
                <Pressable>
                    <View style={styles.contentbottombar}>
                        <Image style={styles.likeIcon}></Image>
                        <Image style={styles.commentIcon}></Image>
                        <Image style={styles.sendIcon}></Image>
                    </View>
                </Pressable>    
                <View style={styles.likebar}>
                    <Image style={styles.yourLikes}source={{uri:'https://picsum.photos/200/261'}}></Image>
                    <Image style={styles.yourLikes}source={{uri:'https://picsum.photos/200/263'}}></Image>
                    <Image style={styles.yourLikes}source={{uri:'https://picsum.photos/200/264'}}></Image>
                    <Text style={styles.text}>
                        emre and other people liked
                    </Text>
                </View>
                <Text style={styles.comments}>username say something here</Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    topcontent: {
        height: 50,
        width: "100%",
        backgroundColor: "rgba(0,0,0,0.1)"
    },
    contentprofile: {
        width: 45,
        height: 45,
        borderRadius: 22.5,
        backgroundColor: "gray",
        position: "absolute",
        top: 2.5,
        left: 10,
    },
    menu: {
        width: 50,
        position: "absolute",
        right: 0,
        top: -8,
        fontSize: 30,
    },
    content: {
        width: "100%",
        height: 400,
        backgroundColor: "rgba(0,0,0,0.3)",
    },
    contentbottombar: {
        width: "100%",
        height: 50,
        backgroundColor: "rgba(0,0,0,0.1)",
        display: "flex",
        flexDirection: "row",
    },
    likeIcon: {
        width: 30,
        height: 30,
        backgroundColor: "rgba(0,0,0,0.2)",
        position: "absolute",
        left: 10,
        top: 10,
    },
    commentIcon: {
        width: 30,
        height: 30,
        backgroundColor: "rgba(0,0,0,0.2)",
        position: "absolute",
        left: 50,
        top: 10,
    },
    sendIcon: {
        width: 30,
        height: 30,
        backgroundColor: "rgba(0,0,0,0.2)",
        position: "absolute",
        left: 90,
        top: 10,
    },
    likebar: {
        width: "100%",
        height: 50,
        backgroundColor: "rgba(0,0,0,0.3)",
        display: "flex",
        flexDirection: "row",
    },
    yourLikes: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: "gray",
        margin: -8,
        marginTop: 10,
        left: 15,
        position: "relative",
    },
    text: {
        fontSize: 15,
        position: "absolute",
        left: 80,
        top: 15,
    },
    comments: {
        width: "100%",
        height: 100,
        fontWeight: "600",
    },
});

export default Content;