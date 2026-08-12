"use client"

import { useState } from "react"
import DateTile from "./DateTile"

export default function CalendarTile() {

    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

    const [year, setYear] = useState(new Date().getFullYear())

    const [month, setMonth] = useState(new Date().getMonth() + 1)

    const daysInMonth = new Date(year, month, 0).getDate()

    let firstDayOfThisMonth = new Date(year, month - 1, 1).getDay()
    if (firstDayOfThisMonth === 0) {firstDayOfThisMonth = 7}

    const current_date = new Date().getDate(); 

    const datesArray: {id: number, date: (number | null), current_date: boolean}[] = []

    for(let i = 1; i <= 42; i++) {
        if ((i < firstDayOfThisMonth) || ((i - firstDayOfThisMonth + 1) > daysInMonth)) {
            datesArray.push({id: i, date: null, current_date: false})
        }
        else {
            ((i - firstDayOfThisMonth + 1) === current_date) ? datesArray.push({id: i, date: (i - firstDayOfThisMonth + 1), current_date: true}) : datesArray.push({id: i, date: (i - firstDayOfThisMonth + 1), current_date: false})
        }
    }

    const years_for_select_tag = Array.from({ length: 201 }, (_, i) => year - 100 + i)

    console.log(datesArray)

    return(
        <div className="bg-black/50 backdrop-blur-md border border-white/20 rounded-3xl w-2xl m-5 p-4 shadow-2xl">

            {/* DAYS ROW */}
            <div className="flex justify-evenly mb-2">
                {days.map(day => (<div className="text-slate-400 text-xs font-semibold tracking-widest uppercase p-3 w-full text-center" key={days.indexOf(day)}>{day}</div>))}
            </div>

            {/* FIRST ROW */}
            <div className="flex justify-evenly gap-2 mb-2">
                {datesArray.filter(date => (date.id <= 7)).map(date => (<DateTile key={date.id} date={date.date} current_date={date.current_date} />))}
            </div>

            {/* SECOND ROW */}
            <div className="flex justify-evenly gap-2 mb-2">
                {datesArray.filter(date => ((date.id > 7) && (date.id <= 14))).map(date => (<DateTile key={date.id} date={date.date} current_date={date.current_date}  />))}
            </div>

            {/* THIRD ROW */}
            <div className="flex justify-evenly gap-2 mb-2">
                {datesArray.filter(date => ((date.id > 14) && (date.id <= 21))).map(date => (<DateTile key={date.id} date={date.date} current_date={date.current_date} />))}
            </div>

            {/* FOURTH ROW */}
            <div className="flex justify-evenly gap-2 mb-2">
                {datesArray.filter(date => ((date.id > 21) && (date.id <= 28))).map(date => (<DateTile key={date.id} date={date.date} current_date={date.current_date} />))}
            </div>

            {/* FIFTH ROW */}
            <div className="flex justify-evenly gap-2 mb-2">
                {datesArray.filter(date => ((date.id > 28) && (date.id <= 35))).map(date => (<DateTile key={date.id} date={date.date} current_date={date.current_date} />))}
            </div>

            {/* SIXTH ROW */}
            <div className="flex justify-evenly gap-2">
                {datesArray.filter(date => (date.id > 35)).map(date => (<DateTile key={date.id} date={date.date} current_date={date.current_date} />))}
            </div>

            {/* CALENDAR CONTROLLER */}
            <div className="flex gap-3 mt-4 px-2">
                <div className="relative flex-1">
                    <select
                        value={month}
                        onChange={(e) => setMonth(Number(e.target.value))}
                        className="w-full appearance-none bg-slate-900/80 text-slate-100 text-sm font-medium rounded-lg pl-3 pr-9 py-2.5 border border-white/15 shadow-sm shadow-black/20 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/60 hover:border-slate-600 transition-colors cursor-pointer"
                    >
                        <option value="1">January</option>
                        <option value="2">February</option>
                        <option value="3">March</option>
                        <option value="4">April</option>
                        <option value="5">May</option>
                        <option value="6">June</option>
                        <option value="7">July</option>
                        <option value="8">August</option>
                        <option value="9">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                    </select>
                    <svg
                        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                </div>

                <div className="relative flex-1">
                    <select
                        value={year}
                        onChange={(e) => setYear(Number(e.target.value))}
                        className="w-full appearance-none bg-slate-900/80 text-slate-100 text-sm font-medium rounded-lg pl-3 pr-9 py-2.5 border border-white/15 shadow-sm shadow-black/20 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/60 hover:border-slate-600 transition-colors cursor-pointer"
                    >
                        {years_for_select_tag.map((year) => (
                            <option key={year} value={year}>{year}</option>
                        ))}
                    </select>
                    <svg
                        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div>
            
        </div>
    )
}
