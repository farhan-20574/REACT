import { useState, type ChangeEvent, type FormEvent } from 'react';
import './index.css'
const Newsletter = () => {
    const [email, setEmail] = useState('')

    const handleEmailChange = (e:ChangeEvent<HTMLInputElement>) => {
        console.log('event',e)
        setEmail(e.target.value)
    }

    const onSubmit =(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        console.log('email', email)
    }
    return (
        <section className='newsletter-section '>
            <h2 className='newsletter-heading '>Subscribe to my newsletter</h2>
            <form className="newsletter-form" onSubmit={onSubmit} >
                <label htmlFor="">Email</label>
                <input 
                type="email" 
                value={email} 
                onChange={handleEmailChange} 
                placeholder='input yuor email' />
                <button>Submit</button>
            </form>


            {/* <div >
               
                    <form action="#">
                        <div className="mx-auto mb-3 max-w-screen-sm items-center space-y-4 sm:flex sm:space-y-0">
                            <div className="relative w-full">
                                <label
                                    htmlFor="email"
                                    className="mb-2 hidden text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                    Email address
                                </label>

                                <input
                                    className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 pl-10 text-sm text-gray-900 sm:rounded-none sm:rounded-l-lg dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                                    placeholder="Enter your email"
                                    type="email"
                                    id="email"
                                    required
                                />
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="bg-primary-700 border-primary-600 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 w-full cursor-pointer rounded-lg border px-5 py-3 text-center text-sm font-medium text-white focus:ring-4 sm:rounded-none sm:rounded-r-lg"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </form>
                </div> */}

        </section>

    );
};
export { Newsletter };