import { TIMES } from "../../constants/bookingData"
import { TimeBox, TimeTitle, TimeGrid, TimeFragment, Periodos, TimeSlot, Paragraph } from "./styles";

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
                            <TimeFragment key={periodo}>
                                <p>{labels[periodo]}</p>
                                <Periodos>
                                    {slots.map(s => (
                                        <TimeSlot key={s}>{s}</TimeSlot>
                                    ))}
                                </Periodos>
                            </TimeFragment>
                        )
                    )}
                </TimeGrid>
            ) : (
                <Paragraph>Selecione uma data para ver<br />
                    horários disponiveis</Paragraph>
            )}
        </TimeBox>
    )
}

export default TimeSelection