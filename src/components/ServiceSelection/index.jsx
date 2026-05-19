import { Formater } from "../../utils/Formater";
import { ContainerService, ServiceCard, SelectedBadged, Name, Price, Duration } from "./styles";

function ServiceSelection({ Services, selectedService, setSelectedService }) {

    return (
        <>
            <ContainerService>
                {Services.map((s) => (
                    <ServiceCard
                        key={s.name}
                        $selected={selectedService?.name === s.name}
                        onClick={() => setSelectedService(s)}
                    >
                        {selectedService?.name === s.name && <SelectedBadged>✓</SelectedBadged>}
                        <div>
                            <Name>{s.name}</Name>
                            <Price>{Formater(s.price)}</Price>
                            <Duration>{s.time}</Duration>
                        </div>
                    </ServiceCard>
                ))}
            </ContainerService>
        </>
    )
}

export default ServiceSelection