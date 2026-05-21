
type DateTileProps = {
    date: (number | null)
}

export default function DateTile(props: DateTileProps) {
    return(
        <div className="w-full aspect-square flex items-center justify-center rounded-xl text-sm font-medium text-slate-300 hover:bg-slate-700 hover:text-white transition-colors cursor-pointer">
            <p>{props.date}</p>
        </div>
    )
}