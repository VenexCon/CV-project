import EducationSection from "./inputs/EducationSection"
import PersonelDetails from "./inputs/PersonelDetails"
import WorkSection from './inputs/WorkSection'

function CvForm({setPerson, person, edElement, setEdElement, workElement, setWorkElement}) {

    
    /* Pass in title as a state variable fromm App */
    


  return (
    <>
        <div className="border card items-center mt-4 w-3/4 mx-auto ">
            <h2 className="card-title text-2xl">Edit Page</h2>
        <PersonelDetails person={person} setPerson={setPerson} />
        <EducationSection person = {person} setPerson = {setPerson} edElement = {edElement} setEdElement = {setEdElement} />
        <WorkSection workElement = {workElement} setWorkElement = {setWorkElement}  />      
        </div>
    </>
    
    
  )
}

export default CvForm