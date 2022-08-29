import BabysittersList from "../components/BabysittersList";
import { useEffect, useState, createContext } from "react";

const BabySitterContext = createContext();

// return (
//     <BabySitterContext.Provider value={user}>
//       <h1>{`Hello ${user}!`}</h1>
//       <Component2 />
//     </BabySitterContext.Provider>
//   );

const BabysittersContainer = ({user}) => {
    const [babysitters, setBabysitters] = useState([])

    useEffect(() => {   
            fetch("/api/babysitters")
            .then(resp => resp.json())
            .then(data => {
                setBabysitters(data)
              })
      }, []);

//   return (
//     <div>
//         <BabysittersList user={user} babysitters={babysitters} />
//     </div>
//   )

  return (
    <BabySitterContext.Provider value={user}>
      <div>
        <BabysittersList user={user} babysitters={babysitters} />
    </div>
    </BabySitterContext.Provider>
  );
}


export default BabysittersContainer;