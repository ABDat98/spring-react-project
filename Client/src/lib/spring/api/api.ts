import { IRegisterUser, ISignUser } from "@/types";



export const registerUser = async (userData: IRegisterUser) => {
  const response = await fetch("http://localhost:8080/api/v1/auth/register", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    const errorData = await response.json(); // Parse the server's error response
    const error = new Error(errorData.message || 'Failed to register');
    (error as any).status = response.status; // Attach status code to the error
    throw error;
  }

  return response.json(); // Return the response as JSON on success
};



  export const loginUser = async (userData: ISignUser) => {
    try {
      const response = await fetch("http://localhost:8080/api/v1/auth/authenticate", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
  
      // Check if response is okay (status in the range 200-299)
      if (!response.ok) {
        throw new Error('Failed to authenticate');
      }
  
      // Parse the response JSON
      const data = await response.json();
  
      // Check if the response data contains a token
      if (data.token) {
        localStorage.setItem("token", JSON.stringify(data));
      }
  
      return data; // Return the parsed response data
    } catch (error) {
      console.error('Error during login:', error);
      throw error; // Rethrow the error for handling in the caller
    }
  };



  export const fetchUserByToken = async () => {
    const token = localStorage.getItem('token');

    const response = await fetch('http://localhost:8080/api/v1/auth/me', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    
    if (!response.ok) {
        throw new Error('Failed to fetch user');
    }
    
    return response.json();
};


  export const logout = async () => {
    localStorage.removeItem("token");
  };
  