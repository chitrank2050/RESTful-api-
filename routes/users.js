var express = require('express');
var router = express.Router();
var bodyParser=require('body-parser');
var mongoose=require('mongoose');
var mModel=require('../models/mModel.js');


router.use((req,res,next)=>{
	console.log('Getting request...!!!!');
	next();
});


/* GET users listing. */
router.get('/:user/:collection',(req, res, next)=>{
	var collectionName=req.params.user+'.'+req.params.collection;
 	mongoose.model('mModel',collectionName).find((err,data)=>{
 		if (err) {
		 	return res.send(500, { error: err });
		 }
		else{
 			res.json(data);
 		}
  });
});


/*GET element by ID*/
router.get('/:user/:collection/:id',(req,res,next)=>{
	var collectionName=req.params.user+'.'+req.params.collection;
 	mongoose.model('mModel',collectionName).findById(req.params.id,(err,data)=>{
 		if (err) {
		 	return res.send(500, { error: err });
		 }
		else {
 		res.json(data);
 		}
  });
});


/*Update an Item*/
router.put('/:user/:collection/:id',(req,res,next)=>{
	var collectionName=req.params.user+'.'+req.params.collection;
 	mongoose.model('mModel',collectionName).findOneAndUpdate({_id: req.params.id},req.body,(err,data)=>{
		 if (err) {
		 	return res.send(500, { error: err });
		 }
	 	else res.send("Update Successful");
  });
});

/*POST user data*/
router.post('/:user/:collection',(req,res,next)=>{
	var collectionName=req.params.user+'.'+req.params.collection;
	var data=req.body;
	var api=mongoose.model('mModel',collectionName);
	var task=new api(data);
	task.save();
	res.send(Successful);
});

/*DELETE an item*/
router.delete('/:user/:collection/:id',(req,res,next)=>{
	var collectionName=req.params.user+'.'+req.params.collection;
 	mongoose.model('mModel',collectionName).findById(req.params.id).remove().exec();
 	res.send("Successful Delete");

});

module.exports = router;
