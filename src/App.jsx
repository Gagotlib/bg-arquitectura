import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/footer/Footer'
import Navbar from './Components/navbar/Navbar'
import Home from './views/Home/Home'
import ErrorPage from './views/ErrorPage/ErrorPage'

function App() {
	return (
		<>
			<Navbar />

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/*' element={<ErrorPage />} />
			</Routes>

			<Footer />
		</>
	)
}

export default App
