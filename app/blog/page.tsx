import { BlogPosts } from 'app/components/posts'

export const metadata = {
	title: 'blog',
	description: 'read it or not idk',
}

export default function Page() {
	return (
		<section>
			<BlogPosts />
		</section>
	)
}
