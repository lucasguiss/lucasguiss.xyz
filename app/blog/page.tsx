import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'blog',
  description: 'read it or not idk',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">enjoy the posts below</h1>
      <BlogPosts />
    </section>
  )
}
