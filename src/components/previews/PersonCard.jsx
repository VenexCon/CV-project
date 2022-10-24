
import { FaMapMarkerAlt, FaPhoneAlt, FaLinkedin } from "react-icons/fa";
import {AiOutlineMail} from 'react-icons/ai'


function PersonCard({person}) {
  


  return (
    <>
      {/* Title & Person Details */}
    <div className="header p-2 flex-col justify-between  w-2/3 mx-auto mt-4 md:w-2/3 lg:w-1/2 xl:w-1/2">
        <div className="titleContainer flex justify-between flex-none w-full flex-col md:flex-row md:w-2/3">
          <div className="div grow flex-none w-full">
            <h1 className='title text-4xl text-slate-600 font-bold'>{person.title} {person.name}</h1>
            </div>
        
          {/* Specifics */}
          <div className="div flex flex-col gap-1 flex-0 w-full justify-start mt-2 mb-2 ">

              <div className="flex  items-center gap-2 grow ">
                <FaPhoneAlt />
                <p>{person.phone}</p>
              </div>
              <div className="flex   items-center gap-2 grow">
                <AiOutlineMail />
                <p>{person.email}</p>
              </div>
              <div className="flex   items-center gap-2 grow">
                <FaMapMarkerAlt />
                <p>{person.address}</p>
              </div>
              <div className="flex   items-center gap-2 grow">
                <FaLinkedin />
                <p>{person.linkedin}</p>
              </div>

          </div>
          <hr className='w-3/4 mx-auto mt-2 mb-2 bg-slate-500 h-1'></hr>

          </div>
        <div className="person-description mt-4 flex flex-col items-center w-full ">
          <h2 className="mb-4 text-2xl text-slate-600">Personal Statement</h2>
          <p>{person.description}</p>
        </div>    

    </div>



    </>
  )
}

export default PersonCard