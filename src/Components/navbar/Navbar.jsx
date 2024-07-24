// import React from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
	const handleScroll = (e, id) => {
		e.preventDefault()
		document.querySelector(id).scrollIntoView({ behavior: 'smooth' })
	}

	return (
		<header className={styles.header}>
			<img src='/img/bg.jpg' onClick={(e) => handleScroll(e, '#home')}></img>

			<a href='#projects' onClick={(e) => handleScroll(e, '#projects')}>
				Proyectos
			</a>
			<a href='#contactform' onClick={(e) => handleScroll(e, '#contactform')}>
				Contacto
			</a>
		</header>
	)
}
