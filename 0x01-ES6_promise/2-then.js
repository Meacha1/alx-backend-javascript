export default function handleResponseFromAPI(promise) {
  promise
    .then(() => {
      const response = {
        status: 200,
        message: 'success',
      };
      console.log('Got a response from the API');
      return response;
    })
    .catch(() => {
      const reject = new Error('Error');
      console.log('Got a response from the API');
      return reject;
    });
}
