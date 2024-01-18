import PromptCard from "./PromptCard";

const Profile = ({  name,desc, data, handleEdit, handleDelete }) => {
  return (
    <section className='w-full'>
      <h1 className='head_text text-left'>
        <span style={{ backgroundClip: 'text',color: 'transparent',
backgroundImage: ' radial-gradient(circle, rgba(137,34,213,1) 16%, rgba(198,9,163,1) 68%)'}}>{name} Profile</span>
      </h1>
      <p className='desc font-semibold text-left dark:text-gray-300'>{desc}</p>
      <div className='mt-10 prompt_layout'>
        {
          data.map((post) => (
          <PromptCard
            key={post._id}
            post={post}
            handleEdit={() => handleEdit && handleEdit(post)}
            handleDelete={() => handleDelete && handleDelete(post)}
          />
          ))
        }
      </div>
    </section>
  )
}

export default Profile;