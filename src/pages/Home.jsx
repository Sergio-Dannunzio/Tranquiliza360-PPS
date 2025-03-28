import hero from "../assets/heroImg.png";
import Card from "../components/Card";
import caracteristicas from "../utils/CardData";
import videos from "../utils/VideoData";
import Video from "../components/Video";
import UltimosBlogs from "../components/UltimosBlogs";
const Home = () => {
  return (
    <>
      <section
        className="flex flex-col justify-center items-center w-[100%] h-[80vh]"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <h1 className="text-3xl font-bold tracking-widest lg:text-6xl">
          Tranquiliza.360°
        </h1>
        <div className="bg-[#1AB6EF] w-[200px] lg:w-[300px] mt-3 h-[5px] lg:h-[10px]"></div>
        <h1 className="text-xl font-semibold">Tecnología que cuida de ti</h1>
      </section>
      <section className="pt-8 mx-auto font-montserrat">
        <h1 className="text-2xl py-8 px-3 mt-4 font-bold mx-auto w-[100%] lg:text-4xl lg:w-[100vh]">
          Conéctate a la calma, transforma tu bienestar
        </h1>
        <p className="line-height px-3 w-[100%] lg:w-[100vh] mx-auto ">
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
      </section>
      <section className="h-[700px] bg-geadiant-acento w-[100%] flex justify-center items-center font-montserrat">
        <div className="overflow-hidden carrusel w-[100vh]">
          <div className="flex animate-scroll">
            {caracteristicas.map((card) => (
              <Card card={card} key={card.title} />
            ))}
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center font-montserrat">
        <h1 className="mt-4 text-4xl font-bold text-center">
          Armoniza tu mente desde cualquier lugar
        </h1>
        <p className="text-center text-xl py-6 w-[100%] lg:w-[100vh]">
          Sumérgete en espacios virtuales que invitan a la calma. Disfruta
          paisajes envolventes para relajarte, viaja tranquilamente por ciudades
          remotas o entrena suavemente tu mente en ambientes virtuales diseñados
          especialmente para ti.
        </p>
        <div className="w-full overflow-x-scroll no-scrollbar ">
          <div className="flex flex-row  mx-auto justify-between py-12 px-10 gap-7 w-[100vh] lg:w-[1000px] xl:w-[1200px]">
            {videos.map((video, i) => (
              <Video
                key={i}
                video={video.video}
                title={video.title}
                texto={video.texto}
              />
            ))}
          </div>
        </div>
      </section>

      <UltimosBlogs />
    </>
  );
};

export default Home;
