import { useState, useRef, useEffect} from 'react'



function EducationItem({ setEdElement, edElement, item }) {

  const [edState, setEdState] = useState(item)
  const buttonRef = useRef()

  /* Handle Change Funcs */
  const handleSubmit = (e) => {
    e.preventDefault()

    setEdElement(edElement.map(item => {
      if (item.id === edState.id) {
        return { ...item, ...edState }
      }
      return item
    }))
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setEdState({
      ...edState, 
      [name]:value,
    })

  }

  const handleDelete = () => {
    window.confirm("Are you sure?") ? setEdElement(edElement.filter(object => object.id !== edState.id)) : setEdElement(edElement)
  }

  const handleConfirm = () => {
    return alert("Education Experience Confirmed")
  }

  return (
    <form className="w-2/3 mx-auto items-center card mt-4" onSubmit={handleSubmit}>
      <h3 className='mb-4 font-bold'>Education Form</h3>
      {/* Create inputs */}

      <label className="input-group input-group-vertical w-full h-fit mb-2 flex flex-cols">
        <span className='mb-1 border'>University or School</span>
        <input type="text" placeholder="School or University" className="input input-bordered flex-1 input-sm" value={edState.school}
          onChange={handleInputChange} name= "school" />
      </label>

      <label className="input-group input-group-vertical h-fit mb-2 flex flex-cols">
        <span className='mb-1 border'>Degree or Subject Studied</span>
        <input type="text" placeholder="Degree Studied" className="input input-bordered flex-1 input-sm" defaultValue={item.degree}
          onChange={handleInputChange} name= "degree"  />
      </label>

      <div className="twofields w-full flex justify-between gap-4">

        <label className="input-group input-group-vertical w-full h-fit mb-2 flex flex-cols">
          <span className='mb-1 border'>From</span>
          <input type="date" placeholder="Start Date" className="input input-bordered flex-1 input-sm"
            onChange={handleInputChange} defaultValue={item.start} name= "start"  />
        </label>

        <label className="input-group input-group-vertical h-fit mb-2 flex flex-cols">
          <span className='mb-1 border'>To</span>
          <input type="date" placeholder="End Date" className="input input-bordered flex-1 input-sm"
            onChange={handleInputChange} defaultValue={item.end} name= "end"  />
        </label>

      </div>

      <label className="input-group input-group-vertical h-fit mb-2 flex flex-cols">
        <span className='mb-1 border'>Further Descriptions or Achievements</span>
        <textarea className='textarea border' placeholder='Describe your modules, achievements and success'
          onChange={handleInputChange} defaultValue={item.description} name= "description" >
        </textarea>
      </label>
      <div className="twofields w-full flex justify-between gap-4">
        <button className=" flex-none mx-auto btn btn-primary type-submit btn-sm md:w-1/2 lg:w-1/4 sm:w-3/4" type='submit' ref={buttonRef} onClick={handleConfirm}>Confirm</button>
        <button className=" flex-none mx-auto btn btn-primary type-submit btn-sm md:w-1/2 lg:w-1/4 sm:w-3/4" onClick={handleDelete}>
          Delete</button>
      </div>
      
    </form>
  )
}

export default EducationItem