var bcrypt = require('bcryptjs');
const { User } = require('../../model/User');

const handleLoginUser = async (req, res) => {
    if (!req?.body?.password) return res.status(400).json({
        message: 'koo passwordet noob!'
    });
    const salt = await bcrypt.genSalt(10)
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    console.log(hashedPass);

    res.status(200).json({
        message: hashedPass + 'resid !'
    })
}

module.exports = {
    handleLoginUser
}