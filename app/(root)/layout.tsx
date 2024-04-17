import SideNav from '@/components/shared/SideNav'
import React from 'react'

const Layout = ({children}:{children: React.ReactNode}) => {
  return (
    <main className='root'>
        <SideNav/>
        <div className='root-container'>
            <div className='wrapper'>
             {children}
            </div>
        </div>
        
        </main>
  )
}

export default Layout