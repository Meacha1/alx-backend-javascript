export default function uploadPhoto(filename) {
  return Promise((reject) => {
    reject(new Error(`${filename} cannot be processed`));
  });
}
