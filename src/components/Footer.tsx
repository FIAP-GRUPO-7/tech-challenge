import Image from "next/image";
import Logo from "@/shared/assets/Logo.svg";
import Icons from "@/shared/assets/Icons.svg";

export const Footer = () => {
  return (
    <footer
      className="flex flex-col sm:flex-row items-center sm:justify-around py-9 bg-black text-branco text-sm"
      role="contentinfo"
    >
      {/* Serviços */}
      <nav aria-label="Serviços">
        <ul className="space-y-2 py-3 sm:py-0 w-50 text-center sm:text-left">
          <li className="font-bold">
            <h2 className="text-base">Serviços</h2>
          </li>
          <li>
            <a href="/conta-corrente">Conta corrente</a>
          </li>
          <li>
            <a href="/conta-pj">Conta PJ</a>
          </li>
          <li>
            <a href="/cartao">Cartão de crédito</a>
          </li>
        </ul>
      </nav>

      {/* Contato */}
      <address className="flex flex-col gap-1 not-italic space-y-2 py-3 sm:py-0 w-50 text-center sm:text-left">
        <h2 className="text-base">Contato</h2>
        <p>0800 004 250 08</p>
        <a href="mailto:meajuda@bytebank.com.br">meajuda@bytebank.com.br</a>
        <a href="mailto:ouvidoria@bytebank.com.br">ouvidoria@bytebank.com.br</a>
      </address>

      {/* Marca */}
      <div className="space-y-5 py-3 sm:py-0 w-50 text-center sm:text-left">
        <h2 className="font-bold text-base">Desenvolvido por Alura</h2>
         <div className="flex items-center justify-center sm:justify-start gap-4">
          <Image src={Logo} alt="Logo da Bytebank" height={20} />
          <Image src={Icons} alt="Ícones das redes sociais Bytebank" height={20} />
        </div>
      </div>
    </footer>
  );
};
