// import React from 'react'
import styles from './Presentation.module.css'

function Presentation() {
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
			</div>
		</div>
	)
}

export default Presentation
