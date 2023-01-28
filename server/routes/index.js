const express = require("express");
const router = express.Router();

exports.loginRoute = router.post('/login', require('./../controller/auth').handleLoginUser);


