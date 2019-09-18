import { AsyncStorage } from 'react-native';

export default class AuthService
{
    async checkAuthStatus()
    {
        try
        {
            const value = await AsyncStorage.getItem('@access_token')
            if (value == null)
            {
                const params = {
                    grant_type: 'https://oauth.reddit.com/grants/installed_client',
                    device_id: '***REMOVED***'
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
                            'Authorization': '***REMOVED***',
                            'Content-Type': 'application/x-www-form-urlencoded',
                        },
                        body: searchParams
                    })
                    .then(res => res.json())
                    .then(async res =>
                    {
                        console.log(res);

                        await AsyncStorage.setItem('@access_token', res.data.access_token)
                    });
            }
        }
        catch (e)
        {
            // error reading value
        }
    }

    async getAuthToken()
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