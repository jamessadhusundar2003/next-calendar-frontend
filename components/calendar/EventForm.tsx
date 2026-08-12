"use client"

import { DatePicker } from "@/components/DatePicker"
import { useState } from "react"

export default function EventForm() {

    const [formData, setFormData] = useState<{eventType: string, eventPersonName: string, eventDate: Date | undefined,}>({
        eventType: "",
        eventPersonName: "",
        eventDate: undefined,
    })

    function handleFormChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        const { name, value } = e.target

        if (name === "eventType") {
            setFormData({
                eventType: value,
                eventPersonName: formData.eventPersonName,
                eventDate: formData.eventDate
            })
        } else if (name === "eventPersonName") {
            setFormData({
                eventType: formData.eventType,
                eventPersonName: value,
                eventDate: formData.eventDate
            })
        }
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log(formData)
    }


    return(
        <div className="w-full max-w-md bg-slate-900/60 border border-slate-700/80 rounded-2xl p-6 shadow-lg shadow-black/20">
            <form action="" onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="relative">
                    <select
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleFormChange}
                        className="w-full appearance-none bg-slate-900/80 text-slate-100 text-sm font-[Arial] font-medium rounded-lg pl-3 pr-9 py-2.5 border border-slate-700/80 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/60 hover:border-slate-600 transition-colors cursor-pointer"
                    >
                        <option value="">Select event</option>
                        <option value="Birthday">Birthday</option>
                        <option value="Wedding Anniversary">Wedding Anniversary</option>
                        <option value="Death Anniversary">Death Anniversary</option>
                    </select>
                    <svg
                        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                </div>

                <input
                    type="text"
                    name="eventPersonName"
                    placeholder="Person name"
                    value={formData.eventPersonName}
                    onChange={handleFormChange}
                    className="w-full bg-slate-900/80 font-[Arial] text-slate-100 text-sm placeholder:text-slate-500 rounded-lg px-3 py-2.5 border border-slate-700/80 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/60 hover:border-slate-600 transition-colors"
                />

                <DatePicker
                    date={formData.eventDate}
                    setDate={(date) => setFormData({ ...formData, eventDate: date })}
                />

                <button
                    type="submit"
                    className="mt-1 w-full bg-gradient-to-r from-blue-700 to-purple-600 text-white font-mono text-sm font-semibold rounded-lg py-2.5 shadow-sm shadow-black/20 hover:from-blue-600 hover:to-purple-500 hover:shadow-lg hover:shadow-purple-500/25 active:translate-y-0 active:scale-[0.98] transition-all duration-200 cursor-pointer"
                >
                    Add event
                </button>
            </form>
        </div>
    )
}
