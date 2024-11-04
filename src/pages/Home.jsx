import hero from "../assets/heroImg.png";
const Home = () => {
  return (
    <>
      <div
        className="flex flex-col justify-center items-center w-[100%] h-[80vh]"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <h1 className="text-6xl tracking-widest font-bold">Tranquiliza.360°</h1>
        <div className="bg-[#1AB6EF] w-[300px] mt-3 h-[10px]"></div>
        <h1 className="text-2xl font-semibold">Tecnología que cuida de ti</h1>
      </div>
      <div className="w-[100vh]">
        <h1 className="text-4xl py-8 mt-4 font-bold">
          Conéctate a la calma, transforma tu bienestar
        </h1>
        <p className="line-height">
          Bienvenido a Tranquiliza 360°<br></br>
          <br></br> Explora una nueva forma de bienestar a través de
          experiencias inmersivas diseñadas para cuidar de ti. Nuestra
          tecnología combina innovación y cuidado personalizado, creando
          ambientes virtuales que se adaptan a tus necesidades terapéuticas y
          emocionales.<br></br>
          <br></br> Ya sea que busques relajación, rehabilitación o simplemente
          un momento de paz, Tranquiliza 360° te ofrece una solución integral
          que se ajusta a tu ritmo. Aquí, cada experiencia está pensada para
          mejorar tu bienestar físico y mental, brindándote un espacio seguro y
          reconfortante.
          <br></br>
          <br></br>
          Tu viaje hacia la calma empieza aquí.
        </p>
      </div>
    </>
  );
};

export default Home;
