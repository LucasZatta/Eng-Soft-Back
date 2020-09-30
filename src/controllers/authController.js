const User = require("../models/user");
const bcrypt = require('bcrypt');

module.exports.register = async function (req, res) {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password,10);
    console.log(hashedPassword);
    req.body.password = hashedPassword;
    const user = await User.create(req.body);
    console.log({ user });

    return res.send({ user });
  } catch (err) {
    return res.status(400).send(err);
  }
};

module.exports.getUsers = async function (req, res) {
  try {
    if(req.body.name != ""){
      const users = await User.find();
      if(!users){
        return res.status(404).json({ success: false, error: "Failed to fetch users"})
      }
      return res.status(200).json({ success: true, data: users });
    }
    
  } catch (err) {
    return res.status(400).json({ success: false, error: err });
  }
};
//getUserbyID
module.exports.getUserID = async function (req, res) {
  try {
    const user = await User.findOne({ cpf: req.body.cpf }); //req.params.body -> fetches using whats on the url
    if(!user){
      return res.status(404).json({success: false, error: "User not found"});
    }
    return res.status(200).json({ success: true, data: user });
  } catch (err) {
    return res.status(400).json({ success: false, error: err });
  }
};
//deleteUserbyID

module.exports.deleteUser = async function ( req, res){
  try {
    const user = await User.findOneAndDelete({ cpf: req.body.cpf });
    if(!user){
      return res.status(404).json({success: false, error: "Could not find requested document"});
    }
    return res.status(200).json({success:true, msg: "User deleted", data: user});
  }catch(err){
    return res.status(400).json({ success: false, error: err});
  }
}

module.exports.logInAuth = async function ( req, res ){
  try {
    console.log(req.body);
   const user = await User.findOne({email: req.body.username});
   console.log(user);
   console.log(user.password);
   console.log(req.body.password);
   if(user){
      const match = await bcrypt.compare(req.body.password,user.password);
      console.log(match);
      if(match == true){
        return res.status(200).json({ success : true, data: user});
      }
      else{
        return res.status(404).json({ success : false, error: "Password not matched"});
      }
   }
   else{
     return res.status(400).json({ success : false, error: "user not found"});
   } 

  }catch(err){
    return res.status(400).json({ success: false, error: err});
  }
}
// module.exports.logInAuth = async function ( req, res ){
//   try {
//     const user = await User.findOne({email: req.body.username});
//      if(user){
//        console.log()
//        bcrypt.compare(req.body.password, user.password, (err,same)=> {
//          if(err){
//            return res.status(400).json({ success: false, error: err});
//          }
//          if(same == true){
//            return res.status(200).json({ success: true, message: "Password matches", data: user});
//          }
//          else{
//             return res.status(403).json({ success: false, message: "Password incorrect"});
//          }
//        });
//      }
//     return res.status(404).json({ success: false, error: "User not Found"});
//   }catch(err){
//     return res.status(400).json({success: false, error: err});
//   }
// }