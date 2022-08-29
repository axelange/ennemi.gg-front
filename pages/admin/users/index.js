import SidebarNav from '/components/layout/SidebarNav'
import TableUser from '/components/admin/TableUser'
import CreateUser from '/components/admin/CreateUser'
import Button from '/components/UI/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Axios } from '/lib/utils'
import axios from 'axios'

export async function getServerSideProps(context) {
    console.log(context.req.cookies.token)

    const domain = process.env.BACK_URL
    const { data } = await axios({
        method: 'get',
        url: `http://${domain}:3001/api/v1/admin/users`,
        headers: {
            authorization: context.req.cookies.token
        }
    })
    console.log()
    return ({
        props: {
            users: data.rows
        }
    })
}

export default function Users({ users }) {

    return (
        <>
        <div className='flex flex-row bg-zinc-800'>
        <SidebarNav />
        <main className='w-full h-screen overflow-auto p-11 side-page-content' >
            <div className='p-5 text-white'>
                <span className="text-xl">Gestion des utilisateurs</span>
            </div>
            <div className="py-4">
                <div className="flex flex-row mb-2">
                    <TableUser columns={["Id", "Nom", "Email", "Actions"]} data={users} />
                </div>
            </div>
            <div className='p-5 text-white'>
                <span className="text-xl">Ajouter un utilisateur</span>
            </div>
            <div className="py-4">
                <CreateUser />
                </div>
            </main>
        </div>
        </>
    )
}
