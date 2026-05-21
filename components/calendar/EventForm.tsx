import { DatePicker } from "./DatePicker";

export default function EventForm() {
    return(
        <div>
            <form>
                <select>
                    <option value="">Birthday</option>
                    <option value="">Wedding Anniversary</option>
                    <option value="">Death Anniversary</option>
                </select>
                
                <input type="text" />

                <DatePicker />
            </form>
        </div>
    )
}