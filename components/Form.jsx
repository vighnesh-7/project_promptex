import Link from "next/link"

const Form = ({type,post,setPost,submitting,handleSubmit}) => {
  
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text_left">
        <span style={{ backgroundClip: 'text',color: 'transparent',
          backgroundImage: 'radial-gradient(circle, rgba(55,2,131,1) 0%, rgba(110,8,173,1) 38%, rgba(157,5,202,1) 65%, rgba(201,9,161,1) 100%)'}}>
          {type} Post 
        </span>
      </h1>
      <p className="desc text-left max-w-md">
        "Ignite creativity! Craft your unique prompts and inspire a community of thinkers. Your ideas can spark countless imaginative journeys. Dive into a world of endless possibilities - {type} your prompt and watch the magic unfold."
      </p>

      <form onSubmit={handleSubmit} className="mt-10 w-full flex flex-col gap-6 glassmorphism" >
        <label>
          <span className="font-semibold text-base text-gray-700">Your Custom Prompt </span>

          <textarea value={post.prompt} 
            onChange={(e)=>setPost({...post,prompt : e.target.value})}
            placeholder="Write your Prompt here...."
            required 
            className="form_textarea "
            style={{fontFamily:'Roboto',fontSize:'1rem',lineHeight:'1.4rem'}}
            />
        </label>

        <label>
          <span className="font-semibold text-base text-gray-700 font-mono">Tag { }
          <span className="font-sans font-normal text-gray-400">(#web_developement, #tech_news, #coding)</span>
          </span>

          <input value={post.tag} 
            onChange={(e)=>setPost({...post,
            tag : e.target.value})}
            placeholder="#tag "
            required
            className="form_input leading-6"
            style={{fontFamily:'Roboto',fontSize:'1rem'}}
            />
        </label>



        <div className='flex-end mx-3 mb-5 gap-4'>
          <Link href='/' className='text-gray-600 px-5 rounded-full py-1.5 bg-gray-200 font-semibold text-sm'>
            Cancel
          </Link>

          <button
            type='submit'
            disabled={submitting}
            className='px-5 py-1.5 text-sm font-semibold  rounded-full text-white bg-fuchsia-600'
          >
            {submitting ? `${type}ing...` : type}
          </button>
        </div>
        
      </form>
    </section>
  )
}


export default Form
