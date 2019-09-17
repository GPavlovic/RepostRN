import React, { Component } from 'react';
import { View } from 'react-native';

import SubredditViewer from '../components/SubredditViewer';

export default class Landing extends Component
{
    state = {
        redditAll: []
    };

    render()
    {
        return (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
                <SubredditViewer mode="hot" subredditName="all" />
            </View>
        );
    }
}
