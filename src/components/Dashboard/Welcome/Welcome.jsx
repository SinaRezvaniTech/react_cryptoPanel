import React from 'react'

//images
import WImage from '../../../assets/images/manager-finding-quality-application-2161935-1816241.webp'
import Avatar from '../../../assets/images/vicky-hladynets-C8Ta0gwPbQg-unsplash.jpg'

const Welcome = ({ user }) => {
  return (
    <div className='flex flex-col h-max '>
      {/*Top Side*/}
      <div className='bg-[#ece6f8] w-full rounded-t-xl  flex justify-between items-center'>
        <div className='mb-auto p-5 flex flex-col gap-2'>
          <h3 className='text-gray-600 font-bold'>
            Welcome Back {user.firstName}!
          </h3>
          <p className='text-gray-600 text-sm sm:mb-0 mb-3'>
            Nurafin Dashboard
          </p>
        </div>
        <img src={WImage} alt='employer' className='h-28 sm:h-32 p-3 ' />
      </div>
      {/*Bot Side*/}
      <div className='bg-white w-full rounded-b-xl shadow-lg  flex flex-col '>
        {/*Avatar*/}
        <img
          src={Avatar}
          alt='employer'
          className='w-14 h-14 ml-5 -mt-7 rounded-[50%] object-cover '
        />
        {/*User Name*/}
        <div className='mb-auto p-5 flex gap-2 items-center'>
          <h3 className='text-gray-600 font-bold'>
            {user.firstName} {user.lastName}
          </h3>
          {/* Circles */}
          <div className='flex gap-2'>
            <p className='bg-orange-100 border text-center border-orange-400 text-orange-400 opacity-70 p-2 w-8 h-8 text-xs rounded-full'>
              TA
            </p>
            <p className='bg-green-100 border text-center border-green-400 text-green-400 opacity-70 p-2  w-8 h-8 text-xs rounded-full'>
              T
            </p>
          </div>
        </div>
        <p className='ml-5 mb-6 rounded-md p-2 px-8 text-sm text-white bg-[#8860f5] w-max cursor-pointer'>
          Trading Team
        </p>
      </div>
    </div>
  )
}

export default Welcome
