
import EducationItem from './EducationItem'
import { v4 as uuidv4 } from 'uuid';
function EducationSection({edElement, setEdElement}) {

  //passes a new object down to the children as prop
  //@todo - Update with address & Intro Description & Verification

  const appendNewSection = () => {
    let key = uuidv4()
    let edObject = {
    id:key,
    school: '',
    degree: '',
    start: '',
    end: '',
    description:''
  }
    
    setEdElement([...edElement, edObject])
  }

  return (
      <div className="w-full mt-4 mb-4 text-center card ">
        <h2 className="font-bold text-2xl underline">Education Section</h2>
      {/* List items here */}
      
        {edElement.map(item => {
           return <EducationItem item={item} key= {uuidv4()} edElement={edElement} setEdElement={setEdElement} />
      })}
      
      
      <button className="mt-5 mx-auto w-3/4 btn btn-primary type-submit btn-sm lg:w-1/4 sm:w-3/4 underline"
        onClick={appendNewSection}>Add Education</button>
      
    </div>
    
  )
}

export default EducationSection