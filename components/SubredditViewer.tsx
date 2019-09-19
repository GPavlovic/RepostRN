import React, { Component } from 'react';
import { View, FlatList } from 'react-native';

import PostSlot from './PostSlot';
import SubredditService from '../services/SubredditService';

export default class SubredditViewer extends Component<{ mode: string, subredditName: string }>
{
    state = {
        mode: 'hot',
        subredditName: 'all',
        currentPage: 1,
        currentPosts: []
    };

    async componentDidMount()
    {
        const listing = await SubredditService.subreddit('all').get();
        this.setState({
            currentPosts: listing.data.children
        });
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