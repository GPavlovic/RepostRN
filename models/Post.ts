export default interface IPost 
{
    kind: string;
    data: IPostData
}

interface IPostData
{
    subreddit: string;
    author_fullname: string;
    saved: boolean;
    gilded: number;
    clicked: boolean;
    title: string;
    hidden: boolean;
    downs: number;
    thumbnail_height: number;
    hide_score: boolean;
    name: string;
    subreddit_type: string;
    ups: number;
    total_awards_received: number;
    thumbnail_width: number;
    is_original_content: boolean;
    is_meta: boolean;
    score: number;
    thumbnail: string;
    edited: boolean;
    post_hint: string;
    is_self: boolean;
    created: number;
    domain: string;
    over_18: boolean;
    preview: IPostPreview
    spoiler: boolean;
    locked: boolean;
    visited: boolean;
    subreddit_id: string;
    id: string;
    author: string;
    num_crossposts: number;
    num_comments: number;
    permalink: string;
    url: string;
    subreddit_subscribers: number
    created_utc: number
    is_video: boolean;
}

interface IPostPreview
{
    images: IPostImage[]
    enabled: boolean;
}

interface IPostImage
{
    source: IPostImageSrc
    resolutions: IPostImageResolution[]
    variants: any;
    id: string;
}

interface IPostImageSrc
{
    url: string;
    width: number;
    height: number;
}

interface IPostImageResolution
{
    url: string;
    width: number;
    height: number;
}