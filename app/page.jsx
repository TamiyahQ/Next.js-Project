import Feed from "@components/Feed"

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Create and Share
            <br className='max-md:hidden' />
            <span className='blue_gradient text-center'> AI-Powered Prompts</span>
        </h1>
        <p className='desc text-center'>
           Creatify is an open-source AI prompting tool for modern world to
           create, discover and share creative prompts
        </p>

        <Feed />
    </section>

  )
}

export default Home
