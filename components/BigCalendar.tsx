"use client"

import { Calendar, momentLocalizer, View, Views } from "react-big-calendar"
import moment from "moment"
import { useState } from "react"
import "react-big-calendar/lib/css/react-big-calendar.css";
import { calendarEvents } from "@/lib/data";

const localizer = momentLocalizer(moment)
const BigCalendar = () => {
    const [view, setView] = useState<View>(Views.WORK_WEEK)
    return (
        <div>
            <Calendar
                localizer={localizer}
                events={calendarEvents}
                startAccessor="start"
                endAccessor="end"
                views={["work_week", "day"]}
                view={view}
                style={{ height: 500 }}
                onView={setView}
            />
        </div>
    )
}
export default BigCalendar;