import axios from "axios";

const host = process.env.REACT_APP_API_HOST;
const port = process.env.REACT_APP_API_PORT;
/**
 * Retrieve the main user info (first name, last name, today score, ect...)
 * @param {number} id - user id
 * @returns {{error: null|string, data: {userId: number, userInfos: {firstName: string, lastName: string, age:number}, todayScore: number, keyData: {calorieCount: number, proteinCount: number, carbohydrateCount:number lipidCount:number}}|null}} user
 */
async function getUser(id) {
  try {
    console.log(`http://${host}:${port}/user/${id}`);
    const res = await axios.get(`http://${host}:${port}/user/${id}`);
    return { data: res.data.data, error: null };
  } catch (error) {
    return { data: null, error: error.message };
  }
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
async function getUserActivity(id) {
  try {
    const res = await axios.get(`${host}:${port}/user/${id}/activity`);
    return { data: res.data.data, error: null };
  } catch (error) {
    return { data: null, error: error.message };
  }
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
 * @returns {{error: null | string, data:{userId: number, sessions: SessionsAverage[]}|null}}
 */
async function getUserAverageSession(id) {
  try {
    const res = await axios.get(`${host}:${port}/user/${id}/average-sessions`);
    return { data: res.data.data, error: null };
  } catch (error) {
    return { data: null, error: error.message };
  }
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
async function getUserPerformance(id) {
  try {
    const res = await axios.get(`${host}:${port}/user/${id}/performance`);
    return { data: res.data.data, error: null };
  } catch (error) {
    return { data: null, error: error.message };
  }
}

const api = {
  getUser,
  getUserActivity,
  getUserAverageSession,
  getUserPerformance,
};

export default api;
