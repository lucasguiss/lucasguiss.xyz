'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

const ToggleMode = () => {
	const [mounted, setMounted] = useState(false)
	const { theme, setTheme } = useTheme()

	const toggleTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light')
		console.log(theme)
	}

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) {
		return null
	}

	return (
		<button
			onClick={toggleTheme}
			className="text-2xl p-2 transition-transform transform hover:scale-110"
			aria-label="Toggle theme"
		>
			{theme === 'light' ? (
				<span role="img" aria-label="moon emoji">
					🌑
				</span>
			) : (
				<span role="img" aria-label="sun emoji">
					☀️
				</span>
			)}
		</button>
	)
}

export default ToggleMode
