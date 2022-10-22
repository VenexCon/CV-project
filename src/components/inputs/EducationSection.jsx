import { useState } from 'react';
import EducationItem from './EducationItem'
import { v4 as uuidv4 } from 'uuid';
function EducationSection() {

    /* @todo - Create function that appends a list item on click  */
    /* Assign an id using UUID */
    /* Delete using .filter or .map */
    /* Using state, create a state array, that holds a passed object onSubmit, for the education & work experience sections.  */

  /* Place in App.js once completed */
  const [edElement, setEdElement] = useState([])
 
  //passes a new object down to the children
 

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
    console.log(edElement)
  }

  return (
      <div className="w-full mt-4 mb-4 text-center card ">
        <h2 className="font-bold text-2xl">Education Section</h2>
      {/* List items here */}
      
        {edElement.map(item => {
           return <EducationItem item={item} key= {uuidv4()} edElement={edElement} setEdElement={setEdElement} />
      })}
      
      
      <button className="mt-5 mx-auto w-3/4 btn btn-primary type-submit btn-sm lg:w-1/4 sm:w-3/4" onClick={appendNewSection}>Add Another</button>
      
    </div>
    
  )
}

export default EducationSection