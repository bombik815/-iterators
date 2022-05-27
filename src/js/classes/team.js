import Person from './Person';

export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('Такой персонаж уже есть!');
    }
    return this.members.add(character);
  }

  addAll(...character) {
    const arr = [...character];
    for (const c of arr) {
      this.members.add(c);
    }
  }

  toArray() {
    return Array.from(this.members);
  }

  [Symbol.iterator]() {
    const range = this.toArray();
    let count = 0;
    return {
      next: () => ({
        // eslint-disable-next-line no-plusplus
        value: new Person(range[count++]),
        done: count > range.length,
      }),
    };
  }
}
