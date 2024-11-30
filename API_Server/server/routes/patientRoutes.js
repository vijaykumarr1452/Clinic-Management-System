// var router = require('express').Router();
const db = require('../config/db');
const fs = require('fs');
const multer = require('multer');
const express = require('express');
const { Router, json } = require('express');
const UUID = require('uuid-generate')
// const req['uniqueId'] = UUID.generate()
var dicomParser = require('../../node_modules/dicom-parser/dist/dicomParser');
const Patient = db.patientmodel;
// Load in Rusha so we can calculate sha1 hashes
// var Rusha = require('../../node_modules/rusha/dist/rusha');
// var dicomjs = require('dicomjs');
//  var htmlToJson = require('html-to-json');
const { rootCertificates } = require('tls');
const { iteratee, uniqueId } = require('lodash');

let { PythonShell } = require('python-shell')

// const { DecayCorrected } = require('dicom/lib/tags');
const app = express()
var dicomImageStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (!fs.existsSync("./directory")) {
      fs.mkdir('./directory', { recursive: true }, (err) => {
        if (err) {
          console.log("Parent directory issue")
          return cb(null, false, new Error('Something Went wrong,please try again'));
        }
      })

    }
    else {
      if (!fs.existsSync(`./directory/${req['uniqueId']}`)) {
        fs.mkdir(`./directory/${req['uniqueId']}`, { recursive: true }, (err) => {
          if (err) {
            console.log("Children directory issue")
            return cb(null, false, new Error('Something Went wrong,please try again'));
          }
        })


      }
      cb(null, `./directory/${req['uniqueId']}`);
      console.log(`./directory/${req['uniqueId']}`)
      module.exports = { folderName: `./directory/${req['uniqueId']}` };
    }
  },

  filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(' ').join('-');
    // console.log(file,'lin352')
//     if(file.mimetype === 'video/x-ms-wmv'){
//       file.mimetype = 'video/mp4'
//       var replaceExt = require('replace-ext')
//       console.log(file,'vishal')
//       var path = `./directory/${req['uniqueId']}/${fileName}`;
// var newPath = replaceExt(path, '.mp4');
 
// console.log(newPath,95);
//       // fs.rename(`${fileName}`, `${fileName}.mp4`, function (err) {
//       //   if (err) throw err;
//       //   console.log('File Renamed.');
//       // });
//     }
    cb(null, fileName)
  }

});

var dicomupload = multer({ errorHandling: 'manual', storage: dicomImageStorage })
var editImageStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (!fs.existsSync("./videoImages")) {
      fs.mkdir('./videoImages', { recursive: true }, (err) => {
        if (err) {
          console.log("Parent directory issue")
          return cb(null, false, new Error('Something Went wrong,please try again'));
        }
      })

    }
    else {
      if (!fs.existsSync(`./videoImages/${req['uniqueId']}`)) {
        fs.mkdir(`./videoImages/${req['uniqueId']}`, { recursive: true }, (err) => {
          if (err) {
            console.log("Children directory issue")
            return cb(null, false, new Error('Something Went wrong,please try again'));
          }
        })


      }
      cb(null, `./videoImages/${req['uniqueId']}`);
      console.log(`./videoImages/${req['uniqueId']}`)
      module.exports = { folderName: `./videoImages/${req['uniqueId']}` };
    }
  },

  filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(' ').join('-');
    // console.log(fileName,'lin352')
    
    cb(null, fileName)
  }

});

var editupload = multer({ errorHandling: 'manual', storage: editImageStorage })

