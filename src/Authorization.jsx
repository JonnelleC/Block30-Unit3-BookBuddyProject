import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Authorization = () => {
    const [emailInput, setEmailInput] = useState("");
    const [firstNameInput, setFirstNameInput] = useState("");
    const [lastNameInput, setLastNameInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [showLogin, setShowLogin] = useState(true);

    const navigate = useNavigate();

    const registerNewUser = async () => {
        const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/register', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                firstName: firstNameInput,
                lastName: lastNameInput,
                email: emailInput,
                password: passwordInput,
            })
        });
        const json = await response.json();
        console.log(json);
        setFirstNameInput("");
        setLastNameInput("");
        setEmailInput("");
        setPasswordInput("");
    };

    const memberLogIn = async () => {
        const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: emailInput,
                password: passwordInput,
            })
        });

        const json = await response.json();
        console.log(json.access_token);

        navigate('/books');
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (showLogin) {
            memberLogIn();
        } else {
            registerNewUser();
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {!showLogin && (
                    <>
                        <input value={firstNameInput} onChange={(event) => { setFirstNameInput(event.target.value) }} placeholder="First Name" required />
                        <input value={lastNameInput} onChange={(event) => { setLastNameInput(event.target.value) }} placeholder="Last Name" required />
                    </>
                )}
                <input value={emailInput} onChange={(event) => { setEmailInput(event.target.value) }} placeholder="Email" required />
                <input type="password" value={passwordInput} onChange={(event) => { setPasswordInput(event.target.value) }} placeholder="Password" required />
                <button type="submit">{showLogin ? 'Log In' : 'Register'}</button>
            </form>
            <div>
                {showLogin ? (
                    <p>Not a member? <button onClick={() => setShowLogin(false)}>Register here</button></p>
                ) : (
                    <p>Already a member? <button onClick={() => setShowLogin(true)}>Log in here</button></p>
                )}
            </div>
        </div>
    );
};

export default Authorization;