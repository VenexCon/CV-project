import { useState, useRef, useEffect } from 'react'
import Modal from '../shared/Modal'


function EducationItem({ setEdElement, edElement, item }) {
  
  const [edState, setEdState] = useState(item)
  const [modal, setModal] = useState(false)
  

  const handleModal = () => {
    setModal(true)
  }
  /* Handle Change Funcs */
  const handleSubmit = (e) => {
    e.preventDefault()

    setEdElement(edElement.map(item => {
      if (item.id === edState.id) {
        return {...item,...edState}
      }
      return item
    }))
  }

  const handleDelete = (item) => {
    setEdElement(
      edElement.filter(object => object.id !== edState.id)
    )
  }

  const handleSchool = (e) => {
    setEdState({
      ...edState,
      school: e.target.value

    })
  }

  const handleDegree = (e) => {
    setEdState({
      ...edState,
      degree: e.target.value
    })
  } 
  
  const handleStart = (e) => {
    setEdState({
      ...edState,
      start: e.target.value
    })
  }

  const handleEnd = (e) => {
    setEdState({
      ...edState,
      end: e.target.value
    })
  } 
  
  const handleDescription = (e) => {
    setEdState({
      ...edState,
      description: e.target.value
    })
  } 
  
  return (
     <form className="w-2/3 mx-auto items-center card" onSubmit={handleSubmit}>
          <h3 className='mb-4'>Education Form</h3>
          {/* Create inputs */}

           <label className="input-group input-group-vertical w-full h-fit mb-2 flex flex-cols">
                    <span className='mb-1 border'>University or School</span>
        <input type="text" placeholder="School or University" className="input input-bordered flex-1 input-sm" value={edState.school}
        onChange={handleSchool} />
          </label>
          
          <label className="input-group input-group-vertical h-fit mb-2 flex flex-cols">
                    <span className='mb-1 border'>Degree or Subject Studied</span>
        <input type="text" placeholder="Degree Studied" className="input input-bordered flex-1 input-sm" defaultValue={item.degree}
        onChange={handleDegree} />
          </label>

          <div className="twofields w-full flex justify-between gap-4">

             <label className="input-group input-group-vertical w-full h-fit mb-2 flex flex-cols">
                    <span className='mb-1 border'>From</span>
          <input type="date" placeholder="Start Date" className="input input-bordered flex-1 input-sm"
          onChange={handleStart} defaultValue={item.start} />
            </label>

             <label className="input-group input-group-vertical h-fit mb-2 flex flex-cols">
                    <span className='mb-1 border'>To</span>
          <input type="date" placeholder="End Date" className="input input-bordered flex-1 input-sm" 
          onChange={handleEnd} defaultValue={item.end}/>
            </label>
            
          </div>

          <label className="input-group input-group-vertical h-fit mb-2 flex flex-cols">
                    <span className='mb-1 border'>Further Descriptions or Achievements</span>
        <textarea className='textarea border' placeholder='Describe your modules, achievements and success'
          onChange={handleDescription} defaultValue = {item.description}> 
        </textarea>           
      </label>
      <div className="twofields w-full flex justify-between gap-4">
      <button className=" mx-auto btn btn-primary type-submit btn-sm lg:w-1/4 sm:w-3/4" type='submit' onClick={()=> handleModal()}  >Confirm</button>
        <button className=" mx-auto btn btn-primary type-submit btn-sm lg:w-1/4 sm:w-3/4" onClick={handleDelete}>
          Delete</button>
      </div>
      {modal && <Modal />}
        </form>
  )
}

export default EducationItem