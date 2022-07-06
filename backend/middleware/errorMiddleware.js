//functions that executes during the RQ and RS cycle

//this is to handle the POST
const errorHandler = (err, rq, rs, next) => {
  const statusCode = rs.statusCode ? rs.statusCode : 500;
  rs.status(statusCode);
  rs.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

module.exports = {
  errorHandler,
};
