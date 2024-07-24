// import React from 'react'
import ContactForm from '../contactform/ContactForm'
import Presentation from '../presentation/Presentation'
import styles from './Main.module.css'

const Main = () => {
	return (
		<section className={styles.main}>
			<div className={styles.container}>
				<article id='home'>
					<Presentation />
				</article>
				<article id='projects' style={{ backgroundColor: 'ghostwhite' }}>
					<div>
						<h2>Proyectos</h2>
					</div>
				</article>
				<article id='contactform' style={{ backgroundColor: 'whitesmoke'}}>
					<h2>Contactanos</h2>
					<ContactForm />
				</article>
			</div>
		</section>
	)
}

export default Main
