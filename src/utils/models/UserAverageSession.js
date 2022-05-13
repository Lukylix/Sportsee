class SessionsAverage {
  constructor({ day, sessionLength }) {
    this.day = day;
    this.sessionLength = sessionLength;
  }
}

export default class UserAverageSession {
  constructor({ userId, sessions }) {
    this.userId = userId;
    this.sessions = sessions.map((session) => new SessionsAverage(session));
  }
}
