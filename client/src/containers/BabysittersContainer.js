import BabysittersList from "../components/BabysittersList";
import { useEffect, useState } from "react";



const BabysittersContainer = ({user}) => {
    const [babysitters, setBabysitters] = useState([])

    useEffect(() => {   
            fetch("/api/babysitters")
            .then(resp => resp.json())
            .then(data => {
                setBabysitters(data)
              })
      }, []);

  return (
    <div>
        <BabysittersList user={user} babysitters={babysitters} />
    </div>
  )
}


export default BabysittersContainer;