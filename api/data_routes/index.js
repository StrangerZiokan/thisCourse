const express = require("express");
const router = express.Router();
const Skill = require("../models/skills");
const { run_v1alpha1 } = require("googleapis");

//ROUTE 4
//RETURN ALL THE SCRAPPED COURSES STORED IN THE DATABASE.
router.get("/all", async (req, res, next) => {
  let result = await Skill.find({});
  res.json(result);
});

//ROUTE 1
//Retrive All Courses Having Some of The Mentioned Skills
router.get("/searchsome/:skillName", async (req, res, next) => {
  try {
    let result = await Skill.find({});
    var arr = [];
    var finalarr = [];
    arr = req.params.skillName.toLowerCase().split("-");
    var j;
    for (j = 0; j < arr.length; j++) {
      for (let elm of result) {
        let skillStr = await elm.nameSkill.toLowerCase();
        console.log(elm);
        if (skillStr.search(arr[j]) != -1) {
          finalarr.push(elm);
        }
      }
    }
    if(j == arr.length)
    {
    res.status(200).json({
      data: finalarr.length > 0 ? finalarr : "Not Found !",
    });
  }
  } catch (err) {
    res.status(500).json({
      error: next(err),
    });
  }
});

//ROUTE 5
//Retrive All Courses Having All Mentioned Skills
router.get("/searchall/:skillName", async (req, res, next) => {
  try {
    let result = await Skill.find({});
    var arr = [];
    var finalarr = [];
    arr = req.params.skillName.toLowerCase().split("-");
    console.log(arr);
    for (let elm of result) {
      var flag = 0;
      let skillStr = await elm.nameSkill.toLowerCase();
      for (var j = 0; j < arr.length; j++) {
        if (skillStr.search(arr[j]) == -1) {
          flag = 1;
        }
      }
      if (flag === 0) {
        finalarr.push(elm);
      }
    }

    res.status(200).json({
      data: finalarr.length > 0 ? finalarr : "Not Found !",
    });
  } catch (err) {
    res.status(500).json({
      error: next(err),
    });
  }
});

//ROUTE 2
//RETREIVE ALL COURSES OF A PARTICULAR CATEGORY, SKILL-WISE GROUPED.
router.get("/category/:categoryName", async (req, res, next) => {
  try {
    let result = await Skill.find({});
    console.log(result);
    let arr = [];
    for (let elm of result) {
      console.log(elm);
      let categoryStr = await elm.category.toLowerCase();
      const regex = /%20/gi;
      categoryStr = await categoryStr.replace(regex, " ");

      if (categoryStr === req.params.categoryName.toLowerCase()) {
        arr.push(elm);
      }
    }
    res.status(200).json({
      data: arr.length > 0 ? arr : "Not Found !",
    });
  } catch (err) {
    res.status(500).json({
      error: next(err),
    });
  }
});

//ROUTE 3
//RETREIVE THE DETAILS OF A PARTICULAR COURSE BY A PARTICULAR SKILL AND ITS COURSE ID
router.get("/coursedetails/:skillName/:courseId", async (req, res, next) => {
  try {
    let result = await Skill.find({});
    let arr = [];
    var finalarr = [];
    arr = req.params.skillName.toLowerCase().split("-");
    for (var j = 0; j < arr.length; j++) {
      for (let elm of result) {
        let skillStr = elm.nameSkill.toLowerCase();
        if (skillStr.search(arr[j]) != -1) {
          let test = elm.Courses.map((obj) => {
            let str = obj._id;
            if (str == req.params.courseId) {
              finalarr.push(obj);
            }
          });
        }
      }
    }
    res.status(200).json({
      data: finalarr.length > 0 ? finalarr : "Not Found !",
    });
  } catch (err) {
    res.status(500).json({
      error: next(err),
    });
  }
});

module.exports = router;
