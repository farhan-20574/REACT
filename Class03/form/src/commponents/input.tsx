interface InputProps {
    lable: string
    palceholder: string
    onChange:()=>{}
}
const Input:FC<InputProps> = ({lable})=>{
    return(
        <div>
            <label htmlFor="">Email</label>
            <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleInputChange}
                placeholder='input yuor email' />
        </div>
    )
}
export default Input