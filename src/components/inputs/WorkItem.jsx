import {useState, useRef} from 'react'

function WorkItem({workElement, setWorkElement, item}) {

const [workState, setWorkState] = useState(item)
  const buttonRef = useRef()

  /* Handle Change Funcs */
  const handleSubmit = (e) => {
    e.preventDefault()

    setWorkElement(workElement.map(item => {
      if (item.id === workState.id) {
        return { ...item, ...workState }
      }
      return item
    }))
  }

  const handleInputChange = (e) => {
      const { name, value } = e.target
    setWorkState({
      ...workState, 
      [name]:value,
    })

    }
    
    const handleDelete = () => {
        window.confirm("Are you sure?") ? setWorkElement(workElement.filter(object => object.id !== workState.id)):setWorkElement(workElement)
  }

  const handleConfirm = () => {
    return alert("Work Experience Confirmed")
  }




  return (
      <form className="w-2/3 mx-auto items-center card" onSubmit={handleSubmit}>
      <h3 className='mb-4'>Work Form</h3>
      {/* Create inputs */}

      <label className="input-group input-group-vertical w-full h-fit mb-2 flex flex-cols">
        <span className='mb-1 border'>Position</span>
        <input type="text" placeholder="Company Position" className="input input-bordered flex-1 input-sm" defaultValue={workState.position}
          onChange={handleInputChange} name= "position" />
      </label>

      <label className="input-group input-group-vertical h-fit mb-2 flex flex-cols">
        <span className='mb-1 border'>Company Name</span>
        <input type="text" placeholder="Company Name" className="input input-bordered flex-1 input-sm" defaultValue={workState.company}
          onChange={handleInputChange} name= "company"  />
      </label>

      <div className="twofields w-full flex justify-between gap-4">

        <label className="input-group input-group-vertical w-full h-fit mb-2 flex flex-cols">
          <span className='mb-1 border'>From</span>
          <input type="date" placeholder="Start Date" className="input input-bordered flex-1 input-sm"
            onChange={handleInputChange} defaultValue={workState.start} name= "start"  />
        </label>

        <label className="input-group input-group-vertical h-fit mb-2 flex flex-cols">
          <span className='mb-1 border'>To</span>
          <input type="date" placeholder="End Date" className="input input-bordered flex-1 input-sm"
            onChange={handleInputChange} defaultValue={workState.end} name= "end"  />
        </label>

      </div>

      <label className="input-group input-group-vertical h-fit mb-2 flex flex-cols">
        <span className='mb-1 border'>Further Descriptions or Achievements</span>
        <textarea className='textarea border' placeholder='Describe your role, Achievements and Responsibilities'
          onChange={handleInputChange} defaultValue={item.description} name= "description" >
        </textarea>
          </label>
          
      <div className="twofields w-full flex justify-between gap-4">
        <button className=" mx-auto btn btn-primary type-submit btn-sm lg:w-1/4 sm:w-3/4" type='submit' ref={buttonRef} onClick={handleConfirm}>Confirm</button>
        <button className=" mx-auto btn btn-primary type-submit btn-sm lg:w-1/4 sm:w-3/4" onClick={handleDelete}>
          Delete</button>
      </div>
      
    </form>
  )
}

export default WorkItem