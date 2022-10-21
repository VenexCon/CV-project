import EducationDetails from "./inputs/EducationDetails"
import PersonelDetails from "./inputs/PersonelDetails"


function CvForm({setPerson, person}) {

    
    /* Pass in title as a state variable fromm App */
    


  return (
    <>
        <div className="border card items-center mt-4 w-3/4 mx-auto ">
            <h2 className="card-title text-2xl">Edit Page</h2>
        <PersonelDetails person={person} setPerson={setPerson} />
        <EducationDetails person = {person} setPerson = {setPerson} />
              
        </div>
    </>
    
    
  )
}

export default CvForm