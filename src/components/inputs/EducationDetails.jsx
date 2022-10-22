import { useState } from 'react';

function EducationDetails() {

    /* @todo - Create function that appends a list item on click  */
    /* Assign an id using UUID */
    /* Delete using .filter or .map */
    /* Using state, create a state array, that holds a passed object onSubmit, for the education & work experience sections.  */

  const [edForm, setEdForm] = useState(true)
  
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  
  
  return (
      <div className="w-full mt-4 mb-4 text-center card ">
        <h2 className="font-bold text-2xl">Education Section</h2>
      {/* List items here */}


      {/* Add Education form & Verifications, accessibility*/}
      {edForm && 
         <form className="w-2/3 mx-auto items-center card" onSubmit = {handleSubmit}>
          <h3>Ed Form</h3>
          {/* Create inputs */}

           <label className="input-group input-group-vertical w-full h-fit mb-2 flex flex-cols">
                    <span className='mb-1 border'>University or School</span>
            <input type="text" placeholder="School or University" className="input input-bordered flex-1 input-sm"/>
          </label>
          
          <label className="input-group input-group-vertical h-fit mb-2 flex flex-cols">
                    <span className='mb-1 border'>Degree or Subject Studied</span>
            <input type="text" placeholder="Degree Studied" className="input input-bordered flex-1 input-sm"/>
          </label>

          <div className="twofields w-full flex justify-between gap-4">

             <label className="input-group input-group-vertical w-full h-fit mb-2 flex flex-cols">
                    <span className='mb-1 border'>From</span>
            <input type="date" placeholder="Start Date" className="input input-bordered flex-1 input-sm"/>
            </label>

             <label className="input-group input-group-vertical h-fit mb-2 flex flex-cols">
                    <span className='mb-1 border'>To</span>
            <input type="date" placeholder="End Date" className="input input-bordered flex-1 input-sm"/>
            </label>
            
          </div>

          <label className="input-group input-group-vertical h-fit mb-2 flex flex-cols">
                    <span className='mb-1 border'>Further Descriptions or Achievements</span>
            <textarea className='textarea border'placeholder='Describe your modules, achievements and success'></textarea>           
            </label>
          <button type="submit" className=" w-3/4 btn btn-primary type-submit btn-sm lg:w-1/4 sm:w-3/4">Add Education</button>
          </form>}
    </div>
  )
}

export default EducationDetails