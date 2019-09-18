import React, { Component } from 'react';
import { StatusBar, Image } from 'react-native';

export default class PostImageViewer extends Component<{ uri: string }>
{
    render()
    {
        return (
            <Image
                style={{ width: '100%', height: `calc(100% - ${StatusBar.currentHeight})` }}
                source={{ uri: this.props.uri }} />
        )
    }
}