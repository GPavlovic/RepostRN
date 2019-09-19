import AuthService from './AuthService';

export default class Service
{
    private readonly authService: AuthService;

    constructor()
    {
        this.authService = new AuthService();
    }

    async _get<T>(url: string, headers: { [headerName: string]: string } = {}): Promise<T>
    {
        return this.authService.checkAuthStatus()
            .then(async () => this.authService.getAuthToken())
            .then(async (token) =>
            {
                return fetch(
                    `https://oauth.reddit.com${url}`,
                    {
                        method: 'GET',
                        cache: 'no-cache',
                        headers: {
                            ...headers,
                            'Authorization': `Bearer ${token}`
                        }
                    }
                ).then(res => res.json());
            });
    }

    async _post<T>(url: string, headers: { [headerName: string]: string }, body: any): Promise<T>
    {
        return this.authService.checkAuthStatus()
            .then(async () => this.authService.getAuthToken())
            .then(async (token) =>
            {
                return fetch(
                    `https://oauth.reddit.com${url}`,
                    {
                        method: 'POST',
                        cache: 'no-cache',
                        headers: {
                            ...headers,
                            'Authorization': `Bearer ${token}`
                        },
                        body
                    }
                ).then(res => res.json());
            });
    }
}