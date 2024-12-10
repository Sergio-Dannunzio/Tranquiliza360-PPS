import { useParams } from "react-router-dom";
import { getPostById } from "../services/PostService";
import { useEffect, useState } from "react";

const BlogsDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState();

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
    <div className="w-full flex flex-col justify-center">
      <h1>{post.title}</h1>
      <img src={post.imageUrl} alt={post.imageUrl} />
      <p dangerouslySetInnerHTML={{ __html: post.content }}></p>
    </div>
  );
};
export default BlogsDetail;
