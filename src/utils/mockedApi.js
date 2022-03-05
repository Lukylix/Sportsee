import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from "./data/MockedData";

/**
 * Retrieve data or send error message
 * @param {object} data
 * @returns {{error: null|string, data: object|null}}
 */
function handleNoData(data) {
  if (!data) {
    return { error: "Can not find user", data: null };
  }
  return { error: null, data };
}

/**
 * Retrieve the main user info (first name, last name, today score, ect...)
 * @param {number} id - user id
 * @returns {{error: null|string, data: {userId: number, userInfos: {firstName: string, lastName: string, age:number}, todayScore: number, keyData: {calorieCount: number, proteinCount: number, carbohydrateCount:number lipidCount:number}}|null}} user
 */
function getUser(id) {
  id = Number(id);
  return handleNoData(USER_MAIN_DATA.filter((user) => user.id === id).shift());
}

/**
 * @typedef SessionsActivity
 * @type {object}
 * @property {string} day - date
 * @property {number} kilogram
 * @property {number} calories
 */

/**
 * Retrieve the user activity (sessions)
 * @param {number} id
 * @returns {{error: null|string, data:{userId: number, sessions: SessionsActivity[]}|null}}
 */
function getUserActivity(id) {
  id = Number(id);
  return handleNoData(USER_ACTIVITY.filter((userActivity) => userActivity.userId === id).shift());
}

/**
 * @typedef SessionsAverage
 * @type {object}
 * @property {number} day - number of the day
 * @property {number} sessionLength
 */

/**
 * Retrive the average sessions length
 * @param {number} id
 * @returns {{error: null|string, data:{userId: number, sessions: SessionsAverage[]}|null}}
 */
function getUserAverageSession(id) {
  id = Number(id);
  return handleNoData(USER_AVERAGE_SESSIONS.filter((userActivity) => userActivity.userId === id).shift());
}

/**
 * @typedef Performance
 * @type {object}
 * @property {number} value
 * @property {number} kind
 */

/**
 * Retrieve the user performance score
 * @param {number} id
 * @returns {{error: null|string, data:{userId: number, kind: Object.<number, string>, data: Performance[]}|null}}
 */
function getUserPerformance(id) {
  id = Number(id);
  return handleNoData(USER_PERFORMANCE.filter((userPerformance) => userPerformance.userId === id).shift());
}

const mockedApi = {
  getUser,
  getUserActivity,
  getUserAverageSession,
  getUserPerformance,
};

export default mockedApi;
