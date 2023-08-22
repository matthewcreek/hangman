import styles from './Keyboard.module.css'

const KEYS = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
]

type KeyboardProps = {
    activeLetters: string[]
    inactiveLetters: string[]
    addGuessedLetter: (letter: string) => void
}

export default function Keyboard({ activeLetters, inactiveLetters, addGuessedLetter}: KeyboardProps) {
    return (
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(75px, 1fr))',gap:'.5rem'}}>
            {KEYS.map(letter => {
                const isActive = activeLetters.includes(letter);
                const isInactive = inactiveLetters.includes(letter)
                return (
                    <button 
                        onClick={() => addGuessedLetter(letter)} 
                        className={`${styles.btn} ${isActive ? styles.active : ''} ${isInactive ? styles.inactive : ''}`}
                        disabled={isInactive || isActive}
                        key={letter}
                    >
                        {letter}
                    </button>
                )
            })}
        </div>
    )
}