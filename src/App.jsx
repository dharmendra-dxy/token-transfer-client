import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
import SendMoney from "./pages/SendMoney"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Home/>} />
          <Route path='/login' element={ <Login/> } />
          <Route path='/signup' element={ <Signup/> } />
          <Route path='/dashboard' element={ <Dashboard/> } />
          <Route path='/send' element={ <SendMoney/> } />

        </Routes>
      </BrowserRouter>
    
    </>
  )
}

export default App