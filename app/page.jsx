import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col ">

      <h1 className="head_text text-center " style={{fontFamily:'prompt',fontWeight:'700'}}>
        Discover & Share 
      {/* <br className="max-sm:hidden" /> */}
      <p className=" text-center" style={{backgroundClip:'text',color:'transparent',backgroundImage:"linear-gradient(284deg, rgba(192,7,7,1) 0%, rgba(188,33,160,1) 38%, rgba(238,12,159,1) 65%, rgba(237,3,21,1) 100%)",fontFamily:'prompt',fontWeight:"700",letterSpacing:'1.7px'}} >
        AI Powered free prompts
      </p>
      </h1>
      <p className="desc text-center">Promptex is a dynamic online platform where users collaboratively share and explore AI prompts. Unlock creativity, spark ideas, and delve into the limitless possibilities of artificial intelligence through a community-driven repository of diverse prompts. Join the Promptex community to fuel your imagination and embark on new AI-driven ventures.</p>

      {/* Feed */}
      <Feed/>
    </section>
  )
}

export default Home;