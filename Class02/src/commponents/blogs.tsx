import { useEffect } from "react"
import { useState } from "react"

const Blogs = () => {

    const [posts, setPosts] = useState([])


    const getData = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json()

        // console.log('data', data)
        setPosts(data)
    }
    console.log('post', posts)
    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            <div>
                <h1>Blogs</h1>
            </div>

            <div>
                {posts.map((post) => (
                    <div key={post.id}>
                        <h1>{post.title}</h1>
                        <p>{post.body}</p>
                    </div>
                ))}

            </div>
        </div>

    )
}

export default Blogs