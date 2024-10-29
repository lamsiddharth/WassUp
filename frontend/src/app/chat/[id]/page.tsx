import ChatBase from '@/components/chat/ChatBase'
import React from 'react'

type Props = {}

const page = ({ params }: { params: { id: string }}) => {
    console.log("the group id is ", params.id)
    return (
    <div>
        Hello
        <ChatBase groupId={params.id} />
    </div>
  )
}

export default page