const API_URL = `https://tranquiliza360-pps-back.vercel.app/api`;
//http://localhost:5000/api
//https://tranquiliza360-pps-back.vercel.app/api
export const getPost = async () => {
  try {
    const response = await fetch(`${API_URL}/posts/`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
};

export const postPost = async (formData) => {
  console.log(...formData.entries());
  try {
    const response = await fetch(`${API_URL}/posts/`, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Post response data:", data);
    return data;
  } catch (err) {
    console.error("Error posting post:", err);
  }
};

export const deletePost = async (id) => {
  try {
    const response = await fetch(`${API_URL}/posts/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        //Authorization: `Bearer ${localStorage.getItem("token")}`, // Incluye el token si es necesario
      },
    });
    console.log(response);
    return response;
  } catch (err) {
    console.error("Error deleting post:", err);
  }
};

export const updatePost = async (id, formData) => {
  console.log(...formData.entries());
  try {
    const response = await fetch(`${API_URL}/posts/${id}`, {
      method: "PUT",
      body: formData,
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Post response data:", data);
    return data;
  } catch (err) {
    console.error("Error posting post:", err);
  }
};

export const getPostById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/posts/id/${id}`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Error deleting post:", err);
  }
};
