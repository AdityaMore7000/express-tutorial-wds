const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("User List");
});

router.get("/new", (req, res) => {
  res.send("New User Form");
});

router.post('/',(req,res)=>{
    res.send('Create a new user');
})

router.get('/:id',(req,res)=>{
    res.send('User get '+req.params.id)
})
module.exports = router;