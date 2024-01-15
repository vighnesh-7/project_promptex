import PromptCard from "./PromptCard";

const Profile = ({  name,desc, data, handleEdit, handleDelete }) => {
  return (
    <section className='w-full'>
      <h1 className='head_text text-left'>
        <span style={{ backgroundClip: 'text',color: 'transparent',
backgroundImage: 'radial-gradient(circle, rgba(55,2,131,1) 0%, rgba(110,8,173,1) 38%, rgba(157,5,202,1) 65%, rgba(201,9,161,1) 100%)'}}>{name} Profile</span>
      </h1>
      <p className='desc font-semibold text-left'>{desc}</p>

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