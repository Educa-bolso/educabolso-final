import { isExpired, decodeToken } from 'react-jwt';

export default function isAuthenticated() {
  const authToken = sessionStorage.getItem('@token');

  if (!authToken) return false;

  const decoded = decodeToken(authToken);
  const expired = isExpired(authToken);

  if (!decoded || expired) return false;
  else return true;
}
