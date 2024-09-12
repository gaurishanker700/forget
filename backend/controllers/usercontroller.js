const User = require("../modal/usermodal");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const { register } = require("module");
// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: "gaurishanker97790@gmail.com",
//       pass: "drfflyfnrknwvyqe",
//     },
//   });
  

const Register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const userExist = await User.findOne({ email });
    if (userExist) return res.status(400).json({ msg: "User already exists" });
    const hashedpassword = await bcrypt.hashSync(password, 10);
    const users = await User.create({
      name,
      email,
      password: hashedpassword,
    });
    res.status(200).json({
      msg: "User register successfully",
      users,
    });
  } catch (error) {
    console.log("register error", error);
  }
};
const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExist = await User.findOne({ email });
    if (!userExist) return res.status(400).json({ msg: "User does not exist" });
    const isMatch = await bcrypt.compareSync(password, userExist.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid password" });
    const token = jwt.sign({ id: userExist._id }, process.env.SECRET_KEY);
    res.cookie("token", token, {
        expire: new Date(Date.now() + 1000 * 60 * 60 * 24),
        httpOnly: true,
      });
    res.status(200).json({ token });
  } catch (error) {
    console.log("login error", error);
  }
};
const Logout= (req, res) => {
    const token = req.cookies["token"]
    if(!token) return res.status(400).json({msg: "User is not logged"});
    console.log(token)
    res.clearCookie("token");
    res.status(200).json({msg: "User logged out"});
    
    
}

const ForgetPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const userExist = await User.findOne({ email });
    if (!userExist) return res.status(400).json({ msg: "User does not exist" });
    const token=jwt.sign({id:userExist._id},process.env.SECRET_KEY,{expiresIn:"1h"})
    
    // const mailOptions = {
    //     from: "gaurishanker97790@gmail.com",
    //     to: userExist.email,
    //     subject: 'Password Reset',
    //     html: `<p>You requested for password reset</p>
    //           <p>Click this <a href="http://127.0.0.1:5173/reset-password/${token}">link</a> to reset your password</p>`,
    //   };
  
    //   await transporter.sendMail(mailOptions);
  
      res.status(200).json({ message: 'Password reset link sent to your email',token });

  } catch (error) {
    console.log("forget password error", error);
  }
};
const resetPassword=async(req, res) => {
    const {token} = req.body
    const {password} = req.body
    try {
        const decoded= jwt.verify(token,process.env.SECRET_KEY)
        const userExist= await User.findOne({_id:decoded.id})
        if(!userExist) return res.status(400).json({msg: "User does not exist"})
           const hashedpassword=bcrypt.hashSync(password,10)
        userExist.password=hashedpassword
        await userExist.save()
        res.status(200).json({msg: "Password reset successfully"})



        
    } catch (error) {
        
    }
}

module.exports = { Register, Login,Logout,ForgetPassword,resetPassword };
