import { AuthApiData } from '../../interface/AuthApiData';
import { FetchOptions } from '../../interface/FetchOptions';

const profile = async (
  firstname: string,
  lastname: string,
  gender: string,
  birthdate: string,
  email: string,
  phoneno: string,
  whereyoulive: string,
  describeyourself: string,
): Promise<AuthApiData> => {
  const fetchOptions: FetchOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ firstname, lastname, gender, birthdate, email, phoneno, whereyoulive, describeyourself }),
    credentials: 'include',
  };
  return await fetch(`/auth/register`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
};

export default profile;
