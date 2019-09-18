import React, { Component } from 'react';
import { Text } from 'react-native';

export default class PostImageViewer extends Component<{ uri: string }>
{
    render()
    {
        return (
            <Text>{this.props.uri}</Text>
        )
    }
}