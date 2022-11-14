import api from "./api";
import mockedApi from "./mockedApi";

/**
 * Retrieve the main user info (first name, last name, today score, ect...)
 * @callback getUser
 * @param {number} id - user id
 * @returns {{error: null|string, data: {userId: number, userInfos: {firstName: string, lastName: string, age:number}, todayScore: number, keyData: {calorieCount: number, proteinCount: number, carbohydrateCount:number lipidCount:number}}|null}} user
 */

/**
 * @typedef SessionsActivity
 * @type {object}
 * @property {string} day - date
 * @property {number} kilogram
 * @property {number} calories
 */

/**
 * Retrieve the user activity (sessions)
 * @callback getUserActivity
 * @param {number} id
 * @returns {{error: null|string, data:{userId: number, sessions: SessionsActivity[]}|null}}
 */

/**
 * @typedef SessionsAverage
 * @type {object}
 * @property {number} day - number of the day
 * @property {number} sessionLength
 */

/**
 * Retrive the average sessions length
 * @callback getUserAverageSession
 * @param {number} id
 * @returns {{error: null|string, data:{userId: number, sessions: SessionsAverage[]}|null}}
 */

/**
 * @typedef Performance
 * @type {object}
 * @property {number} value
 * @property {number} kind
 */

/**
 * Retrieve the user performance score
 * @callback getUserPerformance
 * @param {number} id
 * @returns {{error: null|string, data:{userId: number, kind: Object.<number, string>, data: Performance[]}|null}}
 */

/**
 * Retrieve data form api or mockedApi
 * @type {{getUser: getUser, getUserActivity: getUserActivity, getUserAverageSession: getUserAverageSession, getUserPerformance: getUserPerformance}|undefined}
 */
let dataProvider;

if (process.env.REACT_APP_DATA_SOURCE === "mock") dataProvider = mockedApi;
else if (process.env.REACT_APP_DATA_SOURCE === "api") dataProvider = api;
else throw new Error("Data source invalid. (see .env file)");

export default dataProvider;
