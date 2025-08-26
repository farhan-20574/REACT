import { useState } from 'react'
const Counter = () => {

    const [counter, setCounter] = useState(0)
    console.log ('counter',counter)

    // const handleIncrement =()=>{
    //     setCounter (counter +1 )
    // }
     const handleIncrement =()=>{
        setCounter ((prev)=> prev +1)
    }
    const handleDecrement =()=>{
        setCounter (counter -1 )
    }
    return (
        <div>
           <span style={{fontSize:40}}>{counter}</span>
            <div>
                {/* <button onClick={handleDecrement}>Decrement</button> */}
                <button onClick={()=> setCounter(counter - 1)}disabled={!counter}>Decrement</button>
                <button onClick={handleIncrement}>Increment</button>
            </div>
        </div>
    )
}

export default Counter