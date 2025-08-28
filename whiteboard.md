code//
import { useState, type ChangeEvent, type FormEvent } from 'react'
import './index.css'

const Newsletter = () => {
  const [email, setEmail] = useState('')

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log('event', e)
    setEmail(e.target.value)
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('user email', email)
  }

  console.log('email', email)

  return (
    <section className="newsletter-section">
      <h2 className="newsletter-heading">Subscribe to my newsletter</h2>
      <form className="newsletter-form" onSubmit={onSubmit}>
        <label htmlFor="">Email</label>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="type your email"
        />
        <button>Submit</button>
      </form>
    </section>
  )
}

export default Newsletter

css//
.newsletter-section {
  padding: 2rem;
  background-color: #f1f5f9; /* light grayish-blue */
  border-radius: 8px;
  max-width: 500px;
  margin: 2rem auto;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  font-family: sans-serif;
  text-align: center;
}

.newsletter-heading {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #1e293b;
}

.newsletter-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: left;
}

.newsletter-form label {
  font-weight: 600;
  font-size: 1rem;
  color: #334155;
}

.newsletter-form input[type='email'] {
  padding: 0.75rem 1rem;
  border: 1px solid #cbd5e1;
  border-radius: 4px;
  font-size: 1rem;
  outline: none;
  transition: border 0.2s ease;
}

.newsletter-form input[type='email']:focus {
  border-color: #0ea5e9; /* blue */
}

.newsletter-form button {
  background-color: #0ea5e9;
  color: white;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.newsletter-form button:hover {
  background-color: #0284c7;
}