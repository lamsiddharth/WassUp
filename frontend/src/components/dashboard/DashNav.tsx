import Link from 'next/link'
import React from 'react'
import LoginModal from '../auth/LoginModal'
import { Button } from '../ui/button'
import ProfileMenu from '../auth/ProfileMenu'
import { authOptions, CustomSession } from '@/app/api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth'

type Props = {}

const DashNav = async (props: Props) => {

    const session: CustomSession | null = await getServerSession(authOptions);
    const user = session?.user
  return (
    <nav className="p-6 flex justify-between items-center bg-white shadow-sm">
      <h1 className="text-xl md:text-2xl font-extrabold">WassUp</h1>
      <div className="flex items-center space-x-2 md:space-x-6 text-gray-700">
        <ProfileMenu name={user?.name as string} image={user?.image as string}/>
      </div>
    </nav>
  )
}

export default DashNav