class SessionsActivity {
  constructor({ day, kilogram, calories }) {
    this.day = day;
    this.kilogram = kilogram;
    this.calories = calories;
  }
}

export default class UserActivity {
  constructor({ userId, sessions }) {
    this.userId = userId;
    this.sessions = sessions.map((session) => new SessionsActivity(session));
  }
}
