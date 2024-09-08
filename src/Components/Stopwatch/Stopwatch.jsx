import React, { useRef, useState } from 'react'

function Stopwatch() {
    const [time, setTime] = useState(0)
    const [isActive, setIsActive] = useState(false)
    const timeInterval = useRef(null)
    const [laps, setLaps] = useState([])

    const start = () => {
        if (!isActive) {
            setIsActive(true)
            timeInterval.current = setInterval(() => {
                setTime((prev) => prev + 10)
            }, 10)
        }
    }

    const stop = () => {
        setIsActive(false)
        clearInterval(timeInterval.current)
    }

    const lap = () => {
        if (isActive) {
            setLaps((prev) => [...prev, formattedTime()])
        }
    }

    const reset = () => {
        setIsActive(false)
        clearInterval(timeInterval.current)
        setTime(0)
        setLaps([])
    }

    const formattedTime = () => {
        const minutes = Math.floor(time / 60000)
        const seconds = Math.floor((time % 60000) / 1000)
        const milliSeconds = (time % 1000) / 10;
        return `${minutes < 10 ? 0 : ''}${minutes}:${seconds < 10 ? 0 : ''}${seconds}:${milliSeconds < 10 ? '0' : ''}${milliSeconds}`
    }

    console.log(laps)

    return (
        <div>
            <h2>Stopwatch</h2>
            <h3>{formattedTime()}</h3>
            <div>
                {!isActive ? <button onClick={start}>Start</button> :
                    <button onClick={stop}>Stop</button>}
                <button onClick={lap}>Lap</button>
                <button onClick={reset}>Reset</button>
            </div>
            {laps.length > 0 && <div>
                <h3>Laps</h3>
                <ul>
                    {laps.map((item) => <li>{item}</li>)}
                </ul>
            </div>}
        </div>
    )
}

export default Stopwatch