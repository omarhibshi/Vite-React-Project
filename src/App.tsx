import { useState } from "react"
import Button from "./components/Button"

let clickCounter: number
clickCounter = 0

function App() {
    const [buttonText, setButtonText] = useState("Click")

    const handleClick = () => {
        console.log(buttonText)
        setButtonText(" <<< " + clickCounter++ + " >>> ")
    }

    return (
        <div>
            <Button onClick={handleClick}>{buttonText}</Button>
        </div>
    )
}

export default App
