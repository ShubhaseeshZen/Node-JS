const _ = require('lodash');
const axios = require("axios");
const cheerio = require("cheerio");


const compose = (...fns) => arg => {
  return **_.flattenDeep(fns).reduceRight((current, fn) => {
    if (_**.isFunction(fn)) return fn(current);
    throw new TypeError("compose() expects only functions as parameters.");
  }, arg);
};

const arrayPairsToObject = arr =>
  arr.reduce((obj, pair) => ({ ...obj, ...pair }), {});


const fromPairsToObject = compose(arrayPairsToObject, withoutNulls);


const sendResponse = res => async request => {
  return await request
    .then(data => res.json({ status: "success", data }))
    .catch(({ status: code = 500 }) =>
      res.status(code).json({ status: "failure", code, message: code == 404 ? 'Not found.' : 'Request failed.' })
    );
};

const fetchHtmlFromUrl = async url => {
  return await axios
    .get(enforceHttpsUrl(url))
    .then(response => cheerio.load(response.data))
    .catch(error => {
      error.status = (error.response && error.response.status) || 500;
      throw error;
    });
};






