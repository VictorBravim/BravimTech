import Image from "next/image";

type clientCard = {
  position: string;
  name: string;
};

const ClientCard = ({ position, name}: clientCard) => (
  <div
    className={`z-10 hidden lg:block absolute ${position} w-[200px] border border-gray-200 rounded-xl sm:rounded-2xl p-2 sm:p-3 shadow-[0_0_20px_rgba(0,100,255,0.05)] hover:shadow-lg bg-white font-medium gap-5 transition-all duration-500 delay-1000`}
  >
    <div className="flex items-center gap-2">
      <Image
        src="images/TestimonalUser.svg"
        alt="Logo"
        width={35}
        height={35}
        className="mr-2"
      />

      <p className="font-medium">{name}</p>
    </div>
  </div>
);

export default ClientCard;
