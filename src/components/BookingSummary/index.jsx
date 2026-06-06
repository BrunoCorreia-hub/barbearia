import { Formater } from "../../utils/Formater";
import { FormBox, Summary, Title, SummaryGrid, SummaryRow, FieldGroup, Field, Label, Input } from "./styles";

function BookingSummary({ selectedService, /* setSelectedService, */ selectedDay,/*  setSelectedDay, */ calMonth, selectedTime, calYear, name, setName, phone, setPhone }) {
    return (
        <FormBox>
            <Summary>
                <Title>RESUMO DO SERVIÇO</Title>
                <SummaryGrid>
                    <SummaryRow>
                        <Label> ✂ Serviço:</Label>
                        <h2>{selectedService?.name}</h2>
                    </SummaryRow>
                    <SummaryRow>
                        <Label> 🗓 Data:</Label>
                        <span>{selectedDay}/{calMonth + 1}/{calYear}</span>
                    </SummaryRow>
                    <SummaryRow>
                        <Label> ⏱ Horário:</Label>
                        <span>{selectedTime}</span>
                    </SummaryRow>
                    <SummaryRow>
                        <Label> ⏳ Duração:</Label>
                        <span>{selectedService?.time}</span>
                    </SummaryRow>
                </SummaryGrid>
                <SummaryRow>
                    <Label>Total:</Label>
                    <h2>{Formater(selectedService?.price)}</h2>
                </SummaryRow>
            </Summary>

            <FieldGroup>
                <Title>SEUS DADOS</Title>
                <Field>
                    <Label>Nome Completo:</Label>
                    <Input
                        placeholder="Seu nome"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Field>
                <Field>
                    <Label>Telefone / WhatsApp:</Label>
                    <Input
                        placeholder="(00) 00000-0000"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </Field>
            </FieldGroup>
        </FormBox>
    )
}

export default BookingSummary