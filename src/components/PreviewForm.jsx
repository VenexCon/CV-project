

function PreviewForm({person}) {
  return (
    <div>
      <h2>Title: {person.title}</h2>
      <h2>Name: {person.name}</h2>
      <h2>Email: {person.email}</h2>
      <h2>Phone: {person.phone}</h2>
      <h2>Email: {person.linkedin}</h2>
    </div>
  )
}

export default PreviewForm