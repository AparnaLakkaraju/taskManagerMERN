
const express = require('express');
const router = express.Router();
const Student = require('../models/student');



router.get('/api/students', async (req,res) =>{
    const students = await Student.find();
    res.send(students);
  })
  router.get('/api/students/:rollno',async (req,res) =>{
      const id = req.params.rollno;
      const student = await Student.findOne("rollno",id)
  })
  
  router.post('/api/students', async (req,res) =>{
      const body = req.body;
      //students.push(body)
      const students = await Student.create(body)
      res.send({success: true})
  })
  
  router.delete('/api/students',async (req,res) =>{
      //handle delete
      const rollno = req.params.rollno;
      const student = await Student.deleteOne("rollno",id)
  
  })
  
  router.put("/api/students/:rollno", async(req,res) => {
      //update the data
      const student = await Student.updateOne("rollno",id)
  })

  //common js and esjs
module.exports = router;