import React from 'react'
import program_icon_1 from '../../assets/program-icon-1.png'
import program_icon_2 from '../../assets/program-icon-2.png'
import program_icon_3 from '../../assets/program-icon-3.png'
import program_1 from '../../assets/program1.jpg'
import program_2 from '../../assets/program2.jpg'
import program_3 from '../../assets/program3.jpg'
import './Programs.css'

const Programs = () => {
  return (
    <div className='programs'>
        <div className="program">
            <img src={program_1} alt="" />
            <div className="caption">
                <img src={program_icon_1} alt="" />
                <p><b>Classes III to X</b></p>
                <p>All Subjects</p>
            </div>
        </div>
        <div className="program">
            <img src={program_2} alt="" />
            <div className="caption">
                <img src={program_icon_2} alt="" />
                <p><b>Classes XI to XII</b></p>
                <p>Economics</p>
                <p>Business Studies</p>
                <p>Maths</p>
            </div>
        </div>
        <div className="program">
            <img src={program_3} alt="" />
            <div className="caption">
                <img src={program_icon_3} alt="" />
                <p><b>B.COM HONS. & GENERAL</b></p>
                <p>Accountancy</p>
                <p>Economics</p>
                <p>Business Maths</p>
                <p>Cost & Tax</p>
            </div>
        </div>
      
    </div>
  )
}

export default Programs
