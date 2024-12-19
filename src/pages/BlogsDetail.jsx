import { useParams } from "react-router-dom";
import { getPostById } from "../services/PostService";
import { useEffect, useState } from "react";

const BlogsDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState();
  let formattedDate = "Fecha inválida";
  // Validar el valor de postDate
  if (post) {
    const date = new Date(post.createdAt);

    // Verificar si la fecha es válida
    if (!isNaN(date.getTime())) {
      const dayShort = date.toLocaleDateString("es-ES", { weekday: "short" });

      formattedDate = `${dayShort}, ${date.toLocaleDateString(
        "es-ES"
      )}-${date.toLocaleTimeString("es-ES", {
        hour: "2-digit",
        minute: "2-digit",
      })}`;
    }
  }
  useEffect(() => {
    getPostById(id).then((response) => {
      setPost(response);
    });
  }, []);
  if (!post) {
    // Mostrar un estado de carga mientras `post` es null
    return <p>Cargando...</p>;
  }
  return (
    <div className="bg-geadiant-acento px-4 font-montserrat">
      <div className=" flex flex-col justify-center w-full lg:w-[100vh] py-28 mx-auto ">
        <h1 className="text-3xl py-2 font-bold">{post.title}</h1>
        <h1 className="py-6">
          {formattedDate}-{post.autor}
        </h1>
        <img src={post.imageUrl} alt={post.imageUrl} />
        <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
      </div>
    </div>
  );
};
export default BlogsDetail;
