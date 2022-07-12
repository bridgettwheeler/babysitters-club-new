import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewBookingForm = ({user}) => {
  const [booking, setBooking] = useState({
    date: "",
  })

  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/api/bookings/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({booking})
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        // r.json().then(booking => setUser(currentUser => {...currentUser, bookings: [...user.bookings, booking]}) 
        navigate("/profile");
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }
  return (
    <div>
      <h1>Book this babysitter</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Select date and time</label>
        <input
        onChange={ e => setBooking({...booking, [e.target.name]: e.target.value})}
        name="date"
        type="datetime-local"
        id="date"
        value={booking.date}
        />
        <button type="submit">{isLoading ? "Loading..." : "Book this sitter"}</button>
      </form>
    </div>
  );
}

export default NewBookingForm;