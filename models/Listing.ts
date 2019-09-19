import { PostTypes } from './PostTypes';
import IPost from './Post';

export default interface IListing
{
    kind: PostTypes;
    data: IListingData;
}

interface IListingData
{
    modhash: string;
    dist: number;
    children: IPost[];
}