import './firstBlock.css'

const Round = (props:any) => {
    const { roundRef } = props
    
    return <div ref={roundRef} className="round"></div>
}

export default Round
