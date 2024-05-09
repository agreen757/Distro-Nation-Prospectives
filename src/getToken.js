//module will make a request to the server to get the token
// eslint-disable-next-line no-undef
const API_KEY = process.env.API_KEY;
// eslint-disable-next-line no-unused-vars
function getToken() {
  const url =
    "https://cjed05n28l.execute-api.us-east-1.amazonaws.com/staging/ikey";
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    Authorization: API_KEY,
  };
  const options = {
    method: "get",
    headers: headers,
  };
  // eslint-disable-next-line no-undef
  const response = UrlFetchApp.fetch(url, options);
  const token = response.getContentText();
  return token;
}
// Path: src/Code.js
