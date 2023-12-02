import reactLogo from './assets/react.svg'
import JsLogo from './assets/Javascript logo.png'
import './App.css'
import { Outlet } from 'react-router-dom'
function App() {


  return (
    <>

      <div className='header'>
        <div className='header-left'>
        <ul> 
          <li><a href="/"> Home </a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/panel">Panel</a></li>
          <li><a href="/help"> 🗨<p>Help</p>    </a></li>
        </ul>
        </div>
        
        <div className='header-right'>
         <a href="https://react.dev" target="_blank" className='linkreact'>
          <img src={reactLogo} className="logo react" alt="React logo" placeholder='React'/>
        </a>
        <a href="https://vitejs.dev" target="_blank" className='linkvite'>
          <img src={JsLogo} className="logo vite" alt="Vite logo" />
        </a>
       
        </div>
      </div>

     
      
     <Outlet/>
    </>
  )
}

export default App
