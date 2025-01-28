import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/blog/utils'

export function BlogPosts() {
	const allBlogs = getBlogPosts()

	return (
		<div>
			{allBlogs
				.sort((a, b) => {
					if (
						new Date(a.metadata.publishedAt) >
						new Date(b.metadata.publishedAt)
					) {
						return -1
					}
					return 1
				})
				.map((post) => (
					<Link
						key={post.slug}
						className="flex flex-col space-y-1 mb-4 transition-transform transform hover:scale-102"
						href={`/blog/${post.slug}`}
					>
						<div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
							<p className="w-[150px] tabular-nums">
								{formatDate(post.metadata.publishedAt)}
							</p>
							<div className="w-full flex flex-col md:flex-col space-x-0 md:space-x-2">
								<p className="tracking-tight">
									{post.metadata.title}
								</p>
							</div>
						</div>
					</Link>
				))}
		</div>
	)
}
