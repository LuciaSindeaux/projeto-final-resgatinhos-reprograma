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
        <Route path="/sobre" element={<Sobre />}/>
        <Route path="/apadrinhamento" element={<Apadrinhamento />}/>
        <Route path="/contato" element={<Contato />}/>
    </Routes>
    <Footer content="Feito com ♡ por Lúcia Sindeaux, durante o projeto guiado no módulo de ReactJS da reprograma."/>
    </BrowserRouter>
  )
}

export default Router