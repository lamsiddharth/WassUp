import React from 'react'

type Props = {}

const page = ({ params }: { params: { id: string }}) => {
    console.log("the group id is ", params.id)
    return (
    <div>
        Hello
    </div>
  )
}

export default page