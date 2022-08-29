import React from 'react'

function Profile({user, setUser, booking}) {
  return (
    <div>
        <h2>Your Bookings:</h2>
        {user.bookings.map(booking => <BookingC key={appointment.id} user={user} appointment={appointment} handleClick={handleClick}/>)}
          <h2>Your books </h2>
          {user.books.map(book => <BookCard key={book.id} user={user} book={book}/>)}
         <button onClick={handleClick}>Delete Account</button> 
         <p>Please note, selecting to delete your account will also delete all associated reading appointments.</p>
    </div>
   
)
}

export default Profile;