import { useState } from "react";

export default function Circle(props) {

    const [isSelected, setIsSelected] = useState(false)

    return (
        <div onClick={() => { props.selection(props.number) }} className={`flex items-center justify-center w-12 h-12 ${props.chosen === props.number ? 'bg-[#7c8798]' : 'bg-[#343f4c]'} rounded-full`}>
            <span className={`${props.chosen === props.number ? 'text-white' : 'text-[#7c8798]'} font-overpass`}>{props.number}</span>
        </div>
    );
}