export default function uploadPhoto(filename) {
  return new Promise((reject) => {
    setTimeout(() => {
      reject(`Error: ${filename} cannot be processed`);
    }, 3000);
  });
}
