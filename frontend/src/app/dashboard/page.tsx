import DashNav from '@/components/dashboard/DashNav'
import React from 'react'
import { authOptions, CustomSession } from '../api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth'

type Props = {}

const page = async(props: Props) => {
    const session:CustomSession | null = await getServerSession(authOptions);

  return (
    <div>
        <DashNav
            name={session?.user?.name!}
            image={session?.user?.image ?? undefined}
        />
    </div>
  )
}

export default page