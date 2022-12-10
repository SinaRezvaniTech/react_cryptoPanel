import React from 'react'
import WalletImage from '../../../assets/images/wallet.jpg'

const NotFound = () => {
  return (
    <div className='p-7 items-center flex flex-col justify-center'>
      {/*Title*/}
      <p className='mr-auto text-gray-500 font-bold'>Portfolio</p>
      {/*Others*/}
      <img src={WalletImage} alt='WalletImage' className='w-52 -mt-5 m-auto' />
      <p className='text-gray-500 mb-2'>You dont have a wallet yet!</p>
      <p className='text-gray-500 mb-5'>
        Connect to wallet and See your Portfolio
      </p>
      <p className='ml-5 mb-6 rounded-md p-2 px-8 text-sm text-white bg-[#8860f5] w-max cursor-pointer'>
        Connect to Wallet
      </p>
    </div>
  )
}

export default NotFound
