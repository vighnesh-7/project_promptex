'use client'

import { useState } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import Form  from "@components/Form"

const CreatePrompt = () => {
    const router = useRouter()
    const {data:session } = useSession()
    
    
    const [submitting, setSubmitting] = useState(false)
    const [post, setPost] = useState({
        prompt:'',
        tag:'',
    });

    const createPrompt = async(e)=>{
        // to stop loading of browser everytym
        e.preventDefault()
        setSubmitting(true)

        // const trimmedPrompt = post.prompt.trim();
        // const trimmedTag = post.tag.trim()
        // if(trimmedPrompt === '' || trimmedTag === '')
        // {
        //     alert("Post Fields cannot be empty")
        //     return
        // }
        
        try{
            const response  = await fetch ('/api/prompt/new',{
                method:'POST',
                body: JSON.stringify({
                    prompt:post.prompt,
                    userId:session?.user.id,
                    tag:post.tag
                })
            })
                
            if(response.ok)
            {
                router.push('/')
            }
        }catch(error){
            console.log(error.message());
        }
        finally{
            setSubmitting(false)
        }
    }

    
return (
    <Form 
        type="Create"
        post={post}
        setPost = {setPost}
        submitting={submitting}
        handleSubmit = {createPrompt}
    />
    
  )
}

export default CreatePrompt