

function Navbar({changePage}) {

  return (
    <>
    <div className="btn-group w-full flex flex-row justify-center">
        <button className="btn btn-active" onClick ={() => changePage(true)}>Edit</button>
        <button className="btn" onClick={() => changePage(false)}>Preview</button>
        
    </div>
    </>
  )
}

export default Navbar