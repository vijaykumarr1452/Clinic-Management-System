// var router = require('express').Router();
const db = require('../config/db');
const fs = require('fs');
const multer = require('multer');
// const express = require('express');
var express = require('express');
// var app = express();
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
 var cors = require("cors")

 const nodemailer = require('nodemailer');
const speciality = require('../models/speciality');
const { BlockList } = require('net');



// const app = express()

// var corsOptions = {
// 	origin: 'http://localhost:4200',
// 	optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
//   }


//   app.use(cors(corsOptions))
var storage = multer.diskStorage({

    destination: function(req, file, cb) {
        const name = req.body;
        if (file.fieldname === 'profileImage') {
      if(!fs.existsSync("./profileImages")) {
        fs.mkdir('./profileImages', {recursive:true}, (err)=>{
          if (err) {
              console.log("Parent directory issue") 
              return cb(null, false, new Error('Something Went wrong,please try again')); 
          }
        })
      }
      else {
        if(!fs.existsSync(`./profileImages/${req['uniqueId']}`)) { 
          fs.mkdir(`./profileImages/${req['uniqueId']}`, {recursive:true}, (err)=>{
            if (err) {
              console.log("Children directory issue")
              return cb(null, false, new Error('Something Went wrong,please try again')); 
            } 
          })
        }
        cb(null,`./profileImages/${req['uniqueId']}`);
        console.log(`${req['uniqueId']}..................`,'--------------------------')
        console.log(`./profileImages/${req['uniqueId']}`)
        module.exports = { folderName: `./profileImages/${req['uniqueId']}` };

    }
}
else if (file.fieldname === 'logoImage') {
    if(!fs.existsSync("./logoImages")) {
        fs.mkdir('./logoImages', {recursive:true}, (err)=>{
          if (err) {
              console.log("Parent directory issue") 
              return cb(null, false, new Error('Something Went wrong,please try again')); 
          }
        })
      }
      else {
        if(!fs.existsSync(`./logoImages/${req['uniqueId']}`)) {
          fs.mkdir(`./logoImages/${req['uniqueId']}`, {recursive:true}, (err)=>{
            if (err) {
              console.log("Children directory issue")
              return cb(null, false, new Error('Something Went wrong,please try again')); 
            } 
          })
        }
        cb(null,`./logoImages/${req['uniqueId']}`);
        console.log(`./logoImages/${req['uniqueId']}`)
        module.exports = { folderName: `./logoImages/${req['uniqueId']}` };
      }
}
},
    filename: function (req, file, cb) {
        console.log(Date.now())
        cb(null ,Date.now()+'.png')
        console.log(req.files,file,91,req.body)
        // fs.renameSync(req.files.path, req.body.profileImagesId)
    }
});
  var Imagesupload = multer({ errorHandling: 'manual' , storage: storage })

  var storage1 = multer.diskStorage({

    destination: function(req, file, cb) {
        const name = req.body;
        console.log(req.body,99)

        if (file.fieldname === 'profileImage') {
      if(!fs.existsSync("./profileImages")) {
        fs.mkdir('./profileImages', {recursive:true}, (err)=>{
          if (err) {
              console.log("Parent directory issue") 
              return cb(null, false, new Error('Something Went wrong,please try again')); 
          }
        })
      }
      else {
        if(!fs.existsSync(`./profileImages/${req.body.profileImagesId}`)) { 
          fs.mkdir(`./profileImages/${req.body.profileImagesId}`, {recursive:true}, (err)=>{
            if (err) {
              console.log("Children directory issue")
              return cb(null, false, new Error('Something Went wrong,please try again')); 
            } 
          })
        }
        cb(null,`./profileImages/${req.body.profileImagesId}`);
        console.log(`${req['uniqueId']}..................`,'--------------------------')
        console.log(`./profileImages/${req.body.profileImagesId}`)
        module.exports = { folderName: `./profileImages/${req.body.profileImagesId}` };

    }
}
else if (file.fieldname === 'logoImage') {
    if(!fs.existsSync("./logoImages")) {
        fs.mkdir('./logoImages', {recursive:true}, (err)=>{
          if (err) {
              console.log("Parent directory issue") 
              return cb(null, false, new Error('Something Went wrong,please try again')); 
          }
        })
      }
      else {
        if(!fs.existsSync(`./logoImages/${req.body.logoImagesId}`)) {
          fs.mkdir(`./logoImages/${req.body.logoImagesId}`, {recursive:true}, (err)=>{
            if (err) {
              console.log("Children directory issue")
              return cb(null, false, new Error('Something Went wrong,please try again')); 
            } 
          })
        }
        cb(null,`./logoImages/${req.body.logoImagesId}`);
        console.log(`./logoImages/${req.body.logoImagesId}`)
        module.exports = { folderName: `./logoImages/${req.body.logoImagesId}` };
      }
}
},
    filename: function (req, file, cb) {
        console.log(Date.now())
        cb(null ,req.body.name+'.png')
    }
});
  var Imagesupload1 = multer({ errorHandling: 'manual' , storage: storage1 })

  
   
  module.exports = function(app) {
    app.use(function (req, res, next) {
        req['uniqueId'] = UUID.generate()
       
        console.log(req['uniqueId'])
        console.log('asdddddd')

        console.log(req['uniqueId'])

  
        // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
        res.setHeader('Access-Control-Allow-Methods', 'POST');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        res.setHeader('Access-Control-Allow-Credentials', true);
        next();
      });
      
    var Upload = Imagesupload.fields([{ name: 'profileImage', maxCount: 1 }, { name: 'logoImage', maxCount: 1 }]);
    
    app.post('/api/auth/registration', Upload,async function  (req,res) {
     //app.post('/api/auth/registration', Imagesupload.single('uploadedImage'),async function  (req,res) {
        const{username,password,role,services,specialities,branch,} = req.body;
//console.log(JSON.parse(req.body.services))  
       
  
    if(role === 'CLINIC'){
      console.log(req.body,req.files.profileImage[0].destination)
      if(!fs.existsSync(`./profileImages/${req['uniqueId']}`)) { 
        fs.mkdir(`./profileImages/${req['uniqueId']}`, {recursive:true}, (err)=>{
          if (err) {
            console.log("Children directory issue")
            return cb(null, false, new Error('Something Went wrong,please try again')); 
          } 
        })
      }
      if(!fs.existsSync(`./logoImages/${req['uniqueId']}`)) {
        fs.mkdir(`./logoImages/${req['uniqueId']}`, {recursive:true}, (err)=>{
          if (err) {
            console.log("Children directory issue")
            return cb(null, false, new Error('Something Went wrong,please try again')); 
          } 
        })
      }
    // console.log(folderName)	
        var usernameIsValid = await ClinicManagement.findOne({
            where:{
      username:req.body.username
            },
        });
        
   if (!usernameIsValid) {
   
   
    
    // console.log(hospitalService)
     const createclinic=await ClinicManagement.create({
     ...req.body,
     profileImagesId: `${req['uniqueId']}`,
     logoImagesId: `${req['uniqueId']}`,
    
        })
        if(services)
        {
         //console.log
         console.log('********');
         // const serve = JSON.parse(req.body.services)
         //									let objlength = Object.keys(conclusionsComments[i]).length
         let totalCount = await db.services.findAndCountAll({
           where: {
             clinicId: req.body.id
           },
           raw: true
         });
         console.log(totalCount.count)
         if (totalCount.count > 0) {
           await db.services.destroy({
             where: {
               clinicId: req.body
               .id
             }
           })
         }
   
         for (i in services) {
           const createservice = await db.services.create({
             ...services[i],
             clinicId: req.body.id
           })
   
         }
        }
        if(specialities)
        {
         //console.log
         console.log('********');
      //									let objlength = Object.keys(conclusionsComments[i]).length
      let totalCount = await db.specialities.findAndCountAll({
        where: {
          clinicId: req.body.id
        },
        raw: true
      });
      console.log(totalCount.count)
      if (totalCount.count > 0) {
        await db.specialities.destroy({
          where: {
            clinicId: req.body.id
          }
        })
      }

      for (i in specialities) {
        const createspecialities = await db.specialities.create({
          ...specialities[i],
          clinicId: req.body.id
        })

      }
        }
       
 res.json({'message': 'File uploaded successfully!','user':req.body,'service':services,'specialities':specialities})
}
else{
 err	 => {
       res.status(500).send('Error -> ' + err);
   // return res.status(401).send({ auth: false, accessToken: null, message: "Username already exists!" ,status: 401,ash:req.body  });
 }
}
}
    if(role === 'DOCTOR'){
      console.log(req.body);
      console.log('.................');
        var usernameIsValid = await DoctorManagement.findOne({
            where:{
      username:req.body.username
            },
        });
        if (!usernameIsValid) {
    
        let totalCount = await DoctorManagement.findAndCountAll({
            where:{
      clinicId:req.body.clinicId
            },
            raw:true
        });
        console.log(totalCount.count)
    
        // if(totalCount.count<3){
           
    
        const createDoctor= await DoctorManagement.create({
         ...req.body,
         profileImagesId: `${req['uniqueId']}`,
          logoImagesId: `${req['uniqueId']}`,


        })
        if(branch)
        {
         //console.log
         console.log('**********************');
         //									let objlength = Object.keys(conclusionsComments[i]).length
               let totalCount =  await db.branches.findAndCountAll({
                 where:{
             docId:createDoctor.id},
                 raw:true
               });
               console.log(totalCount.count)
               if(totalCount.count>0){
            await db.braches.destroy({where:{
                         clinicId:createclinic.id}
             })
               }
     const branches = JSON.parse(req.body.branch)
               for(i in branches){
               const createbranch=	await db.branches.create({
                   ...branches[i],
                   docId:createDoctor.id
                           })
                       
         }
        }
        // 	// exit node.js app
        //sendEmail("clinicmanagement20@gmail.com,ysrysrysr@gmail.com,Khairuddin@valuedge-solutions.com,rvsairam239@gmail.com")
        sendEmail("clinicmanagement20@gmail.com,lavanya.thutta@gmail.com")
             res.json({'message': 'File uploaded successfully!','user':req.body,count:totalCount.count});
        
        
 

        }
    else{
        return res.status(401).send({ auth: false, accessToken: null, message: "Username already exists!" ,});
        // res.json({'message':'cannot enter',count:totalCount.count});
    }
}
    })
    var Upload1 = Imagesupload1.fields([{ name: 'profileImage', maxCount: 1 }, { name: 'logoImage', maxCount: 1 }]);

    app.put('/api/auth/updateclinic/:id',Upload1,async (req, res) => {
      try {
        const id = req.params.id;
        const { services, specialities } = req.body
        // const{ password} = req.body
        // const 
        const fetchMastterVariables = async () => {
          profileImagesId = req.body.profileImagesId[0]
        }
        console.log(req.body,req.body.profileImagesId[0],req.body.logoImage,299);
        console.log('------------------');
        // if(req.body.profileImage != undefined || req.body.logoImage != undefined){
          console.log(303)
        await ClinicManagement.update({
          ...req.body,
          // profileImagesId: `${req['uniqueId']}`,
          // logoImagesId: `${req['uniqueId']}`,
 
        },
          { where: { id: req.params.id } }
        )
      // }
      // else{
      //   await ClinicManagement.update({
      //     ...req.body,
 
      //   },
      //     { where: { id: req.params.id } }
      //   )
      // }
        console.log(JSON.parse(services),295,specialities,295)
        if(services != '[]')
        {
         //console.log
         console.log('********',324);
         // const serve = JSON.parse(req.body.services)
         //									let objlength = Object.keys(conclusionsComments[i]).length
         let totalCount = await db.services.findAndCountAll({
           where: {
             clinicId: req.params.id
           },
           raw: true
         });
         console.log(totalCount.count)
         if (totalCount.count > 0) {
           await db.services.destroy({
             where: {
               clinicId: req.params.id
             }
           })
         }
   const service = JSON.parse(services)
         for (i in service) {
           const createservice = await db.services.create({
             ...service[i],
             clinicId: req.params.id
           })
   
         }
        }
        if( specialities != '[]')
        {
         //console.log
         console.log('********',specialities,353);
      //									let objlength = Object.keys(conclusionsComments[i]).length
      let totalCount = await db.speciality.findAndCountAll({
        where: {
          clinicId: req.params.id
        },
        raw: true
      });
      console.log(totalCount.count)
      if (totalCount.count > 0) {
        await db.speciality.destroy({
          where: {
            clinicId: req.params.id
          }
        })
      }
console.log(specialities)
const special = JSON.parse(specialities)
      for (i in special) {
        const createspecialities = await db.speciality.create({
          ...special[i],
          clinicId: req.params.id
        })

      }
        }
        res.status(200).send({ message: "Clinic updated successfully" });
      } catch (err) {
        console.log(err);
        return res.send({ message: "cannot update" })
      }
    }
    )
app.put('/api/auth/updatedoctor/:id',Upload,async (req, res) => {
  try {
    const id = req.params.id;

    const { bbranch, password } = req.body
   await DoctorManagement.update({
      ...req.body,
      profileImagesId: `${req['uniqueId']}`,
      logoImagesId: `${req['uniqueId']}`,
    },
      { where: { id: req.params.id } }
    )
    if (bbranch) {
      let totalCount = await db.branches.findAndCountAll({
        where: {
          docId: req.params.id
        },
        raw: true
      });
      console.log(totalCount.count)
      if (totalCount.count > 0) {
        await db.branches.destroy({
          where: {
            docId: req.params.id
          }
        })
      }

      for (i in bbranch) {

        const createbranch = await db.branches.create({
          ...bbranch[i],
          docId: req.params.id
        })

      }
    }

    res.status(200).send({ message: "Doctor updated successfully" });

  } catch {

  }})
app.get('/api/profileImage/:folder', async function(req, res, next) {
    const folder = req.params.folder
       const path = require('path');
           var obj    = {};
           console.log(req.params.folder)
       var fileNames = [];
       const folders  = fs.readdirSync(`./profileImages/${folder}`);
   
           console.log(folders)
           fs.readdir(`./profileImages/${folder}`, function (err,files ) {
   
         files.forEach(function (err, file) {
   
           obj.files  = file;
            console.log(obj.files)
           name = `./profileImages/${folder}/${file}`;
           
           Promise.all(files).then(name => {
   
             name = `./profileImages/${folder}/${file}`;
                        console.log(`./profileImages/${folder}/${file}.png`) 
                         res.set('Content-Type');
              res.send({status:200,'message' :'file sent',path:[`./profileImages/${folder}/${file}.png`],path1:folders});
   
         }).catch(error => {
             res.status(400).json("name");
       });
       })
       
      })
   });
   app.post('/api/post/lvmotion/:id', Upload,async function  (req,res) {
    //app.post('/api/auth/registration', Imagesupload.single('uploadedImage'),async function  (req,res) {
      try{
        const patient = await db.patientmodel.findOne({where:{id:req.params.id},raw:true})
        console.log(req.body.f1,'=-0-=-0=')
     
     fs.writeFile(`./lvmotion/${patient.dicomImagesId}.txt`,(req.body.base64), function (err) {
         if (err) throw err;
         console.log(err)
       });
       const lvm = await db.lvmotion.findAndCountAll({where:{patientId:req.params.id},raw:true})
       console.log(lvm)
       if(lvm.count >= 1){
        const lvmotion = await db.lvmotion.update({
          lvmotiondata : JSON.parse(req.body.f1), 
          lvmotionId : patient.dicomImagesId
        },{where:{
          patientId:req.params.id
        }})
       }
       else{
       const lvmotion = await db.lvmotion.create({
         lvmotiondata : JSON.parse(req.body.f1),
         patientId : req.params.id,
         lvmotionId : patient.dicomImagesId
       })
      }
      return res.json({"message":"lv motion svaed successfully"})
      }
      catch(err){
        console.log(err)
      }
   })
   /////////////////////////edit video screenshot
  //  app.post('/api/post/editImage/:id', Upload,async function  (req,res) {
  //   //app.post('/api/auth/registration', Imagesupload.single('uploadedImage'),async function  (req,res) {
  //     try{
  //       const patient = await db.patientmodel.findOne({where:{id:req.params.id},raw:true})
  //       console.log(req.body.f1,'=-0-=-0=')
  //       const imgdata = req.body.base64
  //       const base64Data = imgdata.replace(/^data:([A-Za-z-+/]+);base64,/, '');
  //       fs.writeFile(`./videoImages/${patient.dicomImagesId}.png`, base64Data, 'base64', (err) => {
  //           console.log(err);
  //       });
  //    fs.writeFile(`./patientImage/${patient.dicomImagesId}.txt`,(req.body.base64), function (err) {
  //        if (err) throw err;
  //        console.log(err)
  //      });
  //      const lvm = await db.lvmotion.findAndCountAll({where:{patientId:req.params.id},raw:true})
  //      console.log(lvm)
  //      if(lvm.count >= 1){
  //       const lvmotion = await db.lvmotion.update({
  //         lvmotiondata : JSON.parse(req.body.f1), 
  //         lvmotionId : patient.dicomImagesId
  //       },{where:{
  //         patientId:req.params.id
  //       }})
  //      }
  //      else{
  //      const lvmotion = await db.lvmotion.create({
  //        lvmotiondata : JSON.parse(req.body.f1),
  //        patientId : req.params.id,
  //        lvmotionId : patient.dicomImagesId
  //      })
  //     }
  //     }
  //     catch(err){
  //       console.log(err)
  //     }
  //  })
  
   }
   async function  sendEmail(toEmail,value){

     var transporter = nodemailer.createTransport({
       host: 'smtp.gmail.com',
       port: 465,
       secure: true,
       service: 'gmail',
       auth:{
       user:'gummadidhalavishal@gmail.com',
       pass:'ghldwbkwrsjrmrhv'
       }
     });
     ejs.renderFile(__dirname + "/doctorAssign.ejs", { variables: value }, async function (err, data) {
       if (err) {
           console.log(err);
           //console.log(variables)
       } else {
         var mailOptions = {
           priority: 'high',
           from: 'gummadidhalavishal@gmail.com',
           to: toEmail,
           subject: 'New Case Assigned',
          html: data,
         }
       const result =   await transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
    });
       }
   });
     }


     async function sendTextmessage(value) {
      
       console.log(value)
       axios({
         "url": `https://api.karix.io/message/`,
         "method": "POST",
         "headers": {
             "Content-Type": 'application/json',
             "Authorization": "Basic ODBlMzdkM2UtNmUyYS00OWIxLWE1OTItMTk0MWVkZmM2MjA3Ojk5YTUwN2EzLWFmYzctNDY2NS04YTk2LWZmYzkwMDczOGNmZg=="
         },
         data: {
             "channel": "sms",
             "source": "+918143381405",
             "destination": "+918125256939",
             "content": {
             "text": "Hey Doctor, a new case is assigned to you from ClinicManagement"
             }
         }
     })
     .then(response => {
        return response
     })
     .catch(error => {
         console.log('error',error);
     })
    
     //   const options = {
     //     path: 'https://api.karix.io/message/',
     //     method: 'POST',
     //     headers: {
     //       "Content-Type": "application/json",
     //       "Authorization": "Basic ODBlMzdkM2UtNmUyYS00OWIxLWE1OTItMTk0MWVkZmM2MjA3Ojk5YTUwN2EzLWFmYzctNDY2NS04YTk2LWZmYzkwMDczOGNmZg=="
     //     },
     //     body: {
     //       "channel": "sms",
     //       "source": "+918143381405",
     //       "destination": [value],
     //       "content": {
     //       "text": "Hey Doctor, a new case is assigned to you from ClinicManagement"
     //       }
     //   }
     // }

       
     //   https.request(options, res => {
     //     console.log(`statusCode: ${res.statusCode}`)
     //     return res
     //   })
     }
     async function  sendEmail1(toEmail,data){

      var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        service: 'gmail',
        auth:{
        user:'gummadidhalavishal@gmail.com',
        pass:'ghldwbkwrsjrmrhv'
        }
      });
      var mailOptions = {
        from: 'gummadidhalavishal@gmail.com',
        to: 'gummadidhalavishal@gmail.com',
        subject: 'Patient Contacted You',
        text: `Patient Name:${data.name}\nEmaiId : ${data.emailId}\nPhone no : ${data.phoneno}\nPurpose: ${data.purpose}`
      };
      ejs.renderFile(__dirname + "/contactUs.ejs", { variables: data }, async function (err, data) {
        if (err) {
            console.log(err);
            //console.log(variables)
        } else {
          var mailOptions = {
            priority: 'high',
            from: 'gummadidhalavishal@gmail.com',
            to: 'gummadidhalavishal@gmail.com',
            subject: 'New Case Assigned',
           html: data,
          }
        const result =   await transporter.sendMail(mailOptions, (error, info) => {
         if (error) {
             return console.log(error);
         }
         console.log('Message %s sent: %s', info.messageId, info.response);
     });
        }
    });
      
      }
      async function  sendEmail3(data,email){

        var transporter = nodemailer.createTransport({
          host: 'smtp.gmail.com',
          // port: 465,
          secure: true,
          service: 'gmail',
          auth:{
          user:'gummadidhalavishal@gmail.com',
          pass:'ghldwbkwrsjrmrhv'
          }
        });
        const images = await data.map(data=>{
          const path = require('path');
          console.log(data,'email3')
          // if(path.extname(data.path) === '.webm'){
            {return {path:data.path ,filename: `${data.data.fileName}.jpeg`,related : false,}}
          // }
         
          // else{
          //   {return {path:data.path,related : false,}}
          // }
        })
        console.log(images,9999)
        var mailOptions = {
         
          from: 'gummadidhalavishal@gmail.com',
          to: email,
          subject: 'EXPERTS OPINION',
          
          // html: 'Embedded image: <a> src="http://localhost:8080/api/get1/42/1.2.840.113619.2.400.40518272.1591077382.0.10.dcm.jpeg"></a>',
          attachments: images
};
     
        transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
          }
        })

      }
      module.exports.sendEmail3 = sendEmail3

      module.exports.sendEmail1 = sendEmail1
     module.exports.sendEmail = sendEmail
   module.exports.textMessage = sendTextmessage

     // module.exports= {
     //   'sendEmail': sendEmail,
     //   'textMessage': sendTextmessage
     // }