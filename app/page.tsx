import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        i build solutions for the web
      </h1>
      <p className="mb-4">
        {`i am an enthusiastic software engineer who is eager to develop and architect
        web systems and automations. my main goal here is to share a bit of my work and toughts (all tech related)`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
