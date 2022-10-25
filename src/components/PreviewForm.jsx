import PersonCard from "./previews/PersonCard"
import EducationCard from "./previews/EducationCard"
import WorkCard from "./previews/WorkCard"

function PreviewForm({person, edElement, workElement}) {
  return (
    <>
      
      <PersonCard person={person} />
      


      <div className="w-2/3 flex-col mx-auto flex mt-4 justify-center ">
        <h3 className="mb-4 text-2xl text-slate-600">Education</h3>

      {edElement.map(item => {
        return <EducationCard item= {item} />
      })}
        
      </div> 
      
      <div className="w-2/3 flex-col mx-auto flex mt-4 justify-center">
      <h3 className="mb-4 text-2xl text-slate-600">Work Experience</h3>
       {workElement.map(item => {
        return <WorkCard item = {item} />
       })}
      </div>
      
  </>  
  )
}

export default PreviewForm