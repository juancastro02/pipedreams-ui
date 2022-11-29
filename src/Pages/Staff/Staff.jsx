import React, { useCallback, useContext, useEffect } from 'react'
import axios from 'axios'

import { Button } from '../../Components'
import { StaffContext } from '../../Helper/Context'
import { Link } from 'react-router-dom'

import './Staff.css'

const Staff = ({ type, other }) => {

  const { days, staff, setStaff, currentDay, setCurrentDay } = useContext(StaffContext)

  const getStaff = useCallback(async () => {
    const { data } = await axios.get(process.env.REACT_APP_BACKEND_PORT + `/${type}`)
    setStaff(data)
  }, [setStaff, type])

  useEffect(() => {
    if (staff?.type !== type.toLowerCase()) {
      getStaff()
    }
  }, [getStaff, staff?.type, type, currentDay])

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className='staff-container' >
    <div className='staff-buttons-container'>
      <div className='button-previous'>
        <Button text={'Prev'} action='previous' current={currentDay} setCurrent={setCurrentDay} />
      </div>
      <div className='staff-day-container'>
        <h2>{type} on {capitalizeFirstLetter(days[currentDay])}</h2>
      </div>
      <div className='button-next-container' >
        <Button text={'Next'} action='next' setCurrent={setCurrentDay} current={currentDay} />
      </div>
      <Link to={`/${other}`} > <button type="button" className="btn btn-secondary" >{other}</button></Link> 
    </div>
    <div className='mt-40' >
      <ul className="list-group">
        {
          staff.type && staff[days[currentDay]].map((cook,i) => (<li key={i} className="list-group-item staff-list-item">{cook}</li>))
        }
        {
          staff.type && staff[days[currentDay]].length === 0 && (<li>There are no {type.toLowerCase()} on {days[currentDay]}</li>)
        }
      </ul>
    </div>
  </div>
  )
}

export default Staff