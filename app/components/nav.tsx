import Link from 'next/link'
import ToggleMode from './toggle-mode'
import LanguageToggle from './toggle-language'

const navItems = {
	'/': {
		name: 'home',
		icon: '🏠',
		aria: 'House emoji',
	},
	'/blog': {
		name: 'blog',
		icon: null,
		aria: null,
	},
}

export function Navbar() {
	return (
		<aside className="-ml-[8px] mb-16 tracking-tight">
			<div className="lg:sticky lg:top-20">
				<nav
					className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative overflow-hidden"
					id="nav"
				>
					<div className="flex flex-row space-x-0 pr-10 overflow-hidden">
						{Object.entries(navItems).map(
							([path, { name, icon, aria }]) => {
								return icon ? (
									<Link
										key={path}
										href={path}
										className="text-2xl p-2 transition-transform transform hover:scale-110"
									>
										<span
											role="img"
											aria-label={aria || undefined}
										></span>
										{icon}
									</Link>
								) : (
									<Link
										key={path}
										href={path}
										className="transition-transform transform hover:scale-110 flex align-middle relative py-2 px-2 m-1"
									>
										{name}
									</Link>
								)
							}
						)}
					</div>
					<div className="ml-auto space-x-0 pl-10 overflow-hidden">
						{/* <LanguageToggle /> */}
						<ToggleMode />
					</div>
				</nav>
			</div>
		</aside>
	)
}
