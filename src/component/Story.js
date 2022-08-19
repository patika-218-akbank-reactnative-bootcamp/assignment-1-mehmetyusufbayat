import React from "react";
import {View, Image, Pressable, StyleSheet, ScrollView} from 'react-native';

const Story = ({}) => {
    return (
        <ScrollView horizontal={true}>
            <Pressable>
                <View style={styles.container}>
                    <Image style={styles.stories}source={{uri:'https://picsum.photos/200/301'}}></Image>
                    <Image style={styles.stories}source={{uri:'https://picsum.photos/200/200'}}></Image>
                    <Image style={styles.stories}source={{uri:'https://picsum.photos/200/250'}}></Image>
                    <Image style={styles.stories}source={{uri:'https://picsum.photos/200/305'}}></Image>
                    <Image style={styles.stories}source={{uri:'https://picsum.photos/200/308'}}></Image>
                    <Image style={styles.stories}source={{uri:'https://picsum.photos/200/260'}}></Image>        
                </View>
                <Image style={styles.add}></Image>
            </Pressable>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 100,
        backgroundColor: "rgba(0,0,0,0.2)",
        display: "flex",
        flexDirection: "row",
    },
    stories: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: "gray",
        position: "relative",
        top: 10,
        left: 10,
        marginLeft: 10, 
    },
    add: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: "rgba(0,0,0,0.7)",
        position: "absolute",
        top: 55,
        left: 75,
    },
});

export default Story;