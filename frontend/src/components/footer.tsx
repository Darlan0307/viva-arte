import imgCards from "../assets/cartoes.webp";
import { FaSquareWhatsapp, FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="mt-16 px-5 py-12 border-t-2 border-black border-solid">
      <div className="flex flex-wrap gap-10 items-start justify-center lg:justify-around">
        <div className="w-[200px] text-center space-y-3 text-[#333]">
          <h2 className="text-2xl font-bold">Institucional</h2>
          <ul className="space-y-2  px-3 ">
            <li>
              <a className="hover:underline" href="#">
                sobre nós
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#">
                politica de privacidade
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#">
                programa de afiliados
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#">
                regulamentos
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#">
                programa de integridade
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#">
                Guia
              </a>
            </li>
          </ul>
        </div>

        <div className="w-[200px] text-center space-y-3 text-[#333]">
          <h2 className="text-2xl font-bold">Ajuda</h2>
          <ul className="space-y-2  px-3 ">
            <li>
              <a className="hover:underline" href="#">
                troca e devoluções
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#">
                entregas
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#">
                minha conta
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#">
                meus pedidos
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#">
                pagamentos
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#">
                como comprar
              </a>
            </li>
          </ul>
        </div>

        <div className="w-[200px] text-center space-y-3 text-[#333]">
          <h2 className="text-2xl font-bold">Central</h2>
          <ul className="space-y-2  px-3 ">
            <li>
              <a className="hover:underline" href="#">
                tire suas duvidas
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#">
                suporte online
              </a>
            </li>
          </ul>
        </div>

        <div className="w-[200px] flex justify-center gap-6 text-4xl">
          <a className="hover:scale-110" href="#">
            <FaSquareWhatsapp />
          </a>
          <a className="hover:scale-110" href="#">
            <FaSquareInstagram />
          </a>
        </div>
      </div>
      <div className="mt-10">
        <img
          className="mx-auto pt-5 border-t-2 border-black border-solid"
          src={imgCards}
          alt="imagem de cartões que o site aceita"
        />
        <p className="text-center text-lg">
          metodos de pagamento pode ser só cartão master pix e boleto.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
