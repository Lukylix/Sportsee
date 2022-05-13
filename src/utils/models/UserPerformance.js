class Performance {
  constructor({ value, kind }) {
    this.value = value;
    this.kind = kind;
  }
}

export default class UserPerformance {
  constructor({ userId, kind, data }) {
    this.userId = userId;
    this.kind = kind;
    this.data = data.map((performance) => new Performance(performance));
  }
}
