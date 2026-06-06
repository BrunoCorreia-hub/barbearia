import { Agendamento, Container, GridCalTime, StepIndicator, StepTitle, ProgressBar, ProgressFill } from "./styles"
import { useEffect, useState } from "react"
import ServiceSelection from "../../components/ServiceSelection";
import Calendar from "../../components/Calendar/index";
import TimeSelection from "../../components/TimeSelection";
import BookingSummary from "../../components/BookingSummary";
import { Services, DAYS, MONTHS } from "../../constants/bookingData";
import NavigationButtons from "../../components/NavigationButtons";
import { useNavigate } from "react-router-dom";

function Agendar() {
    const navigate = useNavigate();
    const today = new Date();
    const [step, setStep] = useState(1);
    const [selectedService, setSelectedService] = useState(null);
    const [calYear, setCalYear] = useState(today.getFullYear());
    const [calMonth, setCalMonth] = useState(today.getMonth());
    const [selectedDay, setSelectedDay] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [done, setDone] = useState(false);

    const pct = (step / 3) * 100;

    useEffect(() => {
        if (done) {
            const timer = setTimeout(() => {
                navigate("/")
            }, 3000);
            return () => clearTimeout(timer)
        }


    }, [done, navigate])

    const handleConfirmBooking = () => {
        setDone(true)
    }
    return (
        <Agendamento>
            <Container>
                <StepIndicator>Passo {step} de 3</StepIndicator>
                <StepTitle>
                    {step === 1 && "Escolha o serviço"}
                    {step === 2 && "Escolher data e horário"}
                    {step === 3 && "Confirma agendamento"}
                </StepTitle>
                <ProgressBar>
                    <ProgressFill $pct={pct} />
                </ProgressBar>
            </Container>

            {step === 1 && (
                <ServiceSelection
                    Services={Services}
                    selectedService={selectedService}
                    setSelectedService={setSelectedService}
                />
            )}
            {step === 2 && (
                <GridCalTime>
                    <Calendar
                        DAYS={DAYS}
                        MONTHS={MONTHS}
                        calYear={calYear}
                        setCalYear={setCalYear}
                        calMonth={calMonth}
                        setCalMonth={setCalMonth}
                        selectedDay={selectedDay}
                        setSelectedDay={setSelectedDay}
                        today={today}
                    />
                    <TimeSelection
                        selectedDay={selectedDay}
                        selectedTime={selectedTime}
                        setSelectedTime={setSelectedTime}
                    />
                </GridCalTime>
            )}
            {step === 3 && (
                <BookingSummary
                    selectedService={selectedService}
                    setSelectedService={setSelectedService}
                    selectedDay={selectedDay}
                    setSelectedDay={setSelectedDay}
                    calMonth={calMonth}
                    selectedTime={selectedTime}
                    calYear={calYear}
                    name={name}
                    setName={setName}
                    phone={phone}
                    setPhone={setPhone}
                />
            )}
            <NavigationButtons
                step={step}
                setStep={setStep}
                selectedService={selectedService}
                selectedDay={selectedDay}
                selectedTime={selectedTime}
                name={name}
                phone={phone}
                setDone={setDone}
                onConfirm={handleConfirmBooking}
            />
        </Agendamento>
    )
}

export default Agendar

/*  <SuccessContainer>
                  <h1>Agendamento concluido com sucesso!  🎉</h1>
                  <p>Você será redirecionado em instantes...</p>
              </SuccessContainer>  */