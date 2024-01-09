import { useRef } from "react"

export default function RefExample() {
    let ref_input = useRef(null)
    const handleClick = () => {
        ref_input.current.focus()
        ref_input.current.style.backgroundColor="purple"
    }

    return(
        <div>
            <input ref={ref_input} type="text" />
            <button onClick={handleClick}>
                Focar no Input
            </button>
        </div>
    )
}