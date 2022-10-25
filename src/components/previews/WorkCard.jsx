import React from 'react'

function WorkCard({item}) {
  return (
      <>
          <div className="flex justify-between w-full">
              <div className="">
                  <h6 className="text-gray-600 italic font-sans text-md font-bold">{item.position}</h6>
                  <h6 className="text-gray-600 italic font-sans text-md">{item.company}</h6>
              </div>
              <div className="">
                  <p className="italic font-sans text-md">{item.start} - {item.end}</p>
              </div>
          </div>
          <div className="description mt-2 mb-2 italic text-gray-600">
              <p>{item.description}</p>
          </div>
          <hr></hr>
      </>
  )
}


export default WorkCard