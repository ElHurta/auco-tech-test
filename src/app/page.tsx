import PostsList from './components/PostsList'

export default function Home () {
  return (
    <main className='w-full items-center'>
      <main className='p-5 bg-slate-100'>
        <h2 className='text-3xl sm:text-4x md:text-4xl font-bold'>Posts</h2>
        <PostsList />
      </main>
    </main>
  )
}
