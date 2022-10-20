import {useState} from 'react'

import PersonelDetails from "./inputs/PersonelDetails"


function CvForm() {

    
    /* Pass in title as a state variable fromm App */

  return (
    <>
        <div className="border card items-center mt-4 ">
            <h2 className="card-title text-2xl">Edit</h2>
            <PersonelDetails />
        </div>
    </>
    
    
  )
}

export default CvForm