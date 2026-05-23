import { getDaysInMonth  } from "../../utils/calendar";
import { CalendarLayout, CalendarBox, CalHeader, CalNav, CalendarMonth, CalGrid, Callabel, CalDay } from "./styles";

function Calendar({ DAYS, MONTHS, calYear, setCalYear, calMonth, setCalMonth, selectedDay, setSelectedDay, today }){
    const { firstDay, daysInMonth } = getDaysInMonth(calYear, calMonth)
    console.log(firstDay, daysInMonth)
    const isDisabled = (d) => {
        const date = new Date(calYear, calMonth, d);
        return date < new Date(today.getFullYear(), today.getMonth(), today.getDate())
    }

    const prevMonth = () => {
        if(calMonth === 0){
            setCalMonth(11);
            setCalYear( y => y - 1)
        } else {
            setCalMonth(m => m - 1)
            setSelectedDay(null)
        }
    }

    const nextMonth = () => {
        if(calMonth === 11){
            setCalMonth(0);
            setCalYear(y => y + 1)
        } else {
            setCalMonth(m => m + 1);
            setSelectedDay(null)
        }
    }
    return(
        <CalendarLayout>
            <CalendarBox>
                <CalHeader>
                    <CalNav onClick={prevMonth}>‹</CalNav>
                    <CalendarMonth>{MONTHS[calMonth]} {calYear}</CalendarMonth>
                    <CalNav onClick={nextMonth}>›</CalNav>
                </CalHeader>
                <CalGrid>
                    {DAYS.map(d => <Callabel key={d}>{d}</Callabel>)}
                    {Array.from({ length: firstDay}, (_, i) => <div key={`e${i}`}/>)}
                    {Array.from({ length: daysInMonth}, (_, i) => {
                        const d = i + 1;
                        const dis = isDisabled(d);
                        const isTod = d === today.getDate() && calMonth === today.getMonth() && calYear === today.getFullYear()

                        return(
                            <CalDay
                                key={d}
                                $disabled={dis}

                                $today={isTod}
                                $selected={selectedDay === d}
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