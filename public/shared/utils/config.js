export const SERVER_URL = process.env.REACT_APP_SERVER_URL;
export const CLIENT_URL = process.env.REACT_APP_CLIENT_URL;

if (!SERVER_URL) {
  throw new Error('Set up SERVER_URL environment variable in package.json');
}

if (!CLIENT_URL) {
  throw new Error('Set up CLIENT_URL environment variable in package.json');
}

export const { NODE_ENV } = process.env;
// config should use named export as there can be different exports,
// just need to export default also because of eslint rules

export { SERVER_URL as default };
