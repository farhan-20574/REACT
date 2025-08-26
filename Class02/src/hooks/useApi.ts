import { useEffect, useState } from "react"


const useApi = ()=> {

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

    return {posts}

}

export default useApi