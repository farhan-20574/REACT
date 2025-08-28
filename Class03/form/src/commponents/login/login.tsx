import { useState, type ChangeEvent, type FormEvent } from "react"
import Input from "../input"

const Login = () => {

    const [user, setUser] = useState({ email: '', password: '' })

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
            const {name,value}=e.target
            setUser((prevData)=>({...prevData,[name]: value}))
    }
    const onSubmit =(e:FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        console.log('user',user)
    }

    return (

        <section className='newsletter-section '>
            <h2 className='newsletter-heading '>Login to my app</h2>
            <form className="newsletter-form" onSubmit={onSubmit} >
                <label htmlFor="">Email</label>
                <input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleInputChange}
                    placeholder='input yuor email' />
                <label htmlFor="">password</label>
                <input
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={handleInputChange}
                    placeholder='input yuor password' />
                <button>Login</button>
            </form>
        </section>

    )
}
export default Login