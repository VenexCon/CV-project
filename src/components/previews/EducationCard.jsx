import { FaMapMarkerAlt, FaPhoneAlt, FaLinkedin } from "react-icons/fa";
import {AiOutlineMail} from 'react-icons/ai'

function EducationCard({item}) {

  return (
      <>
          <div className="flex justify-between w-full">
              <div className="">
                  <h6 className="text-gray-600 italic font-sans text-md font-bold">{item.school}</h6>
                  <h6 className="text-gray-600 italic font-sans text-md">{item.degree}</h6>
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

export default EducationCard