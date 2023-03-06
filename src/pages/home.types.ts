import {IPost} from "@pages/post/post.types";

export interface StaticProps {
        postsByRelevance: { data: IPost[], pages?: number, size?: number },
    // recomended: {
    //     // pages: { data: pages[], pages?: number, size?: number },
    //     // categories: { data: categories[], pages?: number, size?: number }
    // }
}

export type pages = {
    id: number,
    options: {
        ads: string,
        author: string,
        date: string,
        comments: string,
        template: string,
    },
    page_settings: {
        header: string,
        show_speciality: boolean,
        review_board: review[]
    },
    slug: string
    link: string
    permalink: string
    title: string
    excerpt: string
    content: string
    featured_media?: string,
    author: {
        id: number,
        slug: string,
        link: string,
        permalink: string,
        name: string,
        description: string,
        picture: string,
        type: string,
        profession?: string,
        social_profiles: socialProfiles
    },
    published: string,
    modified: string,
    reviewed?: boolean,
    metas: {
        title: string,
        description: string,
        robots: string,
        canonical: string,
        "og:title": string,
        "og:description": string,
        "og:locale": string,
        "og:type": string,
        "og:site_name": string,
        "og:image"?: string,
        "og:image:width"?: string
        "og:image:height"?: string
        "og:image:secure_url"?: string
        "article:publisher": string,
        "twitter:card": string,
        "twitter:site": string,
        "twitter:creator": string,
        "schema"?: string
    }
}

export type categories = {
    id: number,
    name: string,
    slug: string,
    description: string,
    permalink: string,
    link: string,
    options: {
        ads: string,
        template: string
    }
}


type review = {
    "id": number,
    "slug": string,
    "link": string,
    "permalink": string,
    "name": string,
    "description": string,
    "picture": string,
    "type": string,
    "profession": string,
    "social_profiles": socialProfiles
}

export type socialProfiles = {
    "twitter"?: string,
        "facebook"?: string,
        "linkedin"?: string,
        "instagram"?: string,
        "url"?: string,
        "pinterest"?: string,
        "youtube"?: string
}
