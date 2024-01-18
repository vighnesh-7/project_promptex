"use client"

import { useState } from "react"
import Image from "next/image"
import { useSession } from "next-auth/react"
import { usePathname, useRouter } from "next/navigation"

const PromptCard = ({ post, handleEdit, handleDelete, handleTagClick }) => {
  const { data: session } = useSession()
  const pathName = usePathname()
  const router = useRouter()

  const [copied, setCopied] = useState("")

  const handleProfileClick = () => {
    console.log(post)

    if (post.creator._id === session?.user.id) return router.push("/profile")

    router.push(`/profile/${post.creator._id}?name=${post.creator.username}`)
  };

  const handleCopy = () => {
    setCopied(post.prompt);
    // inbuilt browser copy operation function "clipboard.writeText("TextFiel")"
    navigator.clipboard.writeText(post.prompt)

    // to make a transition effect between being copied to been copied 
    setTimeout(() => setCopied(false), 3000)
  };

  return (
    <div className='prompt_card dark:bg-zinc-900'>
      <div className='flex-start justify-between gap-5'>
        <div
          className='flex-1 flex-center justify-start gap-3 cursor-pointer' onClick={handleProfileClick}
        >
          <Image
            className='rounded-full object-contain'
            src={post.creator.image}
            alt='user_image'
            width={40}
            height={40}
          />

          <div className='flex flex-col'>
            <h3 className='font-semibold text-gray-900 dark:text-slate-200' style={{fontFamily:'Roboto'}}>
              {post.creator.username}
            </h3>
            <p className='font-inter  text-sm text-gray-500 dark:text-gray-400' style={{fontFamily:'Roboto'}}>
              {post.creator.email}
            </p>
          </div>
        </div>

        <div className='copy_btn  dark:bg-neutral-500' onClick={handleCopy}>
          <Image
            src={
              copied === post.prompt? "/assets/icons/tick.svg" : "/assets/icons/copy.svg"
            }
            alt={copied === post.prompt ? "tick_icon" : "copy_icon"}
            width={20}
            height={20}
          />
        </div>
      </div>

      <p className='my-4 text-sm dark:text-white font-normal text-gray-700 text-left indent-5 whitespace-normal break-words leading-6 ' style={{fontFamily:'Roboto'}}>
        {post.prompt}
      </p>
      <p className='font-inter text-sm text-lowercase dark:text-sky-400 text-sky-700 cursor-pointer font-medium' style={{fontFamily:'Roboto'}}
        onClick={() => handleTagClick && handleTagClick(post.tag)}
      >
        {post.tag}
      </p>




      {/* if the current logged in user is the creator of the post  and they are on the profile page too */}
      {/* then we can show edit and delete post options */}
      {session?.user.id === post.creator._id && pathName === "/profile" && (
        <div className='mt-5 flex-center gap-6 border-t border-gray-100 pt-3'>
          <button className='button-7 p-2 px-3 font-inter text-sm cursor-pointer bg-green-600 hover:bg-green-700'
            onClick={handleEdit}
          >
            Edit
          </button>
          <button className='button-7 p-2 px-3 font-inter text-sm font-semibold cursor-pointer bg-red-600 hover:bg-red-700' 
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  )
}

export default PromptCard