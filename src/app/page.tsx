import PostsList from "./components/postsList";

export default function Home (): JSX.Element {
  return (
    <>
      <h2 className='text-3xl sm:text-4x md:text-4xl font-bold'>Posts</h2>
      <PostsList />
    </>
  )
}
