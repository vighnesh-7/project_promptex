'use client'

import { useState,useEffect } from "react"
import PromptCard from "./PromptCard"

const PromptCardList =({data,handleTagClick})=>{
  return (
    <div className="prompt_layout mt-15">
      {
        data.map((post)=>(
          <PromptCard
            key={post._id}
            post= {post}
            handleTagClick={handleTagClick}
          />
        ))
      }
    </div>
  )
}

const Feed = () => {
  const [searchText, setSearchText] = useState('')
  const [posts, setPosts] = useState([])

    // Search states
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);
  
  
  const handleSearchChange = (e)=>{
    clearTimeout(searchTimeout);

    setSearchText(e.target.value);

    // to control the rate of function calls
    // to prevent call the searchResult function everytym a letter is entered in the searchBar (rebounce)
    // ensure that the function is only executed after a certain delay since the last time it was invoked.
    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterPrompts(e.target.value);
        setSearchedResults(searchResult);
      }, 500)
    );
  }

  
  const handleTagClick = (tagName) => {
    setSearchText(tagName);

    const searchResult = filterPrompts(tagName);
    setSearchedResults(searchResult);
  };

  useEffect(()=>{
    const fetchPosts = async ()=>{
      // get request 
      const response = await fetch('/api/prompt',{ cache: 'no-store' })
      const data = await response.json()
      
      setPosts(data)
    }

    fetchPosts()
  },[])
  

  const filterPrompts = (searchtext) => {
    //ignore the case is done by "i" flag  
    const regex = new RegExp(searchtext, "i");
    
    // for searching the particular search target with all the available posts of other users
    return posts.filter(
      (currPost) =>
        regex.test(currPost.creator.username) ||
        regex.test(currPost.tag) ||
        regex.test(currPost.prompt)
    );
  };
  
  
  
  return (
    <section className="feed">
      <form className="flex-center realtive w-full">
        <input type="text"
          className="search_input dark:outline-violet-700 dark:outline-offset-4 dark:focus:outline-offset-4 dark:text-black dark:outline dark:outline-2  dark:focus:outline-red-600 text-lg"
          placeholder="Search for a tag or a username" 
          value={searchText}
          onChange={handleSearchChange}
          required
        />
      </form>


      {/* to show the  searchbar query cards or feeds cards respectively   */}
      {searchText ? (
        <PromptCardList
          data={searchedResults}
          handleTagClick={handleTagClick}
        />
      ) : (
        <PromptCardList data={posts} handleTagClick={handleTagClick} />
      )}
      
    </section>
  )
}

export default Feed