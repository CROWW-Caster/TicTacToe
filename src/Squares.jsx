import './index.css'

export default function Box(props) {


    return (
        <input
            onClick={props.handleClick} 
            value={props.value}
            readOnly
            id={props.id} 
            disabled={props.value} 
            className='bg-yellow-300 border h-24 md:h-32 w-24 md:w-32 font-bold text-center text-[90px] disabled:bg-yellow-700 disabled:select-none' 
        />
    )
}