type ButtonType = {
    onClick: () => void
    disabled: boolean
    timer: number
}

const StartButton = ({ onClick, disabled, timer }: ButtonType) => {
    return (
        <button onClick={onClick} disabled={disabled}>
            {disabled ? `Осталось ${timer} сек.` : "START"}
        </button>
    )
}

export default StartButton
