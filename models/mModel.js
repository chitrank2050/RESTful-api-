var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var mSchema=new Schema({},{strict:false});

var mModel=mongoose.model('mModel',mSchema);
