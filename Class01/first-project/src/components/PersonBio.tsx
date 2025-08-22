import React from "react";

interface PersonBio {
      name: string,
       email: string,
       occupation?: string,
       children?: React.ReactNode
}

const PersonBio = (props:PersonBio )=>{
    const {name, email, occupation}= props
    
    return (
         <>
            <h1>Person Bio</h1>
            <p> person name {name} </p>
            <p> person email {email}</p>
            { occupation?(<p> person occupation is {occupation} </p>):(<p>occupation not defied</p>) }
        
        {props.children}
        </>
    )
}
export default PersonBio