import react from 'react';
import Link from 'next/link';
import SidebarNav from '/components/layout/SidebarNav';

export default function Admin() {
    return (
        <>
            <div className='flex flex-row bg-zinc-800'>
                <SidebarNav />
                <main className='w-full h-screen overflow-auto p-11 side-page-content' >
                </main>
            </div>
        </>
        
    )
}