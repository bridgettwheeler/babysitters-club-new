import { useState, useEffect, useHistory } from "react";
import { useNavigate, useParams } from "react-router-dom";
//https://v5.reactrouter.com/web/api/Hooks
//https://reactgo.com/npm-install-specific-directory/

const NewBookingForm = ({user, babysitter}) => {
  const {id} = useParams();
  const [sitter, setSitter] = useState({

  });

  const [booking, setBooking] = useState({
    date: "",
    id:id
  });

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  
  function handleChange(e) {
    setBooking({
      ...booking,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch(`/api/babysitters/booking`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({booking})
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        // r.json().then(booking => setUser(currentUser => {...currentUser, bookings: [...user.bookings, booking]})
        return r.json();
      } else {
        r.json().then((err) => console.log(err.errors));
      }
    }).then((responseJson) => {
        console.log(responseJson);        
        navigate("/profile");
  });
  }
  return (
    <div>
      <h1>Book this babysitter</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Select date and time</label>
        <input
        onChange={handleChange}
        name="date"
        type="datetime-local"
        id="date"
        value={booking.date}
        />
        <input
        onChange={handleChange}
        name="date"
        type="hidden"
        id="booking_id"
        value={booking.id}
        />
        <button type="submit">{isLoading ? "Loading..." : "Book"}</button>
      </form>
    </div>
  );
}

export default NewBookingForm;