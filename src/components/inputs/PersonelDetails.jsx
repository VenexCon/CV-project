

function PersonelDetails() {

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target)
    e.reset()
  }

  return (
      <form className="w-full mb-4" onSubmit={handleSubmit}>
        <div className="w-full items-center card">   
              <h3 className="card-title text-1xl">Personal Details</h3>
              
              <div className="form-control gap-3  w-2/3">
                  
                <label className="input-group">
                      <span>Title</span>
                      <select className="select select-bordered max-w-xs select-sm ">
                        <option disabled defaultValue={""}>Select Title</option>
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
                    <input type="text" placeholder="Your Name Here" className="input input-bordered flex-1 input-sm" />
                  </label>
                  <label className="input-group">
                    <span>Email</span>
                    <input type="text" placeholder="@outlook.com" className="input input-bordered flex-1 input-sm" />
                  </label>
                  <label className="input-group">
                    <span>Phone</span>
                    <input type="tel" placeholder="+44077123456" className="input input-bordered flex-1 input-sm" />
                  </label>
                  <label className="input-group">
                    <span>linkedIn</span>
                    <input type="text" placeholder="Your LinkedIn" className="input input-bordered flex-1 input-sm" />
          </label>
          <button type="submit" className="btn btn-primary type-submit btn-sm">confirm</button>
        </div>
      </div>
    </form>
  )
}

export default PersonelDetails