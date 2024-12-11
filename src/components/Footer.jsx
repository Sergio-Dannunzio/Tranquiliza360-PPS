const Footer = () => {
  return (
    <footer className=" text-white min-h-56 bg-[#2D5677] p-10 flex md:justify-around flex-col md:flex-row">
      <div>
        <h1 className="mb-8 font-bold">Tranquiliza.360°</h1>
        <h2>Mail: tranquiliza.360@gmail.com</h2>
      </div>
      <div className="py-6 md:py-0">
        <a href="https://www.pladema.net/" target="_blank" className="mb-8 font-bold">Pladema</a>
      </div>
      <div className="">
        <a href="/home" className="mb-8 font-bold">Inicio</a>
      </div>
    </footer>
  );
};

export default Footer;
