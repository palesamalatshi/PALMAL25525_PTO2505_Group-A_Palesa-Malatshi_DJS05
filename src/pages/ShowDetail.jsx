import { useParams } from "react-router-dom"

function ShowDetail() {

  const { id } = useParams()

  return (
    <div>
      <h1>Show Detail Page</h1>
      <p>Show ID: {id}</p>
    </div>
  )
}

export default ShowDetail