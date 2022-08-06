import react from 'react';
import Link from 'next/link';
import SidebarNav from '/components/layout/SidebarNav';

export default function Display() {
    return (
        <>
        <div className='flex flex-row bg-zinc-800'>
            <SidebarNav />
            <main className='w-full h-screen overflow-auto p-11 side-page-content' >
                <div className='p-5 text-white'>
                    <span className="text-xl">Gestion de l&apos;affichage</span>
                </div>
            </main>
        </div>
        </>
    )
}