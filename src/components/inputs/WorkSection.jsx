import { v4 as uuidv4 } from 'uuid';
import WorkItem from './WorkItem';


function WorkSection({ workElement, setWorkElement }) {
    

const appendNewSection = () => {
    let key = uuidv4()
    let workObject = {
        id: key, 
        position: '', 
        company: '', 
        city: '', 
        start: '',
        end: '',
        description:''
  }
    
    setWorkElement([...workElement, workObject])
  }

   return (
      <div className="w-full mt-4 mb-4 text-center card ">
        <h2 className="font-bold text-2xl">Work Section</h2>
      {/* List items here */}
      
          {workElement.map(item => {
           return <WorkItem item={item} key= {uuidv4()} workElement={workElement} setWorkElement={setWorkElement}  />
      })}
        
      
      
      <button className="mt-5 mx-auto w-3/4 btn btn-primary type-submit btn-sm lg:w-1/4 sm:w-3/4"
        onClick={appendNewSection}>Add Work </button>
      
    </div>
    
  )
}

export default WorkSection