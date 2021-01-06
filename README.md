### Create an .js called dbConfig inside server/db an fill it like following:
  `module.exports = {
  user: "root",
  password: "your_password_here",
  host: "localhost",
  database: "online_retail_db",
  };
  `
### To boot the project, `yarn start` on `/server`.
### `/client` is for front-end development only and is not connected to any database.
### After each change done on front-end you MUST `yarn build` on `/client` and then copy `build` folder into `/server`. 
