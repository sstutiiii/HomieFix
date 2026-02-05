import React from 'react'
import './founder.css';
import founder_1 from '../../assets/swapnil.jpg';
import founder_2 from "../../assets/Ayush.jpeg";

export const Founder = () => {
  return (
    <div className='testimonial'>
        <h1 className='underline-animation'>The Visionaries Behind HomieFix</h1>
        <p className='founderpara'>Meet Stuti Sharma, the founder of HomieFix,
           a platform that connects homeowners with skilled artisans for reliable
            home repair and maintenance services. Stuti is a passionate individual
             dedicated to transforming the home repair industry. With a clear
              vision of making repair services accessible and dependable,
               she brings together technical understanding and strong entrepreneurial
                drive. Her commitment to excellence, consistency, and continuous 
                learning drives HomieFix forward, setting new standards and ensuring
                 customer satisfaction. Meet the visionary behind the success of HomieFix.</p>
        <div className="card">
          <ul>
            <li>
              <div className="cardover">
              <div className="user-info">
                <img className="img1 underline" src={founder_1} alt="Swapnil" />
                <div>
                  <h3>STUTI SHARMA</h3>
                  <span>Delhi, India</span>
                </div>
                </div>
                <p className='descrip'>
                Stuti Sharma is a driven student and the founder of HomieFix,
                 a platform focused on delivering reliable home repair and
                  maintenance solutions. A third-year Computer Science (Hons.)
                   student at Delhi University, Stuti has successfully balanced
                    her academic commitments with building her entrepreneurial venture.
                     With HomieFix as her primary initiative, her journey reflects
                      strong qualities of hard work, consistency, and leadership.
                       Guided by a continuous desire to learn and grow,
                        Stuti is steadily shaping her path in the tech and
                         startup ecosystem with dedication and purpose.
                </p>
              </div>
            </li>
            {/* <li> */}
            {/* <div className="cardover">
              <div className="user-info">
                <img className="img2 underline" src={founder_2} alt="Ayush" />
                <div>
                  <h3>AYUSH DEWANGAN</h3>
                  <span>Chattisgarh, India</span>
                </div>
                </div>
                <p className='descrip'>
                Ayush Dewangan is the co-founder of HomieFix, a premier platform for home repair and maintenance services. 
                As a Final-year student at KIIT University from Korba, Chattisgarh. Ayush has seamlessly integrated his 
                academic knowledge with entrepreneurial spirit. His technical skills and problem-solving abilities have 
                significantly contributed to HomieFix's success. Ayush's dedication to innovation and customer satisfaction 
                continues to drive the company forward, setting benchmarks in the industry.
                </p>
              </div>
            </li> */}
          </ul>
        </div>
        <hr className="line" />
    </div>
  )
}

