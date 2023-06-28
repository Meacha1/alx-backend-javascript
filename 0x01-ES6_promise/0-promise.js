export default function getResponseFromAPI() {
  return new Promise((resolve) => {
    // preform API request or asynchronous aperation
    setTimeout(() => {
      resolve('API response data');
    }, 2000);
  });
}
