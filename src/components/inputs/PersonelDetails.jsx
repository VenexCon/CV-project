/* imports */


function PersonelDetails({setPerson, person}) {


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(person)
  }

   const handleInputChange = (e) => {
    const { name, value } = e.target
    setPerson({
      ...person, 
      [name]:value,
    })

  }


  return (
      <form className="w-full mb-4" onSubmit={handleSubmit}>
        <div className="items-center card">   
              <h3 className="card-title text-1xl">Personal Details</h3>
              
              <div className="form-control gap-3  w-2/3">
                  
                <label className="input-group">
                      <span>Title</span>
                      <select className="select select-bordered max-w-xs select-sm" name={'title'} onChange={handleInputChange} value ={person.title}>
                        <option disabled value={'Select Title'} >Select Title</option>
                          <option>Mr</option>
                          <option>Mrs</option>
                          <option>Ms</option>
                          <option>Miss</option>
                          <option>Dr</option>
                          <option>Lord</option>
                        </select> 
                </label>
                <label className="input-group">
                    <span>Name</span>
            <input type="text" placeholder="Your Name Here" className="input input-bordered flex-1 input-sm"
              onChange={handleInputChange} value = {person.name} name={'name'}/>
                  </label>
                  <label className="input-group">
                    <span>Email</span>
            <input type="text" placeholder="@outlook.com" className="input input-bordered flex-1 input-sm"
              onChange={handleInputChange} value = {person.email} name={'email'} pattern = "/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;" />
          </label>
          <label className="input-group">
                    <span>Address</span>
            <input type="text" placeholder="1 best drive, LL12 3fx" className="input input-bordered flex-1 input-sm"
              onChange={handleInputChange} value = {person.address} name={'address'} />
                  </label>
                  <label className="input-group">
                    <span>Phone</span>
            <input type="num" placeholder="+44077123456" className="input input-bordered flex-1 input-sm"
              onChange={handleInputChange} value = {person.phone} name={'phone'} />
                  </label>
                  <label className="input-group">
                    <span>linkedIn</span>
            <input type="text" placeholder="Your LinkedIn" className="input input-bordered flex-1 input-sm"
             onChange={handleInputChange}value = {person.linkedin} name={'linkedin'} />
          </label>

          <label className="input-group input-group-vertical h-fit mb-2 flex flex-cols">
        <span className='mb-1 border'>Describe Yourself</span>
        <textarea className='textarea border' placeholder='I am a...'
          onChange={handleInputChange} defaultValue={person.description} name= "description" >
        </textarea>
      </label>
          
        </div>
      </div>
    </form>
  )
}

export default PersonelDetails