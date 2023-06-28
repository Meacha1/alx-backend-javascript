import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((results) => ({
      return results.map((result) => ({
        return {
          status: result.status,
          value: result.status === 'fulfilled' ? result.value : result.reason,
        }
      }))
    }));
}
//7:7  error  Parsing error: Unexpected keyword 'return'