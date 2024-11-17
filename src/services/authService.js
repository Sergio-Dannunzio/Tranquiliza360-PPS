

const API_URL = `https://tranquiliza360-pps-back.vercel.app/api`;


export const loginUser = async (values) => {
    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: values.email,
          password: values.password,
        }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        const message = errorData.message || 'Error durante el inicio de sesión';
        console.error('Error durante el inicio de sesión:', message);
        throw new Error(message);
      }
  
      const data = await response.json();
      const token = data.token;
      localStorage.setItem('token', token);
      return { token };
    } catch (error) {
      console.error('Error durante el inicio de sesión:', error.message || error);
      throw new Error(error.message || 'Error durante el inicio de sesión');
    }
  };



const getToken = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    console.error("Token no disponible");
  }
  return token;
};

