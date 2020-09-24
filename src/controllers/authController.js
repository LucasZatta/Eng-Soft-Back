const User =  require('../models/user');

module.exports.register = async function (req,res){
    try {
        const user = await User.create(req.body);
        console.log({user});

        return res.send({ user });
    } catch(err){
        return res.status(400).send(err);
    }
};

//login controller