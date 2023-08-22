import styles from './Keyboard.module.css'

const KEYS = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
]

type KeyboardProps = {
    disabled?: boolean
    activeLetters: string[]
    inactiveLetters: string[]
    addGuessedLetter: (letter: string) => void
}

export default function Keyboard({ disabled = false, activeLetters, inactiveLetters, addGuessedLetter}: KeyboardProps) {
    return (
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(75px, 1fr))',gap:'.5rem'}}>
            {KEYS.map(letter => {
                const isActive = activeLetters.includes(letter);
                const isInactive = inactiveLetters.includes(letter)
                return (
                    <button 
                        onClick={() => addGuessedLetter(letter.toUpperCase())} 
                        className={`${styles.btn} ${isActive ? styles.active : ''} ${isInactive ? styles.inactive : ''}`}
                        disabled={isInactive || isActive || disabled}
                        key={letter}
                    >
                        {letter}
                    </button>
                )
            })}
        </div>
    )
}