import Cookies from 'js-cookie';

const COOKIE_NAME = 'auth_token';

// Function to check if the user is authenticated
export const isAuthenticated = (): boolean => {
  const token = Cookies.get(COOKIE_NAME);
  return !!token; // Convert to boolean
};

// Function to remove the authentication token from the cookie
export const removeAuthToken = (): void => {
  Cookies.remove(COOKIE_NAME);
};
