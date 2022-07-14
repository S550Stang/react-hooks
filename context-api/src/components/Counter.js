import React from 'react'
import { Count } from './Count'
import { CounterHeader } from './CounterHeader'
import { DecrementButton } from './DecrementButton'
import { IncrementButton } from './IncrementButton'

export const Counter = () => {
  return (
    <div className=' w-96 h-96 bg-black my-28 shadow-2xl rounded-2xl flex 
    flex-col justify-start items-center  space-4'>
      <CounterHeader/>
      <Count/>
      <div className='flex justify-between items-center space-x-3 mt-20 '>
        <DecrementButton/>
        <IncrementButton/>
      </div>
    </div>
  )
}
