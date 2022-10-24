import { FaMapMarkerAlt, FaPhoneAlt, FaLinkedin } from "react-icons/fa";
import {AiOutlineMail} from 'react-icons/ai'

function EducationCard() {

    const item = {
        school: 'Glyndwr University',
        degree: 'Renewable energy Engineering',
        start: '12/09/2014',
        end: '12/10/2018',
        description: 'My greatest acheievment was being me!'
    }

  return (
      <>
          <div className="flex justify-between border w-full">
              <div className="border">
                  <h6 className="text-gray-600 italic font-sans text-md">{item.school}</h6>
                  <h6 className="text-gray-600 italic font-sans text-md">{item.degree}</h6>
              </div>
              <div className="border">
                  <p className="">{item.start} - {item.end}</p>
              </div>
          </div>     
      </>
  )
}

export default EducationCard