import { BlogPosts } from 'app/components/posts'

export default function Page() {
	return (
		<section>
			<h1 className="mb-8 text-2xl font-semibold tracking-tighter">
				hello there! I&apos;m Lucas
			</h1>
			<p className="mb-8">
				{`and i am an enthusiastic software engineer who is eager to develop and architect
        web systems and automations. my main goal here is to share a bit of my work and toughts (all tech related)
        and to use this website as kind of an overengineered portfolio and testing place for new features and studies`}
			</p>
			<h2 className="text-2xl font-semibold tracking-tighter">
				latest posts ✍🏻
			</h2>
			<div className="mt-4 mb-8">
				<BlogPosts />
			</div>
		</section>
	)
}
