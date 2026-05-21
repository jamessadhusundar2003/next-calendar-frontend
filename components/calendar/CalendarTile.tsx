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

    const datesArray: {id: number, date: (number | null)}[] = []

    for(let i = 1; i <= 42; i++) {
        if ((i < firstDayOfThisMonth) || ((i - firstDayOfThisMonth + 1) > daysInMonth)) {
            datesArray.push({id: i, date: null})
        }
        else {
            datesArray.push({id: i, date: (i - firstDayOfThisMonth + 1)})
        }
    }

    const years_for_select_tag = Array.from({ length: 201 }, (_, i) => year - 100 + i)

    return(
        <div className="bg-slate-900 rounded-3xl w-2xl m-5 p-4 shadow-2xl border border-slate-700">

            {/* DAY ROW */}
            <div className="flex justify-evenly mb-1">
                {days.map(day => (<div className="text-slate-400 text-xs font-semibold tracking-widest uppercase p-3 w-full text-center" key={days.indexOf(day)}>{day}</div>))}
            </div>

            {/* FIRST ROW */}
            <div className="flex justify-evenly">
                {datesArray.filter(date => (date.id <= 7)).map(date => (<DateTile key={date.id} date={date.date} />))}
            </div>

            {/* SECOND ROW */}
            <div className="flex justify-evenly">
                {datesArray.filter(date => ((date.id > 7) && (date.id <= 14))).map(date => (<DateTile key={date.id} date={date.date} />))}
            </div>

            {/* THIRD ROW */}
            <div className="flex justify-evenly">
                {datesArray.filter(date => ((date.id > 14) && (date.id <= 21))).map(date => (<DateTile key={date.id} date={date.date} />))}
            </div>

            {/* FOURTH ROW */}
            <div className="flex justify-evenly">
                {datesArray.filter(date => ((date.id > 21) && (date.id <= 28))).map(date => (<DateTile key={date.id} date={date.date} />))}
            </div>

            {/* FIFTH ROW */}
            <div className="flex justify-evenly">
                {datesArray.filter(date => ((date.id > 28) && (date.id <= 35))).map(date => (<DateTile key={date.id} date={date.date} />))}
            </div>

            {/* SIXTH ROW */}
            <div className="flex justify-evenly">
                {datesArray.filter(date => (date.id > 35)).map(date => (<DateTile key={date.id} date={date.date} />))}
            </div>

            {/* CALENDAR CONTROLLER */}
            <div className="flex gap-3 mt-4 px-2">
                <select value={month} onChange={(e) => (setMonth(Number(e.target.value)))} className="flex-1 bg-slate-800 text-slate-200 text-sm rounded-xl px-3 py-2 border border-slate-600 focus:outline-none focus:border-slate-400 cursor-pointer">
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

                <select value={year} onChange={(e) => setYear(Number(e.target.value))} className="flex-1 bg-slate-800 text-slate-200 text-sm rounded-xl px-3 py-2 border border-slate-600 focus:outline-none focus:border-slate-400 cursor-pointer">
                    {years_for_select_tag.map((year) => (<option key={year} value={year}>{year}</option>))}
                </select>
            </div>
            
        </div>
    )
}