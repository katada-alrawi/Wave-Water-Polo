import React, { useEffect, useState } from 'react'
import useAxios from '../../../hooks/useAxios'

function Popular() {
  const axiosFetch = useAxios();
  const [classes, setClasses]=useState([]);
  useEffect(()=> {
    const fetchClasses =async () => {
      const response = await axiosFetch.get('/classes')
      console.log(response.data);
      setClasses(response.data);
    }
  })
  return (
    <div className='md:w-[80%] mx-auto my-36'>
      <h1 className='text-5xl font-bold text-center text-gray-500'> Our <span className='text-secondary'> Popular </span> Classes</h1>
      <div className='w-[40%] text-center mx-auto my-4'>
        <p className='text-gray-500'> swim towards success with our comprehensive water polo training program.</p>
      </div>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {classes.map((item, index)=><Card key={index} item={item}/>)
        }
      </div>
    </div>
  )
}

export default Popular