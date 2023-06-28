function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
        // preform API request or asynchronous aperation
        setTimeout(() => {
            resolve("API response data");
        }, 2000);
    });
}


export default getResponseFromAPI;