const L = require('./index');
const List = L.LinkedList;
const Node = L.Node;

test('List is a class', () => {
  expect(typeof List.prototype.constructor).toEqual('function');
});

test('Node is a class', () => {
  expect(typeof Node.prototype.constructor).toEqual('function');
});

describe('A Node', () => {
  test('has properties "data" and "next"', () => {
    const node = new Node('a', 'b');
    expect(node.data).toEqual('a');
    expect(node.next).toEqual('b');
  });
});

describe('InsertLast', () => {
  test('adds to the end of the list', () => {
    const l = new List();
    l.append('a');

    l.append('b');

    expect(l.tail.data).toEqual('b');
  });
});

describe('GetAt', () => {
  test('returns the node at given index', () => {
    const l = new List();
    expect(l.getAt(10)).toEqual(null);

    l.append(1);
    l.append(2);
    l.append(3);
    l.append(4);

    expect(l.getAt(0).data).toEqual(1);
    expect(l.getAt(1).data).toEqual(2);
    expect(l.getAt(2).data).toEqual(3);
    expect(l.getAt(3).data).toEqual(4);
  });
});

describe('pop', () => {
  test('pops an item off', () => {
    const l = new List();
    expect(l.getAt(10)).toEqual(null);

    l.append(1);
    l.append(2);
    l.append(3);
    l.append(4);

    expect(l.pop().data).toEqual(4);
    expect(l.tail.data).toEqual(3);
  });
});

describe('RemoveAt', () => {
  test('removeAt doesnt crash on an empty list', () => {
    const l = new List();
    expect(() => {
      l.removeAt(0);
      l.removeAt(1);
      l.removeAt(2);
    }).not.toThrow();
  });

  test('removeAt doesnt crash on an index out of bounds', () => {
    const l = new List();
    expect(() => {
      const l = new List();
      l.unshift('a');
      l.removeAt(1);
    }).not.toThrow();
  });

  test('removeAt deletes the first node', () => {
    const l = new List();
    l.append(1);
    l.append(2);
    l.append(3);
    l.append(4);
    expect(l.getAt(0).data).toEqual(1);
    l.removeAt(0);
    expect(l.getAt(0).data).toEqual(2);
  });

  test('removeAt deletes the node at the given index', () => {
    const l = new List();
    l.append(1);
    l.append(2);
    l.append(3);
    l.append(4);
    expect(l.getAt(1).data).toEqual(2);
    l.removeAt(1);
    expect(l.getAt(1).data).toEqual(3);
  });

  test('removeAt works on the last node', () => {
    const l = new List();
    l.append(1);
    l.append(2);
    l.append(3);
    l.append(4);
    expect(l.getAt(3).data).toEqual(4);
    l.removeAt(3);
    expect(l.getAt(3)).toEqual(null);
  });
});

describe('InsertAt', () => {
  test('inserts a new node with data at the 0 index when the list is empty', () => {
    const l = new List();
    l.insertAt(0,'hi');
    expect(l.head.data).toEqual('hi');
    expect(l.tail.data).toEqual('hi');
  });

  test('inserts a new node with data at the 0 index when the list has elements', () => {
    const l = new List();
    l.append('a');
    l.append('b');
    l.append('c');
    l.insertAt(0,'hi');
    expect(l.getAt(0).data).toEqual('hi');
    expect(l.getAt(1).data).toEqual('a');
    expect(l.getAt(2).data).toEqual('b');
    expect(l.getAt(3).data).toEqual('c');
  });

  test('inserts a new node with data at a middle index', () => {
    const l = new List();
    l.append('a');
    l.append('b');
    l.append('c');
    l.append('d');
    l.insertAt(2,'hi');
    expect(l.getAt(0).data).toEqual('a');
    expect(l.getAt(1).data).toEqual('b');
    expect(l.getAt(2).data).toEqual('hi');
    expect(l.getAt(3).data).toEqual('c');
    expect(l.getAt(4).data).toEqual('d');
  });

  test('inserts a new node with data at a last index', () => {
    const l = new List();
    l.append('a');
    l.append('b');
    l.insertAt(2,'hi');
    expect(l.getAt(0).data).toEqual('a');
    expect(l.getAt(1).data).toEqual('b');
    expect(l.getAt(2).data).toEqual('hi');
  });

  test('insert a new node when index is out of bounds', () => {
    const l = new List();
    l.append('a');
    l.append('b');
    l.insertAt(30,'hi');

    expect(l.getAt(0).data).toEqual('a');
    expect(l.getAt(1).data).toEqual('b');
    expect(l.getAt(2).data).toEqual('hi');
  });
});

describe('Average', () => {
  test('average', () => {
    const l = new List();
    l.append(1);
    l.append(10);
    l.append(13);
    expect(l.average()).toEqual(8);
  });
});

describe('Reverse', () => {
  test('reverse', () => {
    const l = new List();
    l.append(1);
    l.append(10);
    l.append(13);
    l.append(22);
    l.reverse();
    console.log(l)
    expect(l.getAt(0).data).toEqual(22);
    expect(l.getAt(1).data).toEqual(13);
    expect(l.getAt(2).data).toEqual(10);
    expect(l.getAt(3).data).toEqual(1);
  });
});

