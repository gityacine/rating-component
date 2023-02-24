
export default function Circle(props) {

    return (
        <button onClick={() => { props.selection(props.number) }} className={`flex items-center justify-center shadow-lg w-12 h-12 ${props.chosen === props.number ? 'bg-[#7c8798]' : 'bg-[#343f4c]'} rounded-full ${props.chosen === props.number ? 'text-white' : 'text-[#7c8798]'} text-lg font-normal font-overpass transition ease-in-out sm:hover:scale-110 duration-500 sm:hover:bg-[#fb7413] sm:hover:text-white active:bg-[#fb7413] active:text-white`}>
            {props.number}
        </button>
    );
}