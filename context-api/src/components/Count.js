import React,{useContext} from 'react'
import {CounterContextApi} from "../contexts/CounterContext"
export const Count = () => {
  const {count} = useContext(CounterContextApi)
  return (
    <h1 className='text-white text-8xl mt-10'>{count}</h1>
  )
}
