import ArrowIcon from 'app/components/arrow-icon'

const links = [
	{
		name: 'Github',
		ref: 'https://github.com/lucasguiss',
	},
	{
		name: 'Linkedin',
		ref: 'https://linkedin.com/in/lucasguissgusmao',
	},
]

function Links() {
	return (
		<section>
			<h1 className="mb-8 text-xl font-semibold tracking-tighter">
				here is where you can find me too
			</h1>
			<ul className="font-md">
				<li className="ml-auto">
					{links.map(({ name, ref }) => {
						return (
							<a
								className="flex items-center transition-all"
								rel="noopener noreferrer"
								href={ref}
								key={ref}
								target="_blank"
							>
								<ArrowIcon />
								<p className="ml-2 h-7">{name}</p>
							</a>
						)
					})}
				</li>
			</ul>
		</section>
	)
}

export default Links
