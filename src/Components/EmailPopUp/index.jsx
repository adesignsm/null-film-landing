import { useState } from 'react';
import { push, ref } from "firebase/database";
import { db } from "../../firebase";

import CLOSE_ICON from '../../Assets/Icons/close.png';
import './index.css';

export const EmailPopUp = () => {
    const [email, setEmail] = useState('');
    const [emailSuccess, setEmailSuccess] = useState(false);
    const [closeEmail, setCloseEmail] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const validateEmail = (email) => {
        return String(email).toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
    };

    const handleClick = () => {
        setCloseEmail(true);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let isValid = true; 
        const errors = {};
    
        if (email.trim() === "") {
            isValid = false;
            errors.email = "email is required";
        } else if (!validateEmail(email)) {
            isValid = false;
            errors.email = "please enter a valid email";
        }

        if (!isValid) {
            return (
                alert(
                    `There are following errors: ${
                        Object.keys(errors).map((err) => {
                            return errors[err]
                        })
                    }`
                )
            )
        } else {
            const userEntry = {
                email: email,
            };

            const emailListRef = ref(db, "emails");
            push(emailListRef, userEntry).then(() => {
                setEmail("");
                setEmailSuccess(true);
            }).catch((err) => {
                console.error(err);
            })
        }
    };

    return (
        <>
            <div className={`email-popup-container ${emailSuccess || closeEmail ? 'hide' : ''}`}>
                <div className={`email-popup ${emailSuccess || closeEmail ? 'hide' : ''}`}>
                    <div className='close-button-container'>
                        <img src={CLOSE_ICON} onClick={handleClick}/>
                    </div>
                    <div className='copy'>
                        <p>
                            Welcome to a collection of a growing collaboration between Eric Cheung, Alim Sabir, and Sebastian Palencia 
                            <br />
                            <br />
                            Join us for an inside look at the film's exciting journey and our creative processes.
                        </p>
                    </div>
                    <div className='form-container'>
                        <form onSubmit={handleSubmit}>
                            <input 
                                type="text" 
                                id="email" 
                                value={email} 
                                onChange={handleEmailChange} 
                                required 
                                placeholder='Email'
                            />
                            <button className='submit' type="submit">Enter</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}