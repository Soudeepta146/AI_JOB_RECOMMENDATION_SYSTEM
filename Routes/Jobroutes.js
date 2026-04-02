const express=require('express');
const router= express.Router();

const uploads=require('../Middleware/upload_middleware');
const controller=require('../Controller/Job_controller');

router.post('/uploads',uploads.single("resume"),controller.uploadSkills);

module.exports= router