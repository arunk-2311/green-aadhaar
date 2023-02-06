const config = require("../config/auth.config");
const db = require("../models");
const Credit = db.credit
const jwt = require("jsonwebtoken");

exports.addCredit = async (req,res) => {
  const token = req.headers["x-access-token"];
  const userId = getUserId(token)

  const credit = new Credit({
      from : userId,
      qty : req.body.quantity,
      code : req.body.code,
      type : req.body.type,
      to : req.body.to,
  })

  // console.log(subscriber)

  try{
      const newCredit = await credit.save()
      res.status(201).json(newCredit)
  }catch(err){
      res.status(500).json({message : err.message})
  }
}


exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = async (req, res) => {
  // res.status(200).send("User Content.");
  
  const token = req.headers["x-access-token"];
  const userId = getUserId(token)

  try{
      var query = { from : userId }
      const newCredit = await Credit.find(query)
      res.status(201).json(newCredit) 
  }catch(err){
      res.status(500).json({message : err.message})
  }  

};

exports.adminBoard = async (req, res) => {
  // res.status(200).send("Admin Content.");

  try{
      const newCredit = await Credit.find()
      res.status(201).json(newCredit) 
  }catch(err){
      res.status(500).json({message : err.message})
  }  

};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};

function getUserId(token){
  const decoded = jwt.verify(token, config.secret);  
  var userId = decoded.id  
  console.log(userId)
  return userId  
}