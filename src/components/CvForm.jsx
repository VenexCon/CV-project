
import PersonelDetails from "./inputs/PersonelDetails"


function CvForm({setPerson, person}) {

    
    /* Pass in title as a state variable fromm App */
    


  return (
    <>
        <div className="border card items-center mt-4 ">
            <h2 className="card-title text-2xl">Edit</h2>
        <PersonelDetails person={person} setPerson={setPerson} />
              
        </div>
    </>
    
    
  )
}

export default CvForm