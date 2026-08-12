import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"

type DateTileProps = {
    date: (number | null)
    current_date: boolean
}

export default function DateTile(props: DateTileProps) {
    
    if (props.current_date) {
        return(
            <Popover>
                <PopoverTrigger nativeButton={false} render={
                    <div className="w-full aspect-square flex items-start justify-start p-3 rounded-xl text-xl font-medium text-white bg-white/10 transition-colors cursor-pointer">
                        <p>{props.date}</p>
                    </div>
                } />
                <PopoverContent align="start">
                <PopoverHeader>
                    <PopoverTitle>Hello</PopoverTitle>
                    <PopoverDescription>
                        James Sadhu Sundar - Birthday!
                    </PopoverDescription>
                </PopoverHeader>
                </PopoverContent>
            </Popover>
        )
    }

    return(
        <Popover>
                <PopoverTrigger nativeButton={false} render={
                    <div className="w-full aspect-square flex items-start justify-start p-3 rounded-xl text-xl font-medium text-neutral-500 hover:bg-white/10 hover:text-white transition-colors cursor-pointer">
                        <p>{props.date}</p>
                    </div>
                } />
                <PopoverContent align="start">
                <PopoverHeader>
                    <PopoverTitle>Hello</PopoverTitle>
                    <PopoverDescription>
                        James Sadhu Sundar - Birthday!
                    </PopoverDescription>
                </PopoverHeader>
                </PopoverContent>
            </Popover>
    )
}
