import {useEffect, useState} from "react";
import {IPost} from "@pages/post/post.types";

export type statePost = { data: IPost[], page: number, size: number }
export function Search(searchTerm: string, relevance: boolean = false) {
    const [posts, setPosts] = useState<statePost>([] as any);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if(searchTerm.length <= 1) {
            return;
        }
        const controller = new AbortController();
        const signal = controller.signal;

        setLoading(true);

        fetch(`https://api.beta.mejorconsalud.com/wp-json/mc/v2/posts?search=${searchTerm}&per_page=6${relevance && '&orderby=relevance'}`, { signal })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Request failed');
                }
            })
            .then(data => {
                setPosts(data);
                setLoading(false);
            })
            .catch(error => {
                if (error.name !== 'AbortError') {
                    console.error(error);
                    setLoading(false);
                }
            });

        return () => {
            controller.abort();
        };
    }, [searchTerm]);

    return { loading, posts };
}