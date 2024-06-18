import { StatusCodes } from "http-status-codes";

const errorHandleMiddleware = (error, req, res, next) => {
  console.log(error);

  const defaultError = {
    statusCode: error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: error.message || "Something went wrong, try again",
  };
  if (error.name === "ValidationError") {
    (defaultError.statusCode = StatusCodes.BAD_REQUEST),
      (defaultError.msg = Object.values(error.errors)
        .map((err) => err.message)
        .join(", "));
  }

  if (error.code && error.code == 11000) {
    (defaultError.statusCode = StatusCodes.BAD_REQUEST),
      (defaultError.msg = `${Object.keys(
        error.keyValue
      )} field has to be unique`);
  }

  res.status(defaultError.statusCode).json({ msg: defaultError.msg });
};

export default errorHandleMiddleware;
