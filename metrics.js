var SDC = require('statsd-client')
sdc = new SDC({port: 8125});

// ---------------------- USER API CALLS ----------------------

//USER API CALL COUNT

sdc.increment("USER_POST")
sdc.increment("USER_GET")
sdc.increment("USER_PUT")

//USER API CALL TIMES

sdc.timing("USER_POST");
sdc.timing("USER_GET");
sdc.timing("USER_PUT");

//USER DATABASE TIMES

sdc.timing("DB_USER_POST");
sdc.timing("DB_USER_GET");
sdc.timing("DB_USER_PUT");

// ---------------------- FILE API CALLS ----------------------

//FILE API CALL COUNT

sdc.increment("FILE_POST")
sdc.increment("FILE_GET")
sdc.increment("FILE_DELETE")

//FILE API CALL TIMES

sdc.timing("FILE_POST")
sdc.timing("FILE_GET")
sdc.timing("FILE_DELETE")

//FILE DATABASE TIMES

sdc.timing("DB_FILE_POST")
sdc.timing("DB_FILE_GET")
sdc.timing("DB_FILE_DELETE")

module.exports = sdc;