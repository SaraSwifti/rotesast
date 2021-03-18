module.exports = 
{
  "development": {
    "username": "root",
    "password": process.env.myPassword,
    "database": "rotesast_event_db",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": process.env.myPassword,
    "database": "rotesast_event_db_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "use_env_variable": "JAWSDB_URL",
    "dialect": "mysql"
  }
}
