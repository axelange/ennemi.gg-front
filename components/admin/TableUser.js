import { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import { removeDataFrom, modifyDataFrom } from '/lib/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faUserPen } from '@fortawesome/free-solid-svg-icons';

export default function TableUser({columns, data}){

    const router = useRouter();

    const editUser = (id) => {
        onOpenModal();

    }

    const deleteUser = (id) => {
        removeDataFrom(`admin/users/${id}`)
        router.push('/admin/users')
    }

    

    return (
        <div class="py-4 w-full">
            <table className="table-auto w-full text-left">
                <thead className="text-peachred bg-black">
                    <tr>
                        { 
                            columns.map((column) => (
                                    <th key={column} className="font-light p-2">{column}</th>
                                ))
                        }
                    </tr>
                </thead>
                <tbody className="text-white bg-zinc-900">
                        {
                            data.map((user) => (
                                 <tr className="">
                                    <td key={user.id} className="p-2">{user.id}</td>
                                    <td className="p-2">{user.name}</td>
                                    <td className="p-2">{user.email}</td>
                                    <td className="p-2"><FontAwesomeIcon icon={faUserPen} className="hover:text-peachred" onClick={() => editUser(user.id)} /><FontAwesomeIcon icon={faTrash} className="px-5 hover:text-peachred" onClick={() => deleteUser(user.id)}/> </td>
                                </tr>
                            ))
                        }
                </tbody>
            </table>
        </div>
    )
}