module.exports = function (app) {
  app.use(function (req, res, next) {
    req['uniqueId'] = UUID.generate()
    console.log(req['uniqueId'])

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });
  app.post('/api/addpatient1/:id', dicomupload.array("uploads[]", 120), async function GetDicomData(req, res) {
    const multipart = require('connect-multiparty');
    //const req['uniqueId'] = require('../router/routes/router')
    const multer = require('multer');


    console.log(req['uniqueId'])


    // Function to calculate the SHA1 Hash for a buffer with a given offset and length
    // function sha1(buffer, offset, length) {
    //   offset = offset || 0;
    //   length = length || buffer.length;
    //   var subArray = dicomParser.sharedCopy(buffer, offset, length);
    //   var rusha = new Rusha();
    //   return rusha.digest(subArray);
    // }

    // Read the DICOM P10 file from disk into a BufPfer
    // async function GetDicomData(directoryName) {
    //   console.log('-------------++++++++++++========')
    //   console.log(directoryName)
    //   fs.readdir(directoryName, (err, fileNames) => {
    //     fileNames.forEach((filename) => {
    //       fs.readFile(directoryName, 'base64', (err, base64Data) => {
    //         // Do your thing with the file data.
    //         console.log(base64Data, '++++++++++++++++++++++++++++')
    //       });
    //     });
    //   });

    //   let dataSet_list = [];
    //   fs.readdirSync(directoryName).forEach(function (name, index) {
    //     var filePath = process.argv[10] || `${directoryName + '/' + name}`;
    //     console.log("++++++++++++++++++")
    //     console.log(name)
    //     var dicomFileAsBuffer = fs.readFileSync(directoryName + '/' + name);

    //     // Print the sha1 hash for the overall file
    //     // console.log('File SHA1 hash = ' + sha1(dicomFileAsBuffer));

    //     // Parse the dicom file
    //     try {
    //       var dataSet = dicomParser.parseDicom(dicomFileAsBuffer);
    //       dataSet_list.push(dataSet);
    //       for (i in dataSet.elements.x0040a043.items[0].elements)
    //         console.log(data.string(dataSet.elements.xx0040a043.items[0].elements[i]))
    //       // print the patient's name
    //       var patientName = dataSet.string('x00100010');
    //       console.log('Patient Name = ' + patientName);

    //       // Get the pixel data element and calculate the SHA1 hash for its data
    //       var pixelData = dataSet;
    //       var pixelDataBuffer = dicomParser.sharedCopy(dicomFileAsBuffer, pixelData.dataOffset, pixelData.length);
    //       console.log('Pixel Data length = ', pixelDataBuffer.length);
    //       console.log("Pixel Data SHA1 hash = ", sha1(pixelDataBuffer));


    //       if (pixelData.encapsulatedPixelData) {
    //         var imageFrame = dicomParser.readEncapsulatedPixelData(dataSet, pixelData, 0);
    //         console.log('Old Image Frame length = ', imageFrame.length);
    //         console.log('Old Image Frame SHA1 hash = ', sha1(imageFrame));

    //         if (pixelData.basicOffsetTable.length) {
    //           var imageFrame = dicomParser.readEncapsulatedImageFrame(dataSet, pixelData, 0);
    //           console.log('Image Frame length = ', imageFrame.length);
    //           console.log('Image Frame SHA1 hash = ', sha1(imageFrame));
    //         } else {
    //           var imageFrame = dicomParser.readEncapsulatedPixelDataFromFragments(dataSet, pixelData, 0, pixelData.fragments.length);
    //           console.log('Image Frame length = ', imageFrame.length);
    //           console.log('Image Frame SHA1 hash = ', sha1(imageFrame));
    //         }
    //       }
    //       else {
    //         dicomjs.parse(dicomFileAsBuffer, async function (err, dcmData) {
    //           dicom = require("dicom")
    //           var decoder = dicom.decoder({
    //             guess_header: true
    //           });

    //           //to do rename of the file measurements.dcm


    //           var encoder = new dicom.json.JsonEncoder();
    //           //console.log(encoder)
    //           var print_element = function (json, elem) {
    //             // for(i in json)
    //             console.log(json, '=========================]')
    //             fs.writeFile(`./profileImages/${req['uniqueId']}.txt`, json, function (err) {
    //               if (err) throw err;
    //               console.log(err)
    //             });
    //             console.log(json['0040A730'])
    //             console.log(dicom.json.get_value(json), '---------------------------');
    //           };

    //           var sink = new dicom.json.JsonSink(function (err, json) {
    //             if (err) {
    //               console.log("Error:", err);
    //               process.exit(10);
    //             }


    //             fs.writeFile(`./profileImages/${req['uniqueId']}.txt`, JSON.stringify(json), function (err) {
    //               if (err) throw err;
    //               console.log(err)
    //             })

    //             fs.writeFile(`./profileImages/${req['uniqueId']}.txt`, json, function (err) {
    //               console.log(json)
    //               if (err) throw err;
    //               console.log(err)
    //             });

    //           });

    //           require("fs").createReadStream(process.argv[2] || `${directoryName + '/' + name}`).pipe(decoder).pipe(encoder).pipe(sink);
    //           ///////////////////////////////////////
    //           for (i in dcmData)
    //             for (var key in dcmData.dataset) {

    //               if (!dcmData.dataset[key].isSequence && !dcmData.dataset[key].isPixelData) {
    //                 if (dcmData.dataset[key].tag == '60051010') {
    //                   const xmlToJson = require('xml-to-json-stream');
    //                   const parser = xmlToJson({ attributeMode: false });
    //                   const xml = `${dcmData.dataset[key].value}`
    //                   parser.xmlToJson(xml, (err, json) => {
    //                     if (err) {
    //                       console.log(err)
    //                     }

    //                     //console.log(JSON.stringify(json))
    //                     // fs.writeFile(`./profileImages/${req['uniqueId']}.txt`, JSON.stringify(json), function (err) {
    //                     //   if (err) throw err;
    //                     //    console.log(err)
    //                     // });
    //                   })
    //                   var convert = require('xml-js');

    //                   var result1 = convert.xml2json(xml, { compact: true, spaces: 4 });
    //                   var result2 = convert.xml2json(xml, { compact: false, spaces: 4 });
    //                   //console.log(result1)
    //                   // fs.writeFile(`./profileImages/${req['uniqueId']}.json`, `${result1}`, function (err) {
    //                   //   if (err) throw err;
    //                   //   console.log(err)
    //                   //   console.log('File is created successfully.');
    //                   // });
    //                 }
    //               }
    //             }
    //         })
    //       }
    //     }
    //     catch (err) {
    //       console.log(err);
    //     }
    //   })
    //   let patientObj = {};

    //   // console.log(dataSet_list[0])
    //   dataSet_list.map(data => {
    //     patientObj.name = data.string('x00100010');
    //     patientObj.age = data.string('x00101010	');
    //     patientObj.hospitalname = data.string('x00080080');
    //     patientObj.testdate = data.string('x00080023');
    //     patientObj.dob = data.string('x00101030');
    //     patientObj.height = data.string('x00101020');
    //     patientObj.mobileNumber = data.string('x00102154');
    //     patientObj.bmi = data.string('x00101022');
    //     patientObj.examinedDate = data.string('x00180015');
    //     patientObj.window = data.string('x00281050');
    //     patientObj.bp = data.string('x00080020')
    //       ;
    //     patientObj.weight = data.string('x00101030');

    //     patientObj.gender = data.string('x00100040');
    //     //    patientObj.vk= data.string('x00080104').value
    //     // for( i in data.string('x0040a730'))
    //     // console.log((data.elements.x0040a043.items[0].dataSet.elements.x00080100.tag))
    //   })
    //   console.log(patientObj)
    //   return patientObj

    // }

 
    // let measurementdata = measurement.push(data=>{
    //   return data
    // })

    // exports.createPatient = async  function GetDicomData(req,res) {
    if (req.uploadError) {
      return res.end('Error uploading in dicom images')
    }
    let patientObj = await GetDicomData(`./directory/${req['uniqueId']}`)
    //Rename the dicom files here 
  // fs.readdirSync(`./directory/${req['uniqueId']}`).forEach(async function (name, index) {
  //     var oldfilepath = `./directory/${req['uniqueId']}/${name}`
  //     // var newfilepath = `./directory/${req['uniqueId']}/${index}.dcm`
  //     // fs.renameSync(oldfilepath, newfilepath)
  //     fileLength = fs.readdirSync(`./directory/${req['uniqueId']}`).length
    
  //   let file_path = oldfilepath
  //   // const dicOutput = await readDicom(file_path)
  //   console.log(file,275)
  //   if(dicOutput.success) {
  //     console.log(dicOutput.results[0].dcmType)
  //     if(dicOutput.results[0].dcmType === 'data'){
  //     fs.writeFile(`./measurement/${req['uniqueId']}.txt`, JSON.stringify(dicOutput.results[0]), function (err) {
  //       if (err) throw err;
  //       console.log(err)
  //     });
  //   }
  //   // else{
  //   //   fs.writeFile(`./measurement/data(${req['uniqueId']}).txt`, JSON.stringify(dicOutput.results[0]), function (err) {
  //   //     if (err) throw err;
  //   //     console.log(err)
  //   //   });
  //   // }
  //       // console.log(dicOutput.results[0],'========================')
  //   }
  // })
    let p = await Patient.create({
      patientname: patientObj.name,
      gender: patientObj.gender,
      height: patientObj.height,
      weight: patientObj.weight,
      testdate: patientObj.testdate,
      clinicId: req.params.id,
      //type: req.file.mimetype,
      dicomImagesId: req['uniqueId'],   //mapping the patient to dicom images 
      status: 'created',
      length: fileLength,
    }).then((patient) => {
      // console.log(req.file.mimetype)
      res.send({ 'message': 'patient uploaded successfully!', 'user': patientObj.name, status: 200 });
    });
    return p
  }
  );
  //server.js
  app.post('/api/post/editImage/:id', editupload.array("uploads[]", 120),async function  (req,res) {
    //app.post('/api/auth/registration', Imagesupload.single('uploadedImage'),async function  (req,res) {
      try{
        const patient = await db.patientmodel.findOne({where:{id:req.params.id},raw:true})
        console.log((JSON.parse(req.body.filename)),'=-0-=-0=333')
        const imgdata = JSON.parse(req.body.base64)
        fs.mkdir(`./videoImages/${patient.dicomImagesId}`, { recursive: true }, function(err) {
          if (err) {
            console.log(err)
          } else {
            console.log("New directory successfully created.")
          }
        })
        const base64Data = imgdata.replace(/^data:([A-Za-z-+/]+);base64,/, '');
        fs.writeFile(`./videoImages/${patient.dicomImagesId}/${JSON.parse(req.body.filename)}.png`, base64Data, 'base64', (err) => {
            console.log(err,3573);
        });
        const screenshots = await db.imageScreenshot.create({
          filename:JSON.parse(req.body.filename),
          imageId :patient.dicomImagesId,
          patientId:req.params.id
        })
    //  fs.writeFile(`./patientImage/${patient.dicomImagesId}.txt`,(req.body.base64), function (err) {
    //      if (err) throw err;
    //      console.log(err)
    //    });
      //  const lvm = await db.lvmotion.findAndCountAll({where:{patientId:req.params.id},raw:true})
      //  console.log(lvm)
      //  if(lvm.count >= 1){
      //   const lvmotion = await db.lvmotion.update({
      //     lvmotiondata : JSON.parse(req.body.f1), 
      //     lvmotionId : patient.dicomImagesId
      //   },{where:{
      //     patientId:req.params.id
      //   }})
      //  }
      //  else{
      //  const lvmotion = await db.lvmotion.create({
      //    lvmotiondata : JSON.parse(req.body.f1),
      //    patientId : req.params.id,
      //    lvmotionId : patient.dicomImagesId
      //  })
      // }
      let filepath = `./videoImages/${patient.dicomImagesId}/${JSON.parse(req.body.filename)}.png`
      return res.sendFile(filepath,{ root:'.' })
      }
      catch(err){
        console.log(err)
      }
   })
   app.post('/api/save/editedImage/:id', editupload.array("uploads[]", 120),async function  (req,res) {
    //app.post('/api/auth/registration', Imagesupload.single('uploadedImage'),async function  (req,res) {
      try{
        const patient = await db.patientmodel.findOne({where:{id:req.params.id},raw:true})
        // console.log((req.body),'=-0-=-0=','417')
        const imgdata = JSON.parse(req.body.base64)
        if(JSON.parse(req.body.filename)==='referralImage.jpeg')
        {
          fs.mkdir(`./referralImages/${patient.dicomImagesId}`, { recursive: true }, function(err) {
            if (err) {
              console.log(err)
            } else {
              console.log("New directory successfully created.")
            }
          })
          const base64Data = imgdata.replace(/^data:([A-Za-z-+/]+);base64,/, '');
          // console.log(base64Data)
          fs.writeFile(`./referralImages/${patient.dicomImagesId}/${JSON.parse(req.body.filename)}`, base64Data, 'base64', (err) => {
              console.log(err,357);
          });
          const screenshots = await db.editedImages.create({
            filename:JSON.parse(req.body.filename),
            imageId :patient.dicomImagesId,
            patientId:req.params.id
          })
   
        // let filepath = `./editedImages/${patient.dicomImagesId}/${req.body.filename}.png`
        return res.json({"message":"sucess"})
        }
        else{
                  fs.mkdir(`./editedImages/${patient.dicomImagesId}`, { recursive: true }, function(err) {
          if (err) {
            console.log(err)
          } else {
            console.log("New directory successfully created.")
          }
        })
        const base64Data = imgdata.replace(/^data:([A-Za-z-+/]+);base64,/, '');
        // console.log(base64Data)
        fs.writeFile(`./editedImages/${patient.dicomImagesId}/${JSON.parse(req.body.filename)}.png`, base64Data, 'base64', (err) => {
            console.log(err,357);
        });
        const screenshots = await db.editedImages.create({
          filename:JSON.parse(req.body.filename),
          imageId :patient.dicomImagesId,
          patientId:req.params.id
        })
 
      // let filepath = `./editedImages/${patient.dicomImagesId}/${req.body.filename}.png`
      return res.json({"message":"Saved Edited Images"})
      }
      }
      catch(err){
        console.log(  )
      }
   })
// SET STORAGE
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (!fs.existsSync("./directory")) {
      fs.mkdir('./directory', { recursive: true }, (err) => {
        if (err) {
          console.log("Parent directory issue")
          return cb(null, false, new Error('Something Went wrong,please try again'));
        }
      })

    }
    else {
      if (!fs.existsSync(`./directory/${req['uniqueId']}`)) {
        fs.mkdir(`./directory/${req['uniqueId']}`, { recursive: true }, (err) => {
          if (err) {
            console.log("Children directory issue")
            return cb(null, false, new Error('Something Went wrong,please try again'));
          }
        })


      }
      cb(null, `./directory/${req['uniqueId']}`);
      console.log(`./directory/${req['uniqueId']}`)
      module.exports = { folderName: `./directory/${req['uniqueId']}` };
    }
  },
  filename: function (req, file, cb) {
    console.log(file,343)
    // if(file.mimetype === 'application/json'){
      
    // cb(null, file.originalname +'.txt' )
    // }
  
    //     else{
      cb(null, file.originalname )
    // }
  }
})
var upload = multer({ dest: './directory' })
app.post('/api/addpatient2/:id', upload.array("uploads[]", 12), (req, res, next) => {
  const file = req.files
  
  if (!file) {
    const error = new Error('Please upload a file')
    error.httpStatusCode = 400
    return next(error)
  }
  // console.log(349)
    res.send(file)
  
})

