import react               from 'react';
import Link                from 'next/link';
import { useRouter }       from 'next/router';
import Image               from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
         faHouse, 
         faDisplay, 
         faNewspaper, 
         faUserLarge, 
         faPeopleGroup, 
         faHandshake, 
         faChessBoard, 
         faCalendar, 
         faShirt 
      }                    from '@fortawesome/free-solid-svg-icons';

export default function SidebarNav(){
   const router = useRouter();

   return (
      <aside className="w-80 h-screen bg-zinc-900 fixed" aria-label="Sidebar">
         <div className="overflow-y-auto">
            <div className="text-center text-white p-11">
               <Image src="/medias/img/logo/ennemi_white.svg" alt="ennemi Logo" width={200} height={33}/>
            </div>
            <ul>
               <Link href="/admin" passHref>
                  <li className={`text-white hover:bg-zinc-800 p-4 cursor-pointer font-light ${router.pathname == '/admin' ? "nav-active" : ""}`}>
                        <a className="px-5"><FontAwesomeIcon icon={faHouse} className="px-5" />Dashboard</a>
                  </li>
               </Link>
               <Link href="/admin/display" passHref>
                  <li className={`text-white hover:bg-zinc-800 p-4 cursor-pointer font-light ${router.pathname == '/admin/display' ? "nav-active" : ""}`}>
                     <a className="px-5"><FontAwesomeIcon icon={faDisplay} className="px-5" />Affichage</a>
                  </li>
               </Link>
               <Link href="/admin/news" passHref>
                  <li className={`text-white hover:bg-zinc-800 p-4 cursor-pointer font-light ${router.pathname == '/admin/news' ? "nav-active" : ""}`}>
                     <a className="px-5"><FontAwesomeIcon icon={faNewspaper} className="px-5" />Actualités</a>
                  </li>
               </Link>
               <Link href="/admin/users" passHref>
                  <li className={`text-white hover:bg-zinc-800 p-4 cursor-pointer font-light ${router.pathname == '/admin/users' ? "nav-active" : ""}`}>
                     <a className="px-5"><FontAwesomeIcon icon={faUserLarge} className="px-5" />Utilisateurs</a>
                  </li>
               </Link>
               <Link href="/admin/teams" passHref>
                  <li className={`text-white hover:bg-zinc-800 p-4 cursor-pointer font-light ${router.pathname == '/admin/teams' ? "nav-active" : ""}`}>
                     <a className="px-5"><FontAwesomeIcon icon={faPeopleGroup} className="px-5" />Équipes</a>
                  </li>
               </Link>
               <Link href="/admin/partners" passHref>
                  <li className={`text-white hover:bg-zinc-800 p-4 cursor-pointer font-light ${router.pathname == '/admin/partners' ? "nav-active" : ""}`}>
                  <a className="px-5"><FontAwesomeIcon icon={faHandshake} className="px-5" />Partenaires</a>
                  </li>
               </Link>
               <Link href="#" passHref>
                  <li className={`text-gray-500 hover:bg-zinc-800 p-4 cursor-pointer font-light ${router.pathname == '/admin/matchs' ? "nav-active" : ""}`}>
                  <a className="px-5"><FontAwesomeIcon icon={faChessBoard} className="px-5" />Matchs</a><span className='text-xs'>(v2)</span>
                  </li>
               </Link>
               <Link href="#" passHref>
                  <li className={`text-gray-500 hover:bg-zinc-800 p-4 cursor-pointer font-light ${router.pathname == '/admin/agenda' ? "nav-active" : ""}`}>
                  <a className="px-5"><FontAwesomeIcon icon={faCalendar} className="px-5" />Calendrier</a><span className='text-xs'>(v2)</span>
                  </li>
               </Link>
               <Link href="#" passHref>
                  <li className={`text-gray-500 hover:bg-zinc-800 p-4 cursor-pointer font-light ${router.pathname == '/admin/products' ? "nav-active" : ""}`}>
                     <a className="px-5"><FontAwesomeIcon icon={faShirt} className="px-5" />Produits</a><span className='text-xs'>(v2)</span>
                  </li>
               </Link>
               </ul>
               <Link href="/" passHref>
                  <div className="p-3 text-center bottom-8 absolute w-full bg-peachred hover:bg-peachred-darker transition">
                     <a className="text-xs text-white">Revenir au site</a>
                  </div>
               </Link>
               <div className="text-center bottom-0 absolute w-full border-t border-zinc-800">
                  <p className="py-2 text-xs text-zinc-600">Alpha v0.1</p>
               </div>
         </div>
      </aside>
    )
}