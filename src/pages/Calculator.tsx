import '../styles/CalculatorStyles.scss'
import Input from "../components/UI/Input/Input"
import Tools from "../components/Calculator/ButtonTools"
import { useState } from 'react'

const Calculator = () => {
    const [inputValue, setInputValue] = useState(0)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value)

        if (!isNaN(value)) {
            setInputValue(value)
        }
    }

    return (
        <div className="calculator__container">
            <Input
                value={inputValue}
                placeholder='0'
                className="calculator__input"
                onChange={handleInputChange}
            />
            <Tools/>
        </div>
    )
}

export default Calculator