import User from "../model/user.model.js";
export const homeFunction = (req, res) => {
  res.json({
    success: true,
    message: "auth route is running",
  })
}
export const createUser = async (req, res) => {
  const {name ="", email ="", password =""} = req.body || {
    name: "",
    email: "",
    password: ""
  }
  if (email == undefined ||email.length ==0) {
    return res.json({
      success: false,
      message: "email is required"
    })
  }
  if (!validateEmail(email)) {
    return res.status(400).json({
      success: false,
      message: "Invalid email format"
    })
  }
  if (name == undefined || name.length ==0) {
    return res.status(400).json({
      success: false,
      message: "name is required"
    })
  }
  if (password == undefined || password.length ==0) {
    return res.status(400).json({
      success: false,
      message: "password is required"
    })
  }
if (password.length < 6 || password.length > 20) {
    return res.status(400).json({
      success: false,
      message: "password must be between 6 and 20 characters long"
    })
  }
 const hashedPass = await hashPassword(password);
  const newUser = new User({
    name,
    email,
    password: hashedPass
  })
  
  const record = await newUser.save();
  console.log(record);
   res.json({
    success: true,
    message: "user created successfully",
    result: record
  })}
  export const getAllUser = async (req, res) => {
    try {
      const users = await User.find();
      res.json({
        success: true,
        result: users,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };   
