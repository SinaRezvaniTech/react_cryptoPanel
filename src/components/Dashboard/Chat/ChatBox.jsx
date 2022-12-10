import React, { useState } from 'react'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
  useSubscription,
  from,
  useMutation,
} from '@apollo/client'
import { WebSocketLink } from '@apollo/client/link/ws'
//css
import style from './Chat.module.scss'

//icons
import { IoSendSharp } from 'react-icons/io5'
import { VscDebugStart } from 'react-icons/vsc'

//components
import Messages from './Messages'

//config Apollo Client for gql
const link = new WebSocketLink({
  uri: 'ws://localhost:4000/',
  options: {
    reconnect: true,
  },
})
const client = new ApolloClient({
  link,
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
})

const POST_MESSAGES = gql`
  mutation ($from: String!, $message: String!) {
    sendMessage(from: $from, message: $message) {
      id
      from
      message
    }
  }
`
const GET_MESSAGES = gql`
  subscription {
    messageSent {
      id
      from
      message
    }
  }
`

const ChatBox = () => {
  const { data } = useSubscription(GET_MESSAGES)
  //user name
  const [name, setName] = useState('')
  const [inputTmp, setInputTmp] = useState('')

  const [postMessage] = useMutation(POST_MESSAGES)
  const onSend = () => {
    postMessage({
      variables: {
        from: name,
        message: inputTmp,
      },
    })
  }
  return (
    <>
      {/*Messages*/}
      <div
        className={`${style.scrollStyle} overflow-y-auto h-[390px] p-5 flex flex-col gap-3 `}
      >
        {name !== '' ? (
          <Messages data={data} user={name} />
        ) : (
          <>
            <p className='animate-pulse text-gray-500 text-center'>
              Enter Your Nickname First...
            </p>
            <p className=' text-gray-400 text-sm text-center'>
              Your Nickname will be show for evryone
            </p>
          </>
        )}
      </div>

      {/* Input Box */}
      <form
        onSubmit={
          name == ''
            ? (e) => {
                e.preventDefault()
                setName(inputTmp)
                setInputTmp('')
              }
            : (e) => {
                e.preventDefault()
                onSend()
              }
        }
        className='w-full  relative flex  border-t px-5 pb-5 pt-3 items-end mt-auto '
      >
        <input
          name={name == '' ? 'name' : 'message'}
          value={inputTmp}
          onChange={(e) => setInputTmp(e.target.value)}
          type='text'
          className='outline-none pl-4 bg-gray-100 text-gray-400 p-[0.40rem] w-full rounded-full '
          placeholder={name == '' ? 'Enter Your Nickname' : 'Enter Message'}
        />
        <button
          type='submit'
          className='bg-[#8860f5] p-3 ml-4 rounded-full cursor-pointer hover:shadow-md'
        >
          {name == '' ? (
            <VscDebugStart className='text-white ' />
          ) : (
            <IoSendSharp className='text-white ' />
          )}
        </button>
      </form>
    </>
  )
}

export default () => (
  <ApolloProvider client={client}>
    <ChatBox />
  </ApolloProvider>
)
