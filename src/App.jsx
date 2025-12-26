import React from 'react'
import { Link, Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Agency from './pages/Agency'
import Projects from './pages/Projects'

const App = () => {
	return (
		<div className='bg-zinc-900 text-white min-h-screen'>
			<Link to='/'>Home</Link>
			<Link to='/agence'>Agency</Link>
			<Link to='projects'>Projects</Link>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/agence' element={<Agency />} />
				<Route path='/projects' element={<Projects />} />
			</Routes>
		</div>
	)
}

export default App
