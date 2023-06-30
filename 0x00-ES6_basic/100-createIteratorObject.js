export default function* createIteratorObject(report) {
  for (const employees of Object.values(report)) {
    for (const employee of employees) {
      yield employee;
    }
  }
}
