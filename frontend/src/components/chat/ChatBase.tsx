"use client"
import { getSocket } from '@/lib/socket.config'
import React, { useEffect, useMemo } from 'react'
import {v4 as uuidV4} from 'uuid'
import { Button } from '../ui/button'
type Props = {}

const ChatBase = (props: Props) => {

    let socket = useMemo(() => {
        const socket = getSocket()
        return socket.connect()
    },[])

    useEffect(()=> {
        socket.on('message', (data:any) => {
            console.log("the socket messgae is ", data);
        })
        return () => {
            socket.close()
        }

        const handleClick = ()=> {
            socket.emit("message", {name: "siddharth", id:uuidV4()})
        }
    })
  return (
    <div>
        <Button >
            send dudes
        </Button>
    </div>
  )
}

export default ChatBase