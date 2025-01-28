'use client'

import { useState } from 'react'

export default function LanguageToggle() {
	const [language, setLanguage] = useState<'pt' | 'en'>('pt')

	const toggleLanguage = () => {
		const newLanguage = language === 'pt' ? 'en' : 'pt'
		setLanguage(newLanguage)
		document.documentElement.lang = newLanguage
	}

	return (
		<button
			onClick={toggleLanguage}
			className="text-2xl p-2 transition-transform transform hover:scale-110"
			aria-label="Toggle Language"
		>
			{language === 'pt' ? (
				<span role="img" aria-label="brazillian flag">
					🇧🇷
				</span>
			) : (
				<span role="img" aria-label="united states flag">
					🇺🇸
				</span>
			)}
		</button>
	)
}
