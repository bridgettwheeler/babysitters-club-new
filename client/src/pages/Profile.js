import {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";


function Profile({user, setUser}) {
  
  useEffect(() => {
    // auto-login
    fetch("/api/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, [setUser]);
  
  const navigate = useNavigate();


  const [email, setEmail] = useState({
    email: "",
  
  })
  
  const handleClick = () => {
    fetch(`api/users/${user.id}`, {
        method: "DELETE",
    }) 
    .then( resp => {
      if (resp.ok){
        setUser(null)
      }
    })

    //needs to log user out and route to login
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
          return resp.json()

        } else {
          resp.json().then((error)=> alert(error))
        }
        
      }).then(function(data){alert("Email changed to: " + data.email)})
  }
  const listItems = user.babysitters.map((b) => <li>{b.first_name}</li>)
  const listTimes = user.bookings.map((booking) => <li>{booking.date}</li>)

  console.log(user)

  return (
    <div>
        <h2>Your Account Details:</h2>
        Welcome, {user.username} !
        
        <div>
          <p>Here are the kids associated with this account:</p>
          
        </div>
        {user.kids.map((kid) => kid.first_name)} 


        <p>Here are the babysitters associated for this user:</p>
        {/* <ul>
        {user.bookings.map(babysitter => <BabysitterCard key={babysitter.babysitter_id} babysitter={babysitter} user={user} />)}
        </ul> */}
        {/* {[... new Set(user.babysitters.map((b) => b.first_name))]} */}
        <ul>
          {listItems}
        </ul>

        <p>
          These are the times of the bookings for this user: 
        </p>
        <ul>
            {listTimes}
          </ul>
        
         <form name='account'>
        <label htmlFor="date">Email: </label>
        <input
        onChange={ e => setEmail({...email, [e.target.name]: e.target.value})}
        name="email"
        type="text"
        id="email"
        />
        <button type="submit" onClick={handleSubmit} placeholder={user.email}>Update email</button>
        <p>Your current email is {user.email}. Enter a new email address to update it.</p>

      </form>

      <button onClick={handleClick}>Delete Account</button> 
         <p>Please note, selecting to delete your account will also delete all associated reading appointments.</p>

    </div>
    
   
)
}

export default Profile;