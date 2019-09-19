import { AsyncStorage } from 'react-native';
import { parseISO, isBefore } from 'date-fns';

export default class AuthService
{
    public async checkAuthStatus(): Promise<void>
    {
        try
        {
            const now = new Date();
            const accessToken = await AsyncStorage.getItem('@access_token');
            const expiryTime = await AsyncStorage.getItem('@expiry');

            if (accessToken == null // Non-existent
                || isBefore(now, parseISO(expiryTime))) // Expired
            {
                const params = {
                    grant_type: 'https://oauth.reddit.com/grants/installed_client',
                    device_id: ''
                };

                const searchParams = Object.keys(params).map((key) =>
                {
                    return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
                }).join('&');

                // App only auth
                return fetch('https://www.reddit.com/api/v1/access_token',
                    {
                        method: 'POST',
                        cache: 'no-cache',
                        headers: {
                            'Authorization': '',
                            'Content-Type': 'application/x-www-form-urlencoded'
                        },
                        body: searchParams
                    })
                    .then(res => res.json())
                    .then(async res =>
                    {
                        // Calculate the expirt time of the token
                        let millisecondsSinceEpoch = (new Date()).getTime();
                        millisecondsSinceEpoch += Math.round(res['expires_in'] * 1000);
                        const expiryTime = new Date(millisecondsSinceEpoch);
                        // Save the token and it's expiry time
                        await AsyncStorage.setItem('@access_token', res['access_token']);
                        await AsyncStorage.setItem('@expiry', expiryTime.toISOString());
                    });
            }
        }
        catch (e)
        {
            // error reading value
        }
    }

    async getAuthToken(): Promise<string>
    {
        try
        {
            return await AsyncStorage.getItem('@access_token');
        }
        catch (e)
        {
            // error reading value
        }
    }
}