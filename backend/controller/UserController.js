import User from "../model/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
// token function
const createToken = (user) => {
  const payload = {
    id: user._id.toString(),
  };

  const token = jwt.sign(payload, "secret");

  return token;
};

export const register = async (req, res) => {
  try {
    const UserExist = await User.findOne({ email: req.body.email });
    if (UserExist) {
      return res.status(400).send({ msg: "Email already exists" });
    }

    const hashPassword = await bcrypt.hash(req.body.password, 10);

    if (req.file) {
      req.body.photo = req.file.filename;

      const user = await User.create({ ...req.body, password: hashPassword });
      await user.save();

      const { password, ...others } = user._doc;
      const token = createToken(user);
      return res.status(201).json({ others, token });
    } else {
      const user = await User.create({ ...req.body, password: hashPassword });
      await user.save();

      const { password, ...others } = user._doc;
      const token = createToken(user);
      return res.status(201).json({ others, token });
    }
  } catch (error) {
    return res.status(409).json({ msg: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).json({ msg: "Invalid Credentials" });
    }

    const comparePass = await bcrypt.compare(req.body.password, user.password);

    if (!comparePass) {
      return res.status(404).json({ msg: "Invalid Credentials" });
    }

    const { password, ...others } = user._doc;
    const token = createToken(user);
    return res.status(200).json({ others, token });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

export const getUsers = async (req, res) => {
  try {
    const data = await User.find();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ error: error });
  }
};

export const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await User.findById(id);
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ error: error });
  }
};

export const getUserByEmail = async (req, res) => {
  try {
    const email = req.params.email;
    const data = await User.findOne({ email: email });
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ error: error });
  }
};

export const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    if (req.file) {
      req.body.photo = req.file.filename;
      const data = await User.findByIdAndUpdate(id, req.body, { new: true });
      return res.status(200).send(data);
    } else {
      const data = await User.findByIdAndUpdate(id, req.body, { new: true });
      return res.status(200).send(data);
    }
  } catch (error) {
    res.status(500).send({ error: error });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await User.findByIdAndDelete(id);
    res.status(200).send({ msg: "Deleted success" });
  } catch (error) {
    res.status(500).send({ error: error });
  }
};

// Change Password
export const changePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;
    const user = await User.findById(req.body._id);
    if (!user) return res.status(404).json({ msg: "User not found" });
    const comparePass = await bcrypt.compare(oldPassword, user.password);

    if (!comparePass)
      return res.status(404).json({ msg: "Invalid Old password" });

    const hashPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashPassword;
    await user.save();
    res.status(200).json(user);
  } catch (err) {
    return res.status(500).json({ msg: err.msg });
  }
};
