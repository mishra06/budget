import React, { useContext } from 'react'
import { Context } from '../App';
import './OverView.css'

// const OverView = ({total}) => {
    const OverView = () => {

    const {total} = useContext(Context)

    const price = 2000;
  return (
    <div className='overview'>
      <h1>My Budget Planner</h1>
      <div className='inner_overview'>
        <div className='sec'>Budget:{price}</div>
        <div className='sec'>Remaining: {price -total}</div>
        <div className='sec sec2'>Spant so far: {total}</div>
      </div>
    </div>
  )
}

export default OverView
