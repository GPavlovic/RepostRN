import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';

import Landing from './screens/Landing';
import AuthService from './services/AuthService';

export default class App extends React.Component<any, { visible: boolean }>
{
    private readonly authService = new AuthService();

    componentDidMount()
    {
        this.authService.checkAuthStatus();
    }

    state = {
        visible: false,
    };

    render()
    {
        return (
            <PaperProvider>
                <View style={styles.container}>
                    <Landing />
                </View>
            </PaperProvider>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: StatusBar.currentHeight
    },
});
