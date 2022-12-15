import React, { useEffect, useState } from 'react'
import axios from "axios"
import Pagination from '../../common/Pagination'
import Pagination1 from '../../common/Pagination1'




const Home = () => {

  const [data, setData] = useState([])
  // User is currently on this page
  const [currentPage, setCurrentPage] = useState(1);
  // No of Records to be displayed on each page   
  const [recordsPerPage] = useState(10);

  useEffect(() => {
    getData()
  }, [])
  const getData = async () => {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/users')
      setData(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  // Records to be displayed on the current page
  const currentRecords = data.slice(indexOfFirstRecord,
    indexOfLastRecord);
  const nPages = Math.ceil(data.length / recordsPerPage)





  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item active" aria-current="page">Home</li>
        </ol>
      </nav>
      <div className="component">
        {/* {
          currentRecords && currentRecords.map((item, key) => <p key={key} className='ml-5'>{item.title}</p>
          )
        } */}
        {/* <Pagination
          nPages={nPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        /> */}

        <Pagination1 data ={data} />
      </div>
    </>

  )
}

export default Home