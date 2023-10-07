import FirstBlock from "./components/firstBlock"
import SecondBlock from "./components/secondBlock"
import "./app.css"
import StartButton from "./components/startButton"
import { useEffect, useRef, useState } from "react"

function App() {
    const [position1, setPosition1] = useState()
    const [position2, setPosition2] = useState()
    const [position3, setPosition3] = useState()
    const [position4, setPosition4] = useState()
    const [animationRunning, setAnimationRunning] = useState(false)
    const [animationRound, setanimationRound] = useState(false)
    const [timer, setTimer] = useState(0)
    const roundRef = useRef<HTMLDivElement>(null)
    const firstBlock = useRef<HTMLDivElement>(null)
    const secondBlock = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (animationRunning) {
            const animationDuration = 5000 
            const interval = 1000 

            const countdown = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1)
            }, interval)

            setTimeout(() => {
                clearInterval(countdown)
                setTimer(0)
                setAnimationRunning(false)
            }, animationDuration)

            return () => {
                clearInterval(countdown)
            }
        }
    }, [animationRunning])

    useEffect(()=>{
      if(animationRound) {
        let res1, res2
        if(position1 && position2 && position3 && position4) {
          res1 = position3-position1;
          res2 = position4-position2;
        }
          roundRef.current?.animate(  [
              { transform: `translate(0, 0)` },
              { transform: `translate(${res1}px, ${res2}px)` },
            ],
            {
              duration: 2000,
            },)
      }
  }, [animationRound, position1, position3])

    const startAnimationB = () => {
        if (!animationRunning) {
            setAnimationRunning(true)
            setTimer(5) // Установите длительность анимации в секундах
        }
    }

    const startAnimationRound = () => {
      if (!animationRound) {
        setanimationRound(true)
      }
  }

  const startAnimation = () => {
    startAnimationB();
    startAnimationRound();

  }

    return (
        <div className="App">
            <div className="animation">
                <FirstBlock
                    active={animationRunning}
                    setPosition1={setPosition1}
                    setPosition2={setPosition2}
                    roundRef={roundRef}
                    blockRef={firstBlock}
                />
                <SecondBlock
                    blockRef={secondBlock}
                    active={animationRunning}
                    setPosition1={setPosition3}
                    setPosition2={setPosition4}
                />
            </div>
            <StartButton
                onClick={startAnimation}
                disabled={animationRunning}
                timer={timer}
            />
        </div>
    )
}

export default App
