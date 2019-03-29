import test from 'tape';

import Queue from '../exercises/queue';

test('Queue', t => {
  const queue = new Queue();

  queue.enqueue(1);
  queue.enqueue(2);

  t.equal(queue.peek(), 1, 'peek works');
  t.equal(queue.dequeue(), 1, 'dequeu works');
  t.equal(queue.peek(), 2, 'peek still works');
  t.equal(queue.dequeue(), 2, 'and dequeu works also');

  t.end();
});
