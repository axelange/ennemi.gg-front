import Axios from 'axios'
import useAxios from  '/lib/utils';
import {useRouter} from 'next/router'
import SidebarNav from '/components/layout/SidebarNav';

export default function editUser() {

  const router = useRouter()
  const domain = process.env.BACK_URL
  const { data } = Axios.get(`http://${domain}:3001/api/v1/admin/users`)
    console.log(users)

    return (
      <div className='flex flex-row bg-zinc-800'>
        <SidebarNav />
        <main className='w-full h-screen overflow-auto p-11 side-page-content' >
        </main>   
      </div>  
    )
}