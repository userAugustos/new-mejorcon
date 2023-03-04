export interface IPost {
    id: number,
    slug: string,
    link: string,
    permalink: string,
    title: string,
    headline: string,
    excerpt: string,
    featured_media: featuredMedia,
    categories: categoriesItem[],
    sponsor?: null,
    theme: string,
    published: string,
    modified: string
}

export type featuredMedia = {
    thumbnail: string,
    medium: string,
    "medium_large": string,
    large: string,
    "1536x1536": string,
    "2048x2048": string,
    "big-size": string,
    "big-size_mobile": string,
    "mid-size": string,
    "mid-size_mobile": string,
    "web-stories-poster-portrait": string,
    "web-stories-publisher-logo": string,
    "web-stories-thumbnail": string,
}

export type categoriesItem = {
    id: number,
    name: string,
    slug: string,
    description: string,
    link: string,
    permalink: string
}
