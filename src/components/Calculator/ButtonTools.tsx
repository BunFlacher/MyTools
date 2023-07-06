import Button from "../UI/button/Button"

const Tools = () => {
    return (
        <div className="calculator__buttons">
            <div className="calc__row">
                <Button
                    className="button__calculator"
                >
                    <span className="simbol">C</span>
                </Button>
                <Button
                    className="button__calculator"
                >
                    <span className="simbol">()</span>
                </Button>
                <Button
                    className="button__calculator"
                >
                    <span className="simbol">%</span>
                </Button>
                <Button
                    className="button__tools"
                >
                    <span className="simbol">÷</span>
                </Button>
            </div>
            <div className="calc__row">
                <Button
                    className="button__calculator"
                >
                    <span className="simbol">7</span>
                </Button>
                <Button
                    className="button__calculator"
                >
                    <span className="simbol">8</span>
                </Button>
                <Button
                    className="button__calculator"
                >
                    <span className="simbol">9</span>
                </Button>
                <Button
                    className="button__tools"
                >
                    <span className="simbol">×</span>
                </Button>
            </div>
            <div className="calc__row">
                <Button
                    className="button__calculator"
                >
                    <span className="simbol">4</span>
                </Button>
                <Button
                    className="button__calculator"
                >
                    <span className="simbol">5</span>
                </Button>
                <Button
                    className="button__calculator"
                >
                    <span className="simbol">6</span>
                </Button>
                <Button
                    className="button__tools"
                >
                    <span className="simbol">−</span>
                </Button>
            </div>
            <div className="calc__row">
                <Button
                    className="button__calculator"
                >
                    <span className="simbol">1</span>
                </Button>
                <Button
                    className="button__calculator"
                >
                    <span className="simbol">2</span>
                </Button>
                <Button
                    className="button__calculator"
                >
                    <span className="simbol">3</span>
                </Button>
                <Button
                    className="button__tools"
                >
                    <span className="simbol">+</span>
                </Button>
            </div>
            <div className="calc__row">
                <Button
                    className="button__zero"
                >
                    <span className="simbol">0</span>
                </Button>
                <Button
                className="button__calculator"
                >
                    <span className="simbol">,</span>
                </Button>
                <Button
                    className="button__tools"
                >
                    <span className="simbol">=</span>
                </Button>
            </div>
        </div>
    )
}

export default Tools