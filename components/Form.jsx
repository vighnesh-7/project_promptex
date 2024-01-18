'use client'
import Link from "next/link"
import AlertBox from "./AlertBox";
import { useState } from "react";

const Form = ({type,post,setPost,submitting,handleSubmit}) => {
  
  const [showModal, setShowModal] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  
  const trimFields= (e)=>{
        const trimmedPrompt = post.prompt.trim();
        const trimmedTag = post.tag.trim()
        e.preventDefault()
        if(trimmedPrompt === '' )
        {
            // alert("Post Fields cannot be empty")
            setAlertMessage("Prompt Fields cannot be empty with whitespaces");
            setShowModal(true);
            submitting=false
            return
          }
          
          if(trimmedTag === '')
          {
            setAlertMessage("Tag Fields cannot be empty with whitespaces");
            setShowModal(true);
            submitting=false
            return
        }
        handleSubmit(e)
  }
  
  return (
    <section className="w-full max-w-full flex-start flex-col ">
      <h1 className="head_text text_left">
        <span style={{ backgroundClip: 'text',color: 'transparent',
          backgroundImage: ' radial-gradient(circle, rgba(155,52,230,1) 16%, rgba(170,45,213,1) 39%, rgba(198,9,163,1) 63%)'}}>
          {type} Post 
        </span>
      </h1>
      <p className="desc dark:text-gray-300 text-left max-w-md">
        "Ignite creativity! Craft your unique prompts and inspire a community of thinkers. Your ideas can spark countless imaginative journeys. Dive into a world of endless possibilities - {type} your prompt and watch the magic unfold."
      </p>

      {showModal && <AlertBox heading={"Input Invalid alert!"} message={alertMessage} showModal = {showModal } onClose={() => setShowModal(false)} />}

      <form onSubmit={e=>(trimFields(e))} className="mt-10 mb-5 w-full flex flex-col gap-6 glassmorphism dark:bg-zinc-900" >
        <label>
          <span className="font-semibold text-base text-gray-700 dark:text-slate-200">Your Custom Prompt </span>

          <textarea value={post.prompt} 
            onChange={(e)=>setPost({...post,prompt : e.target.value})}
            placeholder="Write your Prompt here...."
            required 
            className="form_textarea dark:text-white dark:bg-zinc-900  "
            style={{fontFamily:'Roboto',fontSize:'1rem',lineHeight:'1.4rem'}}
            />
        </label>

        <label>
          <span className="font-semibold text-base text-gray-700 font-mono dark:text-slate-200 ">Tag { }
          <span className="font-sans font-normal text-gray-400">(#web_developement, #tech_news, #coding)</span>
          </span>

          <input value={post.tag} 
            onChange={(e)=>setPost({...post,
            tag : e.target.value})}
            placeholder="#tag "
            required
            className="form_input leading-6 dark:text-white dark:bg-zinc-900"
            style={{fontFamily:'Roboto',fontSize:'1rem'}}
            />
        </label>



        <div className='flex-end mx-3 mb-5 gap-4'>
          <Link href='/' className='text-gray-600 px-5 rounded-full py-1.5 bg-gray-200 font-semibold text-sm hover:bg-gray-300 hover:text-gray-700'>
            Cancel
          </Link>

          <button
            type='submit'
            disabled={submitting}
            className='px-5 py-1.5 text-sm font-semibold  rounded-full text-white bg-fuchsia-600 hover:bg-fuchsia-700'
          >
            {submitting ? `${type}ing...` : type}
          </button>
        </div>
      </form>
    </section>
  )
}


export default Form
