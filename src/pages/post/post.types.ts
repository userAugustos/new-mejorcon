import {socialProfiles} from "@pages/home.types";

export interface IPost {
    id: number,
    slug: string,
    link: string,
    permalink: string,
    title: string,
    headline?: string,
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
// dam this is long
export type singlePost = {
    "id": number,
    "slug": string,
    "link": string,
    "permalink": string,
    "title": string,
    "headline": string,
    "excerpt": string,
    "featured_media": featuredMedia,
    "categories": categoriesItem[],
    "sponsor"?: any,
    "theme": string,
    "published": string,
    "modified": string,
    "options": {
        "ads": string,
        "author": string,
        "date": string,
        "comments": string,
        "sticky": boolean,
        "is_sponsored"?: any,
        "sponsor"?: any,
        "verification"?: {
            "type": string,
            "text": string,
            "content": string,
        },
        "classification"?: null,
        "template": "post",
        "taboola_indexable": "on",
        "featured_image": "on"
    },
    "breadcrumbs": {
        "links": [
            {
                "term_id": number
                "url": string,
                "text": string,
                "id": number
            }
        ],
        "options": {
            "home": string,
            "boldlast": boolean,
            "prefix": string,
            "sep": string,
        }
    },
    "content": string,
    "bibliography": string,
    "tags": [{
        "id": number,
        "name"?: string,
        "slug"?: string,
        "permalink"?: string,
        "link"?: string,
        "description"?: string,
    }],
    "author": {
        "id": number,
        "slug": string
        "link": string
        "permalink": string
        "name": string
        "description": string
        "picture": string
        "type": string
        "profession": string
        "social_profiles": socialProfiles
    },
    "reviewed": null,
    "reviewed_by": reviewedBy,
    metas: postMetas,
    "related_links": null,
    "previous_post": IPost,
    "next_post": IPost,
    "previous_posts": IPost[],
    "next_posts": IPost[],
    "sidebars": {
        "right": {
            "id": "single-sidebar",
            widgets: widget[]
        },
        "bottom": {
            "id": string,
            "widgets": widget[]
        }
    },
    "parent"?: null,
    "hreflang"?: null
}

type postMetas = {
    title: string;
    description: string;
    robots: string;
    canonical: string;
    ampUrl: string;
    "og:locale": string;
    "og:title": string;
    "og:description": string;
    "og:type": string;
    "og:site_name": string;
    "og:image": string;
    "og:image:alt": string;
    "og:image:width": number;
    "og:image:height": number;
    "og:image:secure_url": string;
    "article:author": string;
    "article:publisher": string;
    "article:tag?": null;
    "article:section": string;
    "twitter:card": string;
    "twitter:site": string;
    "twitter:creator": string;
    "atomik:ads-provider": string;
    "atomik:monetizable": boolean;
    "google-site-verification": string,
    'msvalidate.01?': null,
    'yandex-verification?': null,
    'schema?': null
}

type widget = {
    "id": string
    "type": string
    "options": {
        "title"?: string,
        "posts_per_page"?: number,
        "offset"?: number,
        "order"?: string,
        "orderby"?: string,
        "content_type"?: string,
        "post_style"?: string,
        "category"?: string,
        "widget_type"?: string,
        "widget_class"?: string,
        "post_type"?: string[]
    },
    "content": IPost[]
}

type reviewedBy = {
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
