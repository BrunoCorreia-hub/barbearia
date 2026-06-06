import { Paragraph } from "./styles";

function BookingValidationMessage({ selectedService, selectedDay, selectedTime}) {
    return (
        <Paragraph>
            {!selectedService ? " ✂ Escolha o serviço para confirmar o agendamento"
                : !selectedDay ? " 🗓 Escolha o dia disponivel para confirmar agendamento"
                    : !selectedTime ? " ⏱ Escolha o horário disponivel para agendamento"
                        : "Tudo pronto para agendamento"
            }
        </Paragraph>
    )
}

export default BookingValidationMessage;