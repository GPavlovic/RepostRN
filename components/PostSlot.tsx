import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Divider, Surface } from 'react-native-paper';

import IPost from '../models/Post';

export default class PostSlot extends Component<{ post: IPost }>
{
    render() 
    {
        return (
            <View style={styles.container}>
                <View style={styles.innerContent}>
                    <Surface style={styles.surface}>
                        <Image
                            style={{ width: 50, height: 50 }}
                            source={{ uri: this.props.post.data.thumbnail }} />
                        <Text style={styles.title}>{this.props.post.data.title}</Text>
                    </Surface>
                </View>
                <Divider style={{ backgroundColor: 'dimgray' }} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    innerContent: {
        flex: 1,
        width: '100%'
    },
    surface: {
        flexDirection: "row",
        backgroundColor: 'black'
    },
    title: {
        color: 'white',
        padding: 6
    }
})