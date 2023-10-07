import { useEffect } from "react"
import "./firstBlock.css"

const SecondBlock = (props: any) => {
    const { active, setPosition1, setPosition2, blockRef } = props

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
        <div ref={blockRef} className="block">
            2
        </div>
    )
}

export default SecondBlock
