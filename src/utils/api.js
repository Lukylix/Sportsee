import axios from "axios";

const host = process.env.REACT_APP_API_HOST || "localhost";
const port = process.env.REACT_APP_API_PORT || 3000;

const client = axios.create({
  baseURL: `http://${host}:${port}`,
});

/**
 * Create an handled api endpoint.
 * @param {function} func a async function with axios call inside it
 * @returns {function(...args): {data: any|null, error: null|string}} an api endpoint (async function with error handling accepting parameters)
 */
const createApiCall =
  (func) =>
  async (...args) => {
    try {
      const res = await func(...args);
      return { data: res.data.data, error: null };
    } catch (error) {
      return {
        data: null,
        error: error.message,
      };
    }
  };

/**
 * Retrieve the main user info (first name, last name, today score, ect...)
 * @param {number} id - user id
 * @returns {{error: null|string, data: {userId: number, userInfos: {firstName: string, lastName: string, age:number}, todayScore: number, keyData: {calorieCount: number, proteinCount: number, carbohydrateCount:number lipidCount:number}}|null}} user
 */
const getUser = createApiCall(async (id) => await client.get(`/user/${id}`));

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
const getUserActivity = createApiCall(async (id) => await client.get(`/user/${id}/activity`));

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
const getUserAverageSession = createApiCall(async (id) => await client.get(`/user/${id}/average-sessions`));

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
const getUserPerformance = createApiCall(async (id) => await client.get(`/user/${id}/performance`));

const api = {
  getUser,
  getUserActivity,
  getUserAverageSession,
  getUserPerformance,
};

export default api;
