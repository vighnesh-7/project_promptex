// developers dashboard
'use client'

import { useState,useEffect } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

import Profile from "@components/Profile"

const MyProfile = () => {

    const router = useRouter()
    
    const {data:session}=useSession()
    const [posts,setPosts] = useState([])
    
    useEffect(()=>{
        const fetchPosts = async()=>{
            const response = await fetch(`api/users/${session?.user.id}/posts`)
            const data = await response.json()

            setPosts(data)
        }

        //we will fetch user posts only if we have a current user in the current session   
        if(session?.user.id)    fetchPosts()

        // calling useEffect hook everytym when there is change in users credentials () 
    },[session?.user.id])
    

    // handling Edit operation
    const handleEdit = (post)=>{
        router.push(`/update-prompt?id=${post._id}`)
    }

    // handling Delete operation
    const handleDelete =async (post)=>{
        
        // inbuilt confirm dialogue box from browser
        const hasConfirmed = confirm("Are you sure you want to delete this prompt?");

    if (hasConfirmed) {
    try {
        await fetch(`/api/prompt/${post._id.toString()}`, {
            method: "DELETE",
        })
        
        // filtering out the desired deleted post 
        let filteredPosts = posts.filter((currPost) => currPost._id !== post._id);

        setPosts(filteredPosts);
    } catch (error) {
        console.log(error);
    }
    }
    }
    
    return (
    <Profile
        name='My'
        desc='Welcome to your Personal Profile. Create more prompts, share your vision, and be a catalyst for the boundless creativity!'
        data={posts}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
    />
    )
}

export default MyProfile 