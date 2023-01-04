import { useState } from 'react'
import './ContactForm.css'
export const ContactForm = () => {
    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [notes, setNotes] = useState('')
    return (
    <form action='mailto:leprekus@yahoo.com' method='post' encType='text/plain'>
        <input onChange={({ target }) => setEmail(target.value)}     required   type='email'  placeholder='email'/>
        <input onChange={({ target }) => setFirstName(target.value)} required placeholder='First Name'/>
        <input onChange={({ target }) => setLastName(target.value)}  required  placeholder='Last Name'/>
        <textarea onChange={({ target }) => setNotes(target.value)}  required  placeholder='Notes'/>
        <button type='submit'>Submit</button>
    </form>
    )
}