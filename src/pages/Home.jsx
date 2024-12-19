import hero from "../assets/heroImg.png";
import Card from "../components/Card";
import caracteristicas from "../utils/CardData";
import videos from "../utils/VideoData";
import Video from "../components/Video";
import { useEffect, useState } from "react";
import { getPostPaginated } from "../services/PostService";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const [posts, setPosts] = useState();
  const page = 1;
  const limit = 4;
  useEffect(() => {
    getPostPaginated(page, limit).then((posts) => {
      setPosts(posts);
    });
  }, [page]);

  const navigate = useNavigate();

  const handleShowDetails = (num) => {
    navigate(`/blog/${num}`);
  };

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
          Mejora tu mente desde donde estés.
        </h1>
        <p className="text-center text-xl py-6 w-[100%] lg:w-[100vh]">
          Descubre experiencias únicas: relájate con paisajes increíbles desde
          casa, explora una ciudad lejana o entrena en un entorno virtual
          interactivo.
        </p>
        <div className="w-full overflow-x-scroll no-scrollbar ">
          <div className="flex flex-row  mx-auto justify-between py-12 px-10 gap-7 w-[100vh]">
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

      <section className="flex flex-col items-center justify-center font-montserrat">
        <h1 className="text-center text-4xl font-bold">
          Descubre nuestras novedades más recientes
        </h1>
        <div className="grid items-center justify-center grid-cols-1 my-8 md:grid-cols-2 xl:grid-cols-4 gap-4 xl:mx-auto">
          {posts &&
            posts.map((post, i) => (
              <div
                key={i}
                className="relative w-[250px] h-[250px] mb-10 rounded-lg overflow-hidden cursor-pointer"
                onClick={() => handleShowDetails(post._id)}
              >
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />

                <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-trasparent">
                  <h2 className="text-white absolute bottom-4 text-sm px-1">
                    {post.title}
                  </h2>
                  <p className="text-gray-200 absolute bottom-0 text-xs px-2">
                    {post.autor} -
                    {new Date(post.createdAt).toLocaleDateString("es-ES")}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </section>
    </>
  );
};

export default Home;
