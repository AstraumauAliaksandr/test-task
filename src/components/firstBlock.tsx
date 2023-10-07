import { useEffect } from "react"
import "./firstBlock.css"
import Round from "./round"

const FirstBlock = (props: any) => {
    const { active, setPosition1, setPosition2, roundRef, blockRef } = props

    function getPosition() {
        if (blockRef.current && active) {
            let { x, y } = blockRef.current.getBoundingClientRect()
            setPosition1(x)
            setPosition2(y)
        }
    }
    useEffect(() => {
        getPosition()
    }, [blockRef, active])

    return (
        <div ref={blockRef} className="block animate">
            1
            <Round roundRef={roundRef}/>
        </div>
    )
}

export default FirstBlock
