import Button from '/components/UI/Button';
import axios from 'axios';


export default function CreateUser(){

    const axios = require('axios');
    

    const addUser = (event) => {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        console.log('personne ajoutée', name, email);
        axios({
            method: 'post',
            url: 'http://localhost:3001/api/v1/admin/users',
            data: {
                name: name,
                email: email,
                password: password
            }
    })
    }

    return (
        <form onSubmit={addUser}>
            <div className="flex flex-row">
                <div class="mb-6">
                    <label for="name" class="block mb-2 text-sm font-medium text-peachred">Nom ou Pseudonyme de l'utilisateur</label>
                    <input type="name" id="name" class="shadow-sm bg-black text-white text-sm w-80 p-2.5 mr-2" placeholder="ex. John Doe / LKSSS" required />
                </div>
                <div class="mb-6">
                    <label for="email" class="block mb-2 text-sm font-medium text-peachred">E-mail de l'utilisateur</label>
                    <input type="email" id="email" class="shadow-sm bg-black text-white text-sm block w-96 p-2.5 mr-2" placeholder="ex. name@flowbite.com" required />
                </div>
                <div class="mb-6">
                    <label for="password" class="block mb-2 text-sm font-medium text-peachred">Mot de passe provisoire</label>
                    <input type="password" id="password" class="shadow-sm bg-black text-white text-sm w-64 p-2.5 mr-2"  required />
                </div>
                <div class="mb-6">
                    <label for="repeat-password" class="block mb-2 text-sm font-medium text-peachred">Répéter le mot de passe provisoire</label>
                    <input type="password" id="repeat-password" class="shadow-sm bg-black text-white text-sm w-64 p-2.5 mr-2" required />
                </div>
            </div>
            <Button text="Créer l'utilisateur"/>
        </form>
    )
}