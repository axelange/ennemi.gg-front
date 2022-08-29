
import { useState} from 'react'
import Button from '/components/UI/Button';
import { useRouter } from 'next/router';
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function login() {
    const router = useRouter();
    
    return (
        <section className="bg-zinc-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-black rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl leading-tight tracking-tight text-peachred md:text-2xl">
                            Se connecter
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleLoginSubmit}>
                            <div>
                                <label for="email" className="block mb-2 text-sm text-white">Identifiant</label>
                                <input type="email" name="email" id="email" className="bg-zinc-900 border border-black text-zinc-200 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Entrez votre email" required="" />
                            </div>
                            <div>
                                <label for="password" className="block mb-2 text-sm text-white">Mot de passe</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-zinc-900 border border-black text-zinc-200 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
                            </div>
                            <div className="text-peachred text-sm flex flex-row items-center justify-between">
                                <Link href='/'>
                                    <a className="hover:text-base hover:text-deeporange ease-in duration-150">
                                        <span><FontAwesomeIcon icon={faArrowLeft} className="pr-3" />Retourner au site</span>
                                    </a>
                                </Link>
                                <Button text="Connexion" type="submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>

      </section>
    )
}