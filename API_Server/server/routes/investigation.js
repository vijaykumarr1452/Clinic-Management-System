// var router = require('express').Router();
const db = require('../config/db');
const fs = require('fs');
const multer = require('multer');
const express = require('express');
const { Router } = require('express');
const UUID = require('uuid-generate')
// const req['uniqueId'] = UUID.generate()
var dicomParser = require('../../node_modules/dicom-parser/dist/dicomParser');
const ClinicManagement = db.clinicManagement;
const DoctorManagement = db.doctorManagement
// Load in Rusha so we can calculate sha1 hashes
//  var Rusha = require('../../node_modules/rusha/dist/rusha');
 const ejs = require("ejs");
 const axios = require('axios');
 var https = require('https')

 const nodemailer = require('nodemailer');




const app = express()

var storage = multer.diskStorage({

    destination: function(req, file, cb) {
        // const name = req.body;
         console.log(req.body.data)
        const obj =(JSON.stringify(req.body)); // req.body = [Object: null prototype] { title: 'product' }

console.log(obj,'----------------------'); // { title: 'product' }
        // console.log(file,(req.body).toString(),'------------------------')
        if (file.fieldname === 'hamatology' || file.fieldname === 'serology'|| file.fieldname === 'diabetes'|| file.fieldname === 'liver'|| file.fieldname === 'coagulation' 
        || file.fieldname ==='cardiac'|| file.filename ==='clinical' || file.filename === 'kidney' || file.filename === 'special' || file.filename === 'diagostic') {
      if(!fs.existsSync("./investion")) {
        fs.mkdir('./investion', {recursive:true}, (err)=>{
          if (err) {
              console.log("Parent directory issue") 
              return cb(null, false, new Error('Something Went wrong,please try again')); 
          }
        })
        if(!fs.existsSync(`./investion/${req['uniqueId']}`)) { 
          fs.mkdir(`./investion/${req['uniqueId']}`, {recursive:true}, (err)=>{
            if (err) {
              console.log("Children directory issue")
              return cb(null, false, new Error('Something Went wrong,please try again')); 
            } 
          })
       cb(null,`./investion/${req['uniqueId']}`);
        }
       
        if(!fs.existsSync(`./investion/${req['uniqueId']}/${file.fieldname}`)) { 
          fs.mkdir(`./investion/${req['uniqueId']}/${file.fieldname}`, {recursive:true}, (err)=>{
            if (err) {
              console.log("Children directory issue")
              return cb(null, false, new Error('Something Went wrong,please try again')); 
            } 
          })
        }
        console.log(`./investion/${req['uniqueId']}`)
        module.exports = { folderName: `./investion/${req['uniqueId']}` };
       return cb(null,`./investion/${req['uniqueId']}/${file.fieldname}`);
      }
      else {
        if(!fs.existsSync(`./investion/${req['uniqueId']}`)) { 
          fs.mkdir(`./investion/${req['uniqueId']}`, {recursive:true}, (err)=>{
            if (err) {
              console.log("Children directory issue")
              return cb(null, false, new Error('Something Went wrong,please try again')); 
            } 
          })
       cb(null,`./investion/${req['uniqueId']}`);
        }
       
        if(!fs.existsSync(`./investion/${req['uniqueId']}/${file.fieldname}`)) { 
          fs.mkdir(`./investion/${req['uniqueId']}/${file.fieldname}`, {recursive:true}, (err)=>{
            if (err) {
              console.log("Children directory issue")
              return cb(null, false, new Error('Something Went wrong,please try again')); 
            } 
          })
        }
        console.log(`./investion/${req['uniqueId']}`)
        module.exports = { folderName: `./investion/${req['uniqueId']}` };
       return cb(null,`./investion/${req['uniqueId']}/${file.fieldname}`);
    }
}
},
    filename: function (req, file, cb) {
        cb(null ,`${file.fieldname}`+'.png')
    }
});
  var Imagesupload = multer({ errorHandling: 'manual' , storage: storage })

  
   
  module.exports = function(app) {
    app.use(function (req, res, next) {
        req['uniqueId'] = UUID.generate()
        console.log(req['uniqueId'])
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
        res.setHeader('Access-Control-Allow-Methods', 'POST');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        res.setHeader('Access-Control-Allow-Credentials', true);
        next();
      });
      
    var Upload = Imagesupload.fields([{ name: 'hamatology', maxCount: 1 }, { name: 'serology', maxCount: 1 }, { name: 'diabetes', maxCount: 1 }, { name: 'liver', maxCount: 1 },{name:'coagulation',maxCount:1},
{name:'cardiac',maxCount:1},{name:'clinical',maxCount:1},{name:'kidney',maxCount:1},{name:'special',maxCount:1},{name:'diagostic',maxCount:1}]);
    
    app.post('/api/auth/investigationreport', Upload,async function  (req,res) {
  try{
 console.log(JSON.parse(req.body.data))
const investigationreport1=await db.investigationreport.create({
    investigationreport:(JSON.parse(req.body.data))
    
}) 
    return res.status(200).json({
        message:"success",
investigationreport:investigationreport1
})}
catch(err){
res.status(404)({message:"can't create investigationreport"})
console.log(err)
// const generate=await folders.map(async data => {
//     console.log(data)
//    if(data){
//        const imageToBase64 = require('image-to-base64');
//        const gen = await imageToBase64(`./profileImages/${folder}/${data}`)
//        // console.log(gen)
//        console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
//    return `${data}:${gen}`;
//      }
//    })
}})  
   }
   