app.post('/api/addpatient/:id',
async function GetDicomData(req, res) {
  var upload = multer({
      storage: storage}).array('uploads[]',100);
  upload(req, res, function(err) {
    const file = req.files
    console.log(req.files,349)
    
    file.map(data=>{
      console.log(data)
      let i = 0;
      try{
      console.log(i,data.mimetype,376)
      if(data.mimetype==='application/json' && i==0 || data.mimetype === 'text/plain' && i==0)
      {
        // console.log(isPlayed,378)
      i++
        console.log(i,380)
     const mes=  JSON.parse(fs.readFileSync(`${data.destination}/${data.filename}`,'utf8'))
  //   //  for(i in mes)var isPlayed = true;
  //  console.log(mes,1111)
  isPlayed = true;
  var dateFormat = require('dateformat');
  var format = require('date-fns/format');
     const measurement = fs.writeFileSync(`./measurement/${req['uniqueId']}.txt`,JSON.stringify(mes))
     fileLength = fs.readdirSync(`./directory/${req['uniqueId']}`).length
    //  isPlayed = false;
    console.log(mes['content_date_time:'],'testdate',dateFormat(mes['content_date_time:'], "yyyy dd mm" ).split("-").join("-"),'testdate', )
     db.patientmodel.create({
      patientname:mes.patient_name,
      gender:mes.patient_sex,
      height:(mes.patient_size)*100,
      weight:mes.patient_weight,
      dob:mes.patient_dob,
      dicomImagesId:req['uniqueId'],
      clinicId:req.params.id,
      status:'created',
      length: fileLength,
      testdate: dateFormat(mes['content_date_time:'], "yyyy dd mm" ).split("-").join("-")
      // testdate:mes['content_date_time:']
     })
     
     return res.send({ 'message': 'patient uploaded successfully!',  status: 200 });
      }
      else{
        return ({ 'message': 'patient uploaded successfully!',  status: 200 });

      }
    }catch(err)
    {
      console.log(err)
      return ({ 'message': 'patient not uploaded successfully!',  status: 404 });
    }
    })
      // console.log("File uploaded");
      // res.send({ 'message': 'patient uploaded successfully!',  status: 200 });
  })
})

var upload = multer({ storage: storage })
  const uploadImage = async (req, res, next) => {
    // to declare some path to store your converted image
    const v = req.body.base64image
    var matches = v
    response = {};
     
    // if (matches.length !== 3) {
    // return new Error('Invalid input string');
    // }
     
    // response.type = matches[1];
    // response.data = new Buffer(matches[2], 'base64');
    let decodedImg = response;
    console.log(req.body)
    let imageBuffer = decodedImg.data;
    let type = decodedImg.type;
    // let extension = mime.extension(type);
    let fileName = "image.txt" ;
    try {
    fs.writeFileSync("./lvmotion" + fileName, imageBuffer, 'utf8');
    return res.send({"status":"success"});
    } catch (e) {
    next(e);
    }
    }
    console.log(uploadImage)
    var v = multer({ errorHandling: 'manual', storage: uploadImage })
    app.post('/upload/image', v.array("uploads[]",90))

}

const readDicom = (file_path) => {
  return new Promise((resolve, reject) => {
    PythonShell.run('./scripts/dcm_script.py', { mode: 'json', args: [file_path] }, (err, results) => {
      if (err) throw err;
      if (err) {
        return reject({ success: false, err })
      }
      return resolve({ success: true, results })
    });
  })
}



