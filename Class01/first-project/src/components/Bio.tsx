import type { FC } from "react"

   interface BioProps{
       name: string,
       email: string,
       occupation: string

   }
   
   const Bio:FC<BioProps> = ({name, email, occupation}) => {

    //   console.log('props',name)
   
   
       return (
          <>
            <h1> Bio </h1>
            <p> name {name} </p>
            <p> email {email}</p>
            <p> occupation {occupation} </p>
        </>
       )
   }
   
export default Bio
