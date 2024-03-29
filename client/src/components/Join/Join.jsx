import React, { useRef } from 'react'
import io from 'socket.io-client'
import style from './join.modules .css'
import{Input, Button} from '@mui/material'

 export  default function Join({SetChatVisibility}){

    const usernameRef = useRef()

    const handleSubimt = async() => {
    const username = usernameRef.current.value
    if(!username.trim())return
    const socket = await io.connect('http;//localhost:3001')
    socket.emit('set_username',username)
    setSocket(socket)
  
    SetChatVisibility(true)
    }
    return(
        <div classsName={style['join-container']}>
            <h2>Chat em tempo Real</h2>
            Inpunt inpuRef={usernameRef} placeholder='Nome de Usuario'
        </div>

    )
 }