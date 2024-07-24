// import React from 'react'

import { useState } from 'react'
import styles from './ContactForm.module.css'

function ContactForm() {
	const [formData, setFormData] = useState({})

	const handleSubmit = () => {
		//que se mande el mail a bg
	}

	return (
		<>
			<form onSubmit={handleSubmit} className={styles.contactForm}>
				<input type='text' name='name' id='name' placeholder='Nombre' value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
				<label htmlFor='name'></label>
				<input type='email' name='email' id='email' placeholder='Email' value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
				<label htmlFor='email'></label>
				<textarea
					name='message'
					id='message'
					cols='30'
					rows='10'
					placeholder='Escribe tu consulta'
					value={formData.message}
					onChange={(e) => setFormData({ ...formData, message: e.target.value })}
				></textarea>
				<button type='button'>Enviar</button>
			</form>
		</>
	)
}

export default ContactForm
