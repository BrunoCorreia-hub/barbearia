import { Button } from '../Button'
import { ContainerHeader, Title, NavLinks } from './styles'
import { useNavigate } from 'react-router-dom'

function Header() {
    const navigate = useNavigate()
    return (
        <ContainerHeader>
            <Title>Diogenes Barbearia</Title>
            <NavLinks>
                <a href="#">Galeria</a>
                <a href="#">Sobre</a>
            </NavLinks>
            <Button onClick={() => navigate("/agendar")}>Agendar →</Button>
        </ContainerHeader>
    )
}

export default Header