import React, { useState } from "react"
import useFetch from "../hooks/useFetch";

interface Post {
    id: number;
    title: string;
    body: string;
}

const PostList: React.FC = () => {

    const [start, setStart] = useState(0);
    const [limit] = useState(5);
    const data = useFetch<Post>('https://jsonplaceholder.org/posts');

    const handleNext = () => {
        setStart(previousStart => previousStart + limit);
    }

    const handlePrevious = () => {
        setStart(previousStart => Math.max(previousStart - limit, 0));
    }

    const paginatedData = data.slice(start, start+limit);

    return (
        <>
            <h1>Posts</h1>
            <ul>
                {paginatedData.length > 0 ? (
                    paginatedData.map((post: any) => (
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </li>
                    ))
                ) : (
                    <p>No posts available</p>
                )}
            </ul>
            <div>
                <button onClick={handlePrevious} disabled={start == 0}>Previous</button>

                <button onClick={handleNext}>Next</button>
            </div>
        </>
    )
}

export default PostList;