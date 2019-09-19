import Service from './Service';
import IListing from '../models/Listing';

export default class SubredditService
{
    static subreddit(subredditName: string) 
    {
        return new SubredditRequest(subredditName);
    }
}

class SubredditRequest extends Service
{
    private _subredditName;
    private _mode = 'hot';
    private _after = '';
    private _before = '';
    private _count = 0;
    private _includeCategories = false;
    private _limit = 25;

    constructor(subredditName: string) 
    {
        super();
        this._subredditName = subredditName;
    }

    mode(mode: 'hot' | 'new' | 'random')
    {
        this._mode = mode;
        return this;
    }

    after(fullname: string)
    {
        this._after = fullname;
        return this;
    }

    before(fullname: string)
    {
        this._before = fullname;
        return this;
    }

    count(count: number)
    {
        this._count = count;
        return this;
    }

    includeCategories(include: boolean)
    {
        this._includeCategories = include;
    }

    limit(limit: number)
    {
        this._limit = limit;
        return this;
    }

    get()
    {
        const url = `/r/${this._subredditName}/${this._mode}?after=${this._after}&before=${this._before}&count=${this._count}&include_categories=${this._includeCategories}&limit=${this._limit}`;
        console.log(url);
        return this._get<IListing>(url);
    }
}