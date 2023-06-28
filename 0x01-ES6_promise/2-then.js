export default function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    if (success) {
      console.log('Got a response from the API');
      resolve({
        status: 200,
        body: 'success',
      });
    } else {
      console.log('Got a response from the API');  
      reject({
        body: 'error',
      });
      }
  });
}