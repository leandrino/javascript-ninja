function createQueue() {
  const queue = [];
  return {
    enqueue(item) {
      return queue.unshift(item);
    },
    dequeue() {
      return queue.pop();
    },
    peek() {
      return queue[queue.length - 1];
    },
    getLength() {
      return queue.length;
    },
    isEmpty() {
      return queue.length === 0;
    }
  };
}

const q = createQueue();

q.enqueue('Hello');
q.enqueue('Leandrino');
q.enqueue('How are you?');
console.log(q.isEmpty());
q.dequeue();
console.log(q.getLength());
console.log(q.peek());
q.dequeue();
console.log(q.peek());
console.log(q.getLength());
