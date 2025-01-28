import ArrowIcon from './arrow-icon'

export default function Footer() {
	return (
		<footer className="mb-auto">
			<ul className="font-sm mt-8 flex flex-row space-x-0 space-y-2 md:flex-row md:space-x-4 md:space-y-0">
				<li className="">
					© {new Date().getFullYear()} Lucas Guiss Gusmão
				</li>
				<li className="ml-auto">
					<a
						className="flex items-center transition-all"
						rel="noopener noreferrer"
						href="/links"
					>
						<ArrowIcon />
						<p className="ml-2 h-7">links</p>
					</a>
				</li>
			</ul>
		</footer>
	)
}
