import { getDaysInMonth  } from "../../utils/calendar";
import { CalendarLayout, CalendarBox, CalHeader, CalNav, CalendarMonth, CalGrid, Callabel, CalDay } from "./styles";

function Calendar({ DAYS, calYear, CalMonth, setSelectedDay, today }){
    const { firstDay, daysInMonth } = getDaysInMonth(calYear, CalMonth)
    
    const isDisabled = (d) => {
        const date = new Date(calYear, CalMonth, d);
        return date < new Date(today.getFullYear(), today.getMonth(), today.getDate())
    }
    return(
        <CalendarLayout>
            <CalendarBox>
                <CalHeader>
                    <CalNav>‹</CalNav>
                    <CalendarMonth>maio</CalendarMonth>
                    <CalNav>›</CalNav>
                </CalHeader>
                <CalGrid>
                     {DAYS.map(d => <Callabel key={d}>{d}</Callabel>)}
                    {Array.from({ length: firstDay}, (_, i) => <div key={`e${i}`}/>)}
                    {Array.from({ length: daysInMonth}, (_, i) => {
                        const d = i + 1;
                        const dis = isDisabled(i);
                        const isTod = i === today.getDate() && CalMonth === today.getMonth() && calYear === today.getFullYear()

                        return(
                            <CalDay
                                key={d}
                                $disabled={dis}

                                $today={isTod}
                                $selected={setSelectedDay === d}
                                onClick={() => !dis && setSelectedDay(d)}
                            >
                                {d}
                            </CalDay>
                        )
                    })} 
                </CalGrid>
            </CalendarBox>
        </CalendarLayout>
    )
}

export default Calendar