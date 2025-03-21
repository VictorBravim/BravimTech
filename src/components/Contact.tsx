import Image from "next/image";

const Contact = () => {
  return (
    <section id="Contato" className="flex justify-center w-full bg-white py-4 lg:py-12">
      <div className="bg-white py-12 lg:py-24 text-[#18181B] overflow-hidden flex justify-center container px-4 sm:px-6 md:px-16">
        <div
          className="text-white py-6 lg:py-32 rounded-4xl shadow-lg footer-container w-full text-center"
          style={{
            backgroundImage: 'url("/images/Banner.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundBlendMode: 'overlay'
          }}
        >
          <div className="flex justify-center my-2 lg:my-4">
            <div className="bg-blue-600/10 text-white gap-2 py-2 px-2 flex items-center rounded-full">
              <Image src="/images/Logo.png" alt="Logo" width={30} height={30} className="mr-2" />
              <h1 className="text-white text-sm lg:text-lg font-semibold mr-2">Fale Com a Gente</h1>
            </div>
          </div>

          <h2 className="text-2xl lg:text-5xl font-bold mb-2">Tem uma ideia em mente?</h2>
          <h3 className="text-2xl lg:text-5xl font-semibold mb-4">Entre em contato conosco.</h3>
          <p className="text-sm mb-6 mx-8 lg:mx-56">
            Nós vamos te ajudar a desenvolver sua ideia passo por passo,
            queremos garantir que o projeto seja exatamente como você planejou.
          </p>
          <button className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-full hover:bg-gray-100 transition duration-300">
            Entrar em contato
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;