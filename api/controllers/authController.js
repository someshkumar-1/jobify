import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, UnauthenticatedError } from "../error/index.js";

const register = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    throw new BadRequestError("Please provide valid values");
  }

  const user = await User.create(req.body);
  const token = user.createJWT();
  res.status(StatusCodes.CREATED).json({
    user: { name: user.name, lastName: user.lastName, email: user.email },
    location: user.location,
    token,
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new BadRequestError("Please provide valid values");
  }
  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    throw new UnauthenticatedError("Invalid email");
  }

  const isCorrectPassword = await user.comparePassword(password);
  if (!isCorrectPassword) {
    throw new UnauthenticatedError("Invalid Password");
  }
  const token = user.createJWT()

  res.status(StatusCodes.OK).json({
    user: { name: user.name, lastName: user.lastName, email: user.email },
    location: user.location,
    token,
  });
  
};
const updateUser = async (req, res) => res.send("update user");

export { register, login, updateUser };
