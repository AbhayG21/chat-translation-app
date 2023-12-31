import React from 'react'
import Logo from '../Logo/Logo'
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle'
import UserButton from '../UserButton';
import { authOptions } from '@/auth';
import { getServerSession } from 'next-auth';
import Link from 'next/link'
import { MessageSquareIcon } from 'lucide-react';
async function Header() {
    const session = await getServerSession(authOptions);

  return (
      <header className="sticky top-0 z-50 bg-white dark:bg-gray-900">
          <nav className="flex flex-col sm:flex-row items-center p-5 pl-2 max-w-7xl mx-auto"> 
              <Logo />

              <div className="flex flex-1 justify-end items-center space-x-4">
                  {/* LanguageSelect */}
                  { session ?(
                    <>
                        <Link href={'/chat'} prefetch={false}>
                            <MessageSquareIcon className='text-black dark:text-white'/>
                        </Link>
                    </>
                ):(
                    <Link href={'/pricing'}>
                        {/* <Pricing> */}
                        Pricing
                    </Link>
                )}
                  <DarkModeToggle />
                  <UserButton session={session}/>
              </div>
          </nav>
          {/* Upgrade Banner */}
      </header>
  );
}

export default Header