// errorMiddleware.js

const notFound = (req, res, next) => {
    const error = new Error(`NOT FOUND - ${req.originalUrl}`);
    res.status(404);
    next(error);
  };
  
  // Middleware to handle errors
  const errorHandler = (error, req, res, next) => {
    if (res.headerSent) {
      return next(error);
    }
  
    res
      .status(error.code || 500)
      .json({ message: error.message || "An unknown error occurred" });
  };
  
  module.exports = { notFound, errorHandler };
  