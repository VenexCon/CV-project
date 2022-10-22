import EducationSection from "./inputs/EducationSection"
import PersonelDetails from "./inputs/PersonelDetails"


function CvForm({setPerson, person, edElement, setEdElement}) {

    
    /* Pass in title as a state variable fromm App */
    


  return (
    <>
        <div className="border card items-center mt-4 w-3/4 mx-auto ">
            <h2 className="card-title text-2xl">Edit Page</h2>
        <PersonelDetails person={person} setPerson={setPerson} />
        <EducationSection person = {person} setPerson = {setPerson} edElement = {edElement} setEdElement = {setEdElement} />
              
        </div>
    </>
    
    
  )
}

export default CvForm