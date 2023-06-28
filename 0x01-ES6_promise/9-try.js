export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const result = mathFunction();
    queue.push(result);
    return queue;
  } catch (error) {
    queue.push(error.toString());
  }
  queue.push('Guardrail was processed')

}