import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import './App.css';
import BackgroundImg from './components/BackgroundImage'
import Header from './components/Header'
import Swap from './components/Swap'
import Pool from './components/Pool'
import Farm from './components/Farm'
import Stake from './components/Stake'

function RouteWrapped() {
  return (
    <div className="App">
      <BackgroundImg />
      <Header />
      <Outlet />
    </div>
  )
}

function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RouteWrapped/>}>
          <Route path="/" element={<Swap/>}/>
          <Route path="/pool" element={<Pool/>}/>
          <Route path="/farm" element={<Farm/>}/>
          <Route path="/stake" element={<Stake/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default MainRoutes;