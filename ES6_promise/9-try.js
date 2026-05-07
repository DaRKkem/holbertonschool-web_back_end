// Executes a function and returns a queue with the result or error, and a processed message
export default function guardrail(mathFunction) {
    const queue = [];
    try {
        queue.push(mathFunction());
    } catch (error) {
        queue.push(error.toString());
    } finally {
        queue.push('Guardrail was processed')
    }
    return queue;
}
