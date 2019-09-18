import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import IPost from '../models/Post';
import PostImageViewer from '../components/PostImageViewer';
import PostVideoViewer from '../components/PostVideoViewer';

export default class PostView extends Component<{ post: IPost }>
{
    render() 
    {
        return (
            <View style={styles.container}>
                <View style={styles.innerContent}>
                    {this.props.post.data.is_video ?
                        <PostVideoViewer uri={this.props.post.data.url} /> :
                        <PostImageViewer uri={this.props.post.data.url} />
                    }
                </View>
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
    }
})