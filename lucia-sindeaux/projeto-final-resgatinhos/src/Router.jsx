import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from './components/Menu'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Apadrinhamento from './pages/Apadrinhamento'
import Contato from './pages/Contato'
import Footer from './components/Footer'


const Router = () => {
  return (
    <BrowserRouter>
    <Menu />
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/noticias" element={<Sobre />}/>
        <Route path="/apadrinhamento" element={<Apadrinhamento />}/>
        <Route path="/comoAjudar" element={<Contato />}/>
    </Routes>
    <Footer content="Feito com ♡ por Lúcia Sindeaux"/>
    </BrowserRouter>
  )
}

export default Router