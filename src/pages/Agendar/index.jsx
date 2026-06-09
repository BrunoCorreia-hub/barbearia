import { Agendamento, Container, GridCalTime, StepIndicator, StepTitle, ProgressBar, ProgressFill, SuccessContainer } from "./styles"
import { useCallback, useEffect, useState } from "react"
import ServiceSelection from "../../components/ServiceSelection";
import Calendar from "../../components/Calendar/index";
import TimeSelection from "../../components/TimeSelection";
import BookingSummary from "../../components/BookingSummary";
import { DAYS, MONTHS } from "../../constants/bookingData";
import NavigationButtons from "../../components/NavigationButtons";
import { useNavigate } from "react-router-dom";
import { createAppointment, getBlockedSlots, getBookedSlots, getServices } from "../../lib/supabase";

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
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    // Serviços do banco
    const [services, setServices] = useState([])
    // Horários ocupados/bloqueados para o dia selecionado
    const [bookedSlots, setBookedSlots] = useState([])
    const [blockedSlots, setBlockedSlots] = useState([])

    const pct = (step / 3) * 100;

    useEffect(() => {
        getServices()
            .then(setServices)
            .catch(err => console.error("Erro ao carregar serviços:", err))
    }, [])

    useEffect(() => {
        if (!selectedDay) return

        const date = new Date(calYear, calMonth, selectedDay)
        Promise.all([getBookedSlots(date), getBlockedSlots(date)])
            .then(([booked, bloked]) => {
                setBookedSlots(booked)
                setBlockedSlots(bloked)
            })
            .catch(err => console.error("Erro ao buscar slots:", err))
    }, [selectedDay, calYear, calMonth])

    useEffect(() => {
        if (done) {
            const timer = setTimeout(() => {
                navigate("/")
            }, 3000);
            return () => clearTimeout(timer)
        }
    }, [done, navigate])

    const handleConfirmBooking = useCallback(async () => {
        setLoading(true)
        setError(null)
        try {
            const date = new Date(calYear, calMonth, selectedDay)
            await createAppointment({
                clientName: name,
                clientPhone: phone,
                serviceId: selectedService?.id, //vem do supabase
                date,
                timeSlot: selectedTime
            })
            setDone(true)
        } catch (error) {
            setError("Erro ao confirmar agendamento, tente novamente")
            console.error(error)
        }
        finally {
            setLoading(false)
        }
    }, [name, phone, selectedService, calYear, calMonth, selectedDay, selectedTime])

    if (done) {
        return (
            <SuccessContainer>
                <span>✔</span>
                <h1>Agendamento concluido com sucesso!  🎉</h1>
                <p>Você será redirecionado em instantes...</p>
            </SuccessContainer>
        )
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
                    Services={services}
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
                        bookedSlots={bookedSlots}
                        blockedSlots={blockedSlots}
                    />
                </GridCalTime>
            )}
            {step === 3 && (
                <div>
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
                    {error && (
                        <p style={{ color: "red", textAlign: "center", marginTop: 8}}>{error}</p>
                    )}
                </div>
            )}
            <NavigationButtons
                step={step}
                setStep={setStep}
                selectedService={selectedService}
                selectedDay={selectedDay}
                selectedTime={selectedTime}
                name={name}
                phone={phone}
                onConfirm={handleConfirmBooking}
                loading={loading}
            />
        </Agendamento>
    )
}

export default Agendar