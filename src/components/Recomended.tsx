import { GetStaticProps } from "next";
import { Pages } from "./pages";
import {StaticProps, pages } from "@pages/home.types";
import {Card} from "@components/card";
import {Categories} from "@components/categories";
import {IPost} from "@pages/post/post.types";
import {useEffect, useState} from "react";

export default function Recomended({ posts }: { posts: { data: IPost[], pages?: number, size?: number }}) {
    return (
        <div className="grid bg-gray-100 grid-cols-5 grid-rows-1 lg:px-6 lg:max-w-[1600px] m-auto py-10 shade-transition">
            <Pages />
            <div className="col-span-5 px-8 lg:col-span-3">
                <ul className="min-w-[300px]">
                    {posts.data.map(post => (
                        <li key={post.id}>
                            <Card post={post} />
                        </li>
                    ))}
                </ul>
            </div>
            <Categories />
        </div>
    );
}
