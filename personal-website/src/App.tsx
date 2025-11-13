import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

function getPreferredTheme(): Theme {
	const stored = typeof localStorage !== 'undefined' ? localStorage.getItem('theme') : null
	if (stored === 'light' || stored === 'dark') return stored
	const prefersDark = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
	return prefersDark ? 'dark' : 'light'
}

export default function App() {
	const [theme, setTheme] = useState<Theme>(() => getPreferredTheme())

	useEffect(() => {
		document.documentElement.setAttribute('data-theme', theme)
		localStorage.setItem('theme', theme)
	}, [theme])

	const toggleTheme = () => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))

	return (
		<div className="site">
			<header className="header">
				<nav className="nav">
					<a href="#home" className="brand">Mhar Mandane</a>
					<button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
						{theme === 'dark' ? 'Light' : 'Dark'}
					</button>
				</nav>
			</header>

			<main>
				<section id="home" className="hero">
					<div className="hero__grid">
						<div className="hero__text">
							<h1>Hi, I’m Mhar</h1>
							<p> A web developer passionate about creating fast, responsive, and visually engaging digital experiences. I work mainly with React, TypeScript, and Node.js to build clean, user-focused web applications.</p>
						</div>
						<div className="hero__side">
							<img
								className="avatar"
								src="assets/1x1.jpg"
								alt="Profile"
								width={160}
								height={160}
							/>
						</div>
					</div>
				</section>

				<section id="about" className="section">
					<h2>About</h2>
					<p>
						I’m Mhar Joseph Mandane, a developer passionate about building clean, scalable, and intuitive digital experiences. My focus is on crafting user-friendly interfaces and performant web solutions that bridge design and technology.

I hold a Bachelor of Science in Information Technology from Eulogio Amang Rodriguez Institute of Science and Technology, where I developed a solid foundation in web development, software engineering, and modern UI design principles. 

I also work with Node.js, Express for back-end and full-stack projects. I’m constantly exploring new technologies like Next.js and Vite to refine my workflow and deliver efficient, high-quality web applications.
					</p>
				</section>

				<section id="work" className="section">
					<h2>Selected Work</h2>
					<ul className="cards">
						<li className="card">
							<h3>AnimalPedia</h3>
							<p>A Information Website about Animals, in this website you will see the infomation about a certain mammals,reptile,etc.</p>
							<a className="card__link" href="https://github.com/mhaarr123/animalpedia" target="_blank" rel="noreferrer">Visit</a>
						</li>
						<li className="card">
							<h3>SnackBlitz</h3>
							<p>A Ecommerce Website than designed for Restaurant/Fastfood to share their product, that you can order online or order inside the store/restaurant</p>
							<a className="card__link" href="https://github.com/mhaarr123/ECOMWEB-Snackblitz" target="_blank" rel="noreferrer">Visit</a>
						</li>
						<li className="card">
							<h3>Barangay System</h3>
							<p>An ongoing Project that designed for community, it include giving a service to the Barangay.</p>
							<a className="card__link" href="https://github.com/mhaarr123/Barangay-SystemWBD" target="_blank" rel="noreferrer">Visit</a>
						</li>
					</ul>
				</section>

				<section id="contact" className="section">
					<h2>Contact</h2>
					<p>
						<a href="mailto:you@example.com">mandanemhar123@gmail.com</a>
					</p>
					<ul className="social">
						<li><a href="https://github.com/mhaarr123" aria-label="GitHub">GitHub</a></li>
						<li><a href="https://www.linkedin.com/in/mhar-joseph-mandane-8a847b295/" aria-label="LinkedIn">LinkedIn</a></li>
					</ul>
				</section>
			</main>

			<footer className="footer">
				<p>© {new Date().getFullYear()} Mhar Joseph Mandane</p>
			</footer>
		</div>
	)
}


