'use client'

import Image from 'next/image'
import Logo from "@/shared/assets/Logo.svg"
import { useState } from 'react'
import RegisterModal from './modal/RegisterModal'
import LoginModal from './modal/LoginModal'

export const Header = () => {
    const [showModalRegister, setShowModalRegister] = useState(false);
    const [showModalLogin, setShowModalLogin] = useState(false);

    return (
       <>
         <nav className="flex items-center justify-around  py-4 bg-black text-sm">
            <ul className="flex items-center gap-8 text-branco font-medium">
                <Image src={Logo} alt={"Bytecon"} height={25} />
                <li className='flex items-center'>
                    Sobre
                </li>
                <li className='flex items-center'>
                    Serviços
                </li>
            </ul>
            <div className="flex items-center gap-6">
                 <button onClick={() => setShowModalRegister(true)} className="flex justify-center py-2 px-4 font-semibold rounded-md border-branco bg-branco">
                    Abrir minha conta
                </button>
                <button onClick={() => setShowModalLogin(true)}  className="flex justify-center py-2 px-7 font-semibold rounded-md border-1 bg-preto text-branco">
                    Já tenho conta
                </button>
            </div>
        </nav>
        {showModalRegister && <RegisterModal onClose={() => setShowModalRegister(false)} />}
        {showModalLogin && <LoginModal onClose={() => setShowModalLogin(false)} />}
       </>
    )
}