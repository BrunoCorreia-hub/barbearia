import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/Home/Home"
import Agendar from "../pages/Agendar"

const BarberRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/agendar" element={<Agendar />}/>
                <Route path="*" element={<h2>Pagina nao encontrada</h2>} />
            </Routes>
        </BrowserRouter>
    )
}

export default BarberRoutes