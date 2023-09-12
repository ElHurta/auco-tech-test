import PostsList from './components/postsList'

export default function Home () {
  return (
    <main className='w-full flex-col px-12 items-center'>
      <header className=' m-8 text-center font-sans'>
        <h1 className='text-2xl sm:text-4xl md:text-5xl text-white font-bold'>Auco Technical Test Solution</h1>
        <h2 className='text-1xl sm:text-3x md:text-4xl text-white font-semibold'>Frontend Junior Developer - By Juan Hurtado 🚀</h2>
      </header>
      <section className='p-5 bg-sky-800'>
        <h2 className='text-2xl sm:text-4x md:text-4xl font-bold'>Posts</h2>
        <PostsList />
      </section>
    </main>
  )
}
