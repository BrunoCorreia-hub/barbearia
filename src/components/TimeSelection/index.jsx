import { TIMES } from "../../constants/bookingData"
import { TimeBox, TimeTitle, TimeGrid, Periodos, TimeSlot, Paragraph } from "./styles";

function TimeSelection({ selectedDay, selectedTime, setSelectedTime }) {
    const periodos = {
        manha: TIMES.filter(h => parseInt(h.split(':')[0]) < 12),
        tarde: TIMES.filter(h => parseInt(h.split(':')[0]) >= 12 && parseInt(h.split(':')[0]) < 18),
        noite: TIMES.filter(h => parseInt(h.split(':')[0]) >= 18)
    }

    const labels = {
        manha: '☀ Manha',
        tarde: '🕒 Tarde',
        noite: '🌙 Noite'
    }
    return (
        <TimeBox>
            <TimeTitle>Horários disponiveis</TimeTitle>
            {selectedDay ? (
                <TimeGrid>
                    {Object.entries(periodos).map(([periodo, slots]) =>
                        slots.length > 0 && (
                            <>
                                <p>{labels[periodo]}</p>
                                <Periodos key={periodo}>
                                    {slots.map(s => (
                                        <TimeSlot key={s}>{s}</TimeSlot>
                                    ))}
                                </Periodos>
                            </>
                        )
                    )}
                </TimeGrid>
            ) : (
                <Paragraph>Selecione uma data para ver<br /> horários disponiveis</Paragraph>
            )}
        </TimeBox>
    )
}

export default TimeSelection