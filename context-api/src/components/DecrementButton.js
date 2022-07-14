import React,{useContext} from 'react'
import {CounterContextApi} from "../contexts/CounterContext"

export const DecrementButton = () => {
  const {decrementFunction} = useContext(CounterContextApi)
  return (
    <button onClick={decrementFunction} className='bg-[#C21414] text-white w-20 flex justify-center items-center rounded-sm'>-</button>
  )
}
