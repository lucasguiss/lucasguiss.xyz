import './global.css'
import type { Metadata } from 'next'
import { Navbar } from './components/nav'
import Footer from './components/footer'
import { baseUrl } from './sitemap'
import { ThemeProvider } from './components/theme-provider'

export const metadata: Metadata = {
	metadataBase: new URL(baseUrl),
	title: {
		default: 'lucas guiss',
		template: '%s | lucas guiss',
	},
	description: 'this is my personal website.',
	openGraph: {
		title: 'lucas guiss website',
		description: 'this is my personal website.',
		url: baseUrl,
		siteName: 'lucas guiss website',
		locale: 'en_US',
		type: 'website',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html suppressHydrationWarning lang="en">
			<head>
				<script
					defer
					src="https://cloud.umami.is/script.js"
					data-website-id="59a69cb5-dc15-495c-b410-553810a90b48"
				/>
			</head>
			<body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
				<ThemeProvider attribute="class" defaultTheme="system">
					<Navbar />
					<main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
						{children}
					</main>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	)
}
