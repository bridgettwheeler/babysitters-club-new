import {useState} from 'react'
import { useNavigate } from "react-router-dom";


function Profile({user, booking}) {


  const navigate = useNavigate();
  const [email, setEmail] = useState({
    email: "",
  
  })
  const handleClick = () => {
    fetch(`api/users/${user.id}`, {
        method: "DELETE",
    }) 
    .then( () => navigate("/profile"))
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`/api/users/${user.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(email)
    })
      .then(resp => {
        if (resp.ok){
          resp.json().then(()=> alert('email updated'))

        } else {
          resp.json().then((error)=> alert(error))
        }
        
      })
  }

  return (
    <div>
        <h2>Your Account Details:</h2>
        Welcome, {user.username} !
        

         <form name='account'>
        <label htmlFor="date">Email</label>
        <input
        onChange={ e => setEmail({...email, [e.target.name]: e.target.value})}
        name="email"
        type="text"
        id="email"
        />
        <button type="submit" onClick={handleSubmit}>Update email</button>
      </form>

      <button onClick={handleClick}>Delete Account</button> 
         <p>Please note, selecting to delete your account will also delete all associated reading appointments.</p>

    </div>
    
   
)
}

export default Profile;