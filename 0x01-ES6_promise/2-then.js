export default function handleResponseFromAPI(promise) {
  promise
    .then(() => {
        console.log('Got a response from the API')
        return ({
            status: 200,
            message: 'Success',
        })
    })
    .catch(() => {
      console.log('Got an error from the API')
      return ({
        message: 'Error',
      })
    });
}