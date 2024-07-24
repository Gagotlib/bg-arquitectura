// import React from 'react'
import styles from './Presentation.module.css'

function Presentation() {
	const handleScroll = (e, id) => {
		e.preventDefault()
		document.querySelector(id).scrollIntoView({ behavior: 'smooth' })
	}

	return (
		<div className={styles.presentation}>
			<div className={styles.firstcontainer}>
				<img src='/img/bg.jpg' alt='bg arquitectura' />
			</div>
			<div className={styles.secondcontainer}>
				<h1>Bienvenidos</h1>
				<p>Somos una empresa de arquitectura con mas de 30 años de experiencia. </p>
				<p>Trabajamos proyectos completos, desde el diseño, hasta la construcción.</p>
				<p>Especialidad en remodelaciones parciales o totales</p>
				<p>
					Presupuestos sin cargo.{' '}
					<a href='#contactform' onClick={(e) => handleScroll(e, '#contactform')} style={{ textDecoration: 'underline' }}>
						{' '}
						Contactanos.
					</a>
				</p>
			</div>
		</div>
	)
}

export default Presentation
