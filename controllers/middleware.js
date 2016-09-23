module.exports = {
  generateId(req, res, next){
    req.body._id = new Date();
    next()
  },
  verifyUser(req,res,next){
    if (req.params.userName == "Shea" && req.params.pin == 1983){
      next()
    }
    res.status(401).json({error: "User not allowed."})
  }
}
