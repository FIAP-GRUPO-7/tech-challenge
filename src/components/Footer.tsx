import Image from 'next/image'
import Logo from "@/shared/assets/Logo.svg"
import Icons from "@/shared/assets/Icons.svg"

export const Footer = () => {
    return (
        <footer className="flex items-center justify-around py-6 bg-black text-branco text-xs">
            <ul className='space-y-2 '>
                <li className='font-medium'>Serviços</li>
                <li>Conta corrente</li>
                <li>Conta PJ</li>
                <li>Cartão de crédito</li>
            </ul>
            <ul className='space-y-2'>
                <li className='font-medium'>Contato</li>
                <li>0800 004 250 08</li>
                <li>meajuda@bytebank.com.br</li>
                <li>ouvidoria@bytebank.com.br</li>
            </ul>
            <ul className='space-y-5 flex flex-col items-center'>
                <li className='font-medium'>Desenvolvido por Alura</li>
                <Image src={Logo} alt={"Bytecon"} height={20}/>
                <Image src={Icons} alt={"Bytecon"} height={20}/>
            </ul>
        </footer>
    )
}