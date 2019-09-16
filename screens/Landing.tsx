import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Landing extends Component
{
    state = {
        redditAll: []
    };

    componentDidMount()
    {
        return fetch('https://www.reddit.com/r/all/.json')
            .then(res => res.json())
            .then(res =>
            {
                this.setState({
                    redditAll: res.data.children
                })
            });
    }

    render()
    {
        return (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
                {this.state.redditAll.map(post => (
                    <Text key={post.data.name}>{post.data.title}</Text>
                ))}
            </View>
        );
    }
}
