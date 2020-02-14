var express = require("express");

var router = express.Router();
// var db = require("../models");
var db= require("../models")
// console.log(db.Burger);

router.get("/", function (req, res) {
  db.Burger.findAll().then(function (data) {
    var result=[]
    for (let i=0;i<data.length;i++){
result.push( data[i].dataValues)

  }
let final={
  burgers : result

}
console.log();

    res.render("index", final);
    // res.json( data);
  });
});

router.post("/api/burgers", function (req, res) {
  db.Burger.create({
    name: req.body.name,
    eaten: req.body.eaten
  }).then(function (result) {
    res.end()
  });
});

router.put("/api/burgers/:id", function (req, res) {
  
console.log(req.body.eaten );

  // var condition = "id = " + req.params.id;
  db.Burger.update(
    {eaten: req.body.eaten },
    {where:{id: req.params.id}}
  ).then( function (result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  }).catch(function(err){
    console.log(err);
    
  });
});

router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  var eaten = req.body.eaten==="true"
  db.Burger.update({eaten:eaten}, {
    where:{
      id:req.params.id
    }
  }).then(function(results){
    res.json(results)
  })
});

//DELETE
router.delete("/api/burgers/:id", function(req, res) {
  db.Burger.destroy( {
    where:{
      id:req.params.id
    }
  }).then(function(results){
    if (result.affectedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
 
});

// Export routes for server.js to use.
module.exports = router;
