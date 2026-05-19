import { Button } from "../../components/Button"
import Header from "../../components/Header"
import { Container, Title, Sub, ContainerSection, Image, Contatos } from "./styles"
import barbearia from "../../assets/barbearia.png"
import { useNavigate } from "react-router-dom"

function Home() {
  const navigate = useNavigate()

  return (
    <Container>
      <Header />

      <ContainerSection>
        <div>
        <Title>
          Estilo não se <br />
          Improvisa. <br />
          <span>Se constrói.</span>
        </Title>

        <Sub>
          Cortes precisos, atendimento exclusivo. Cada visita é
          uma experiência feita pra você.
        </Sub>
        </div>
        <Image src={barbearia} alt="barbearia" />
      </ContainerSection>

      <Contatos>
        <Button onClick={() => navigate("/agendar")}>Agendar horário →</Button>
        <Button>Ver serviços</Button>
      </Contatos>
    </Container>
  )
}

export default Home