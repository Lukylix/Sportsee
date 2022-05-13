class UserInfos {
  constructor({ firstName, lastName, age }) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}

class keyData {
  constructor({ calorieCount, proteinCount, carbohydrateCount, lipidCount }) {
    this.calorieCount = calorieCount;
    this.proteinCount = proteinCount;
    this.carbohydrateCount = carbohydrateCount;
    this.lipidCount = lipidCount;
  }
}

export default class User {
  constructor({
    userId,
    userInfos: { firstName, lastName, age },
    todayScore,
    score,
    keyData: { calorieCount, proteinCount, carbohydrateCount, lipidCount },
  }) {
    this.userId = userId;
    this.userInfos = new UserInfos({ firstName, lastName, age });
    this.score = score || todayScore;
    this.keyData = new keyData({ calorieCount, proteinCount, carbohydrateCount, lipidCount });
  }
}
