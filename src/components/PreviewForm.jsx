

function PreviewForm({person, edElement, workElement}) {
  return (
    <div>
      <h2>Title: {person.title}</h2>
      <h2>Name: {person.name}</h2>
      <h2>Email: {person.email}</h2>
      <h2>Phone: {person.phone}</h2>
      <h2>Email: {person.linkedin}</h2>
      <h2>Address: {person.address}</h2>
      <h2>Description: {person.description}</h2>

      {edElement.map(item => {
        return <p>{JSON.stringify(item)}</p>
      })}

       {workElement.map(item => {
        return <p>{JSON.stringify(item)}</p>
      })}
      
    </div>
  )
}

export default PreviewForm