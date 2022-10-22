/* imports */


function PersonelDetails({setPerson, person}) {


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(person)
  }

  const handleTitle = (e) => {
    setPerson({ ...person, title:e.target.value })
  }

  const handleName = (e) => {
    setPerson({...person, name: e.target.value})
  }
  
  const handleEmail = (e) => {
    setPerson({...person, email: e.target.value})
  }

  const handlePhone = (e) => {
    setPerson({ ...person, phone: parseInt(e.target.value) })
    console.log(typeof person.phone)
  }

  const handleLinkedin = (e) => {
    setPerson({...person, linkedin:e.target.value})
  }

  return (
      <form className="w-full mb-4" onSubmit={handleSubmit}>
        <div className="items-center card">   
              <h3 className="card-title text-1xl">Personal Details</h3>
              
              <div className="form-control gap-3  w-2/3">
                  
                <label className="input-group">
                      <span>Title</span>
                      <select className="select select-bordered max-w-xs select-sm" onChange={handleTitle} value ={person.title}>
                        <option disabled Value={'Select Title'}>Select Title</option>
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
              onChange={handleName} value = {person.name} />
                  </label>
                  <label className="input-group">
                    <span>Email</span>
            <input type="text" placeholder="@outlook.com" className="input input-bordered flex-1 input-sm"
              onChange={handleEmail} value = {person.email} />
                  </label>
                  <label className="input-group">
                    <span>Phone</span>
            <input type="num" placeholder="+44077123456" className="input input-bordered flex-1 input-sm"
              onChange={handlePhone} value = {person.phone} />
                  </label>
                  <label className="input-group">
                    <span>linkedIn</span>
            <input type="text" placeholder="Your LinkedIn" className="input input-bordered flex-1 input-sm"
              onChange={handleLinkedin} value = {person.linkedin} />
          </label>
          <button type="submit" className=" w-1/2 btn btn-primary type-submit btn-sm lg:w-1/4 sm:w-full">confirm</button>
        </div>
      </div>
    </form>
  )
}

export default PersonelDetails