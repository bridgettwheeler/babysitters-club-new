import { NavLink } from "react-router-dom"

function NavBar({ user, setUser }) {
  function handleLogoutClick() {
    fetch("/api/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
      <div>
      <NavLink activeStyle={{
                fontWeight: "bolder",
                color: "white"
            }}
                exact
                style={style}
                to="/"
            >Babysitters</NavLink>

      <NavLink activeStyle={{
                fontWeight: "bolder",
                color: "white"
            }}
                exact
                style={style}
                to="/profile"
            >Profile</NavLink>
        <button variant="outline" onClick={handleLogoutClick}>Logout</button> 
        </div>
        
  );
}




export default NavBar;