import {useState} from 'react' ;
import {useNavigate} from 'react-router-dom';

const Authorization = () => {
    const [emailInput, setEmailInput] = useState("");
    const [firstNameInput, setFirstNameInput] = useState("");
    const [lastNameInput, setLastNameInput]  = useState("");
    const [passwordInput, setPasswordInput]  = useState("");
 

 const navigate = useNavigate();

const registerNewUser = async () => {
    const response = await fetch ('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/register',{
    method: 'Post',
    headers:{
        "Content-Type": "application/json"
    },
        body: JSON.stringify(
            {

                firstName: firstNameInput,
                lastName: lastNameInput,
                email: emailInput
                password: passwordInput
            })
        });
        const json = await response.json();
        setFirstNameInput("");
        setLastNameInput("");
        setEmailInput("")
        setPasswordInput("");
}

const memberLogIn = async () => {
 const response = await fetch ('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/login',{
    method: 'Post',
    headers:{
        "Content-Type": "application/json"},
        body: JSON.stringify({
            email: emailInput,
            password: passwordInput,
        })
 } );

 const json = await response.json();
 console.log(json.access_token);

navigate('/books')
}

    return (

    )
}

export default Authorization