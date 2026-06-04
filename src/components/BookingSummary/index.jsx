import { Formater } from "../../utils/Formater";
import { FormBox, Summary, SummaryRow, FieldGroup, Field, Label, Input } from "./styles";

function BookingSummary({ selectedService, setSelectedService, selectedDay, setSelectedDay, calMonth, selectedTime, calYear, name, setName, phone, setPhone }){
    return(
        <FormBox>
            <Summary>
                <SummaryRow>
                    <Label>Serviço</Label>
                    <span>{selectedService?.name}</span>
                </SummaryRow>
                <SummaryRow>
                    <Label>Data</Label>
                    <span>{selectedDay}/{calMonth + 1}/{calYear}</span>
                </SummaryRow>
                <SummaryRow>
                    <Label>Horário</Label>
                    <span>{selectedTime}</span>
                </SummaryRow>
                <SummaryRow>
                    <Label>Duração</Label>
                    <span>{selectedService?.time}</span>
                </SummaryRow>
                <SummaryRow>
                    <Label>Total</Label>
                    <span>{Formater(selectedService?.price)}</span>
                </SummaryRow>
            </Summary>

            <FieldGroup>
                <Field>
                    <Label>Nome Completo</Label>
                    <Input 
                     placeholder="Seu nome"
                     value={name}
                     onChange={(e) => setName(e.target.value)}
                    />
                </Field>
                <Field>
                    <Label>Telefone / WhatsApp</Label>
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