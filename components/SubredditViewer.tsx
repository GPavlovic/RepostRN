import React, { Component } from 'react';
import { View, FlatList } from 'react-native';

import PostSlot from './PostSlot';
import AuthService from '../services/AuthService';

export default class SubredditViewer extends Component<{ mode: string, subredditName: string }>
{
    private readonly authService = new AuthService();

    state = {
        mode: 'hot',
        subredditName: 'all',
        currentPage: 1,
        currentPosts: []
    };

    componentDidMount()
    {
        this.authService.getAuthToken()
            .then(authToken =>
            {
                fetch(`https://oauth.reddit.com/r/${this.state.subredditName}/${this.state.mode}`,
                    {
                        headers: {
                            'Authorization': `Bearer ${authToken}`
                        }
                    })
                    .then(res => res.json())
                    .then(res =>
                    {
                        this.setState({
                            currentPosts: res.data.children
                        })
                    });
            })

    }

    render() 
    {
        return (
            <View style={{ justifyContent: "center", alignItems: "stretch", flex: 1 }}>
                <FlatList
                    data={this.state.currentPosts}
                    renderItem={({ item }) => <PostSlot post={item} key={item.data.name} />}
                    keyExtractor={item => item.data.name}
                />
            </View>
        )
    }
}