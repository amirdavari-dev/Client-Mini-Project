import { useState } from "react"
import Card from "./components/card"
import useFetch from "./hook/useFetch"
import Pagination from "./components/pagination"

const url = "https://react-mini-projects-api.classbon.com/programmer/sieve"
const pageSize = 2
const App = () => {

  const [page, setPage] = useState(1)
  const [loading, programmers] = useFetch(url, { page, pageSize })



  return (
    <div className="container p-3">
      {
        loading && (
          <div className="d-flex justify-content-center">
            <div className="spinner-border text-success"></div>
          </div>
        )
      }
      {!loading && (
        <>
          <div className="row g-3 d-flex justify-content-center align-items-center">
            {
              programmers.data.map(({ id, ...programer }) => {
                return (
                  <div className="col-4" key={id} >
                    <Card {...programer} />
                  </div>

                )
              })
            }
          </div>
          <div className="row">
            <Pagination pages={Math.ceil(programmers.totalRecords / pageSize)} setPage={setPage} activePage={page} />
          </div>
        </>
      )}
    </div>
  )
}

export default App
