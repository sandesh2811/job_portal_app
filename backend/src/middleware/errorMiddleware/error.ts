import { ErrorRequestHandler } from "express";

const errorMiddleware: ErrorRequestHandler = (err, req, res, next) => {
  res.status(404).json({ message: err });
};

export default errorMiddleware;
