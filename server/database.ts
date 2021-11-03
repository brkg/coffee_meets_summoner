import {Pool} from 'pg';

var PG_URI = "postgres://anvykpcs:ymskvSrXKj085m6Rz5eaCd6sslGkeqIL@fanny.db.elephantsql.com/anvykpcs";

const pool = new Pool({
  connectionString: PG_URI
});

export default {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};