import Image from 'next/image'
import Logo from "@/shared/assets/Logo.svg"
import Icons from "@/shared/assets/Icons.svg"

export const Footer = () => {
    return (
        <footer className="flex flex-col sm:flex-row items-center sm:justify-around py-9 bg-black text-branco text-sm">
            <ul className='space-y-2 py-3 sm:py-0 w-50 items-center'>
                <li className='font-bold'>Serviços</li>
                <li>Conta corrente</li>
                <li>Conta PJ</li>
                <li>Cartão de crédito</li>
            </ul>
            <ul className='space-y-2 py-3 sm:py-0 w-50 items-center'>
                <li className='font-bold'>Contato</li>
                <li>0800 004 250 08</li>
                <li>meajuda@bytebank.com.br</li>
                <li>ouvidoria@bytebank.com.br</li>
            </ul>
            <ul className='space-y-5 py-3 sm:py-0 w-50 items-center'>
                <li className='font-bold'>Desenvolvido por Alura</li>
                <Image src={Logo} alt={"Bytecon"} height={20}/>
                <Image src={Icons} alt={"Bytecon"} height={20}/>
            </ul>
        </footer>
    )
}