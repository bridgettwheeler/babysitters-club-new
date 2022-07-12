import BabysittersContainer from "../containers/BabysittersContainer";

function Babysitters({user, babysitters}) {
  return (
    <div>
        <h1>Browse our Babysitters</h1>
            <BabysittersContainer user={user} babysitters={babysitters}/>
    </div>
  )
}

export default Babysitters;