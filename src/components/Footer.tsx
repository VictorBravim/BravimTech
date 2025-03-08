import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white text-black pt-24 py-4 px-4">
      <div className="footer-container mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div className="flex flex-col items-start">
          <div className="flex items-center mb-4">
            <Image
              src="/images/Blue.svg" // Replace with the actual logo path
              alt="BravimTech Logo"
              width={40}
              height={40}
            />
            <h1 className="ml-2 text-xl font-bold text-blue-600">BravimTech</h1>
          </div>
          <p className="text-sm text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Nam amet
            dolor vel eros lobortis congue sit amet non lobortis.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-start pl-24 lg:pl-64">
          <h3 className="text-lg font-semibold mb-4">Home</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <Link href="/solucoes">Soluções</Link>
            </li>
            <li>
              <Link href="/beneficios">Benefícios</Link>
            </li>
            <li>
              <Link href="/projetos">Projetos</Link>
            </li>
            <li>
              <Link href="/sobre">Sobre</Link>
            </li>
          </ul>
        </div>

        {/* Solutions */}
        <div className="flex flex-col items-start pl-0 sm:pl-0 md:pl-12 lg:pl-64">
          <h3 className="text-lg font-semibold mb-4">Soluções</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <Link href="/design">Design</Link>
            </li>
            <li>
              <Link href="/otimizacao">Otimização</Link>
            </li>
            <li>
              <Link href="/inovacao">Inovação</Link>
            </li>
            <li>
              <Link href="/suporte">Suporte</Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-start pl-24 lg:pl-64">
          <h3 className="text-lg font-semibold mb-4">Social</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <Link href="https://instagram.com">Instagram</Link>
            </li>
            <li>
              <Link href="https://linkedin.com">LinkedIn</Link>
            </li>
            <li>
              <Link href="https://twitter.com">Twitter</Link>
            </li>
            <li>
              <Link href="https://facebook.com">Facebook</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright and Legal Links */}
      <div className="footer-container mx-auto mt-8 pt-4 text-center text-sm text-gray-600 border-t border-gray-200">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>
            © 2025 Todos os Direitos Reservados{" "}
            <Link href="/bravimtech" className="text-blue-600 hover:underline">
              BravimTech
            </Link>
          </p>
          <div className="space-x-4">
            <Link href="/politica-privacidade" className="hover:underline">
              Política de Privacidade
            </Link>
            <Link href="/termos-uso" className="hover:underline">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;