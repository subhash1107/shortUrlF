import { Outlet } from '@tanstack/react-router'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className=''>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default App