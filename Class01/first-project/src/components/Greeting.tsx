import type { FC } from "react"

interface GreetingProps{
    city: string
}

const Greeting:FC<GreetingProps> = ({city}) => {
//const Greeting = (props: GreetingProps) =>{
   console.log('props',city)


    return (
        <div>
            <h1>welcome to {city}</h1>
        </div>
    )
}
export default Greeting