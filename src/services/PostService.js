const API_URL = `https://tranquiliza360-pps-back.vercel.app/api`;

export const getPost = async () => {
  try {
    const response = await fetch(`${API_URL}/posts/`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
};
