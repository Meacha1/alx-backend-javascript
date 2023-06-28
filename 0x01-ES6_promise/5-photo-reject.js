export default function uploadPhoto(filename) {
  return new Promise((reject) {
    reject = () => {
        console.log(`${filename} cannot be processed`);
    }
  });
}