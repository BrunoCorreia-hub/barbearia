import { useNavigate } from "react-router-dom";
import { BottomBar, BackBtn } from "./styles";

function NavigationButtons({ step, setStep, selectedService, selectedDay, selectedTime, name, phone, setDone }){

    const navigate = useNavigate();
    return(
        <BottomBar>
            {step > 1 ? (
                <BackBtn onClick={() => setStep(s => s - 1)}>← voltar</BackBtn>
            ) : (
                <BackBtn onClick={() => navigate("/")}>← Inicio</BackBtn>
            )}

            {step < 3 ? (
                <BackBtn
                 disable={
                    (step === 1 && !selectedService) || 
                    (step === 2 && (!selectedDay || !selectedTime))
                 }
                 onClick={() => setStep(s => s + 1)}
                >
                    {step === 1 ? "Escolher data e horário →" : "Confirmar dados →"}
                </BackBtn>
            ) : (
                <BackBtn
                 disable={!name || !phone}
                 onClick={() => setDone(true)}
                >Confirmar agendamento ✓</BackBtn>
            )}
        </BottomBar>
    )
}

export default NavigationButtons