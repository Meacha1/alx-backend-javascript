export default getFullResponseFromAPI(success) {
  return new Promise((resolve) => {
    if (success) {
      resolve({
        status: 200,
        body: 'Success'
      });
      resolve(response);
    } else {
        const error = new Error('The fake API is not working currently');
        reject(error)
      };
    });
};
