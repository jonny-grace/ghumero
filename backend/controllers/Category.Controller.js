const { Category } = require("../models/Category");
require("dotenv").config();

const uploadToCloud = require("../config/cloudnary");

exports.createCategory = async (req, res, next) => {
  try {    
    const CategoryData = req.body
     if (req.file) {
      console.log(" File ",req.file,req.files)
      const { url } = await uploadToCloud(req.file.filename);
      CategoryData.image = url;
      console.log(" URL ", url);
    }
    console.log(" Welcome ", CategoryData);
    let newCategory = await Category.create(CategoryData);
    
    res
      .status(201)
      .send({
        category: newCategory,
        message: "Category Added Succesfully !",
        success: true
      });

    await newCategory.save();
  } catch (error) {
    return res.status(400).json({ message: error.message ,success: false });
  }
};


exports.updateCategory = async (req, res, next) => {
  try {
    console.log(" Update Category API ", req.params.id, req.body)
    let CategoryInfo = req.body;
    const { id } = req.params;
    const updatedCategory = await Category.findOneAndUpdate(
      { _id: id },
      CategoryInfo,
      { new: true }
    );

    return res
      .status(202)
      .send({ category:updatedCategory, message: "Category Updated Succesfully !",success: true  });
  } catch (error) {
    if (error.message) return res.status(404).send({ message: error.message,success: false });
    return res.status(404).send({ message: error,success: false });
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    console.log(" Delete Category ", req.params.id)
    const {id} = req.params;
    await Category.deleteOne({_id:id});
    return res
      .status(200)
      .send({ message: "Category has been Deleted Succesfully !" ,success: true});
  } catch (error) {
    if (error.message) return res.status(404).send({ message: error.message,success: false });
    return res.status(404).send({ message: error,success: false });
  }
};

exports.getCategory = async (req, res) => {
  try {
    console.log(" Get Category ", req.params.id)
    const getCategory = await Category.findById(req.params.id);
    console.log(getCategory);
    return res.status(202).send({
      category: getCategory,
      message: "Success !",
      success: getCategory?true:false
    });
  } catch (error) {
    if (error.message) return res.status(404).send({ message: error.message,success: false });
    return res.status(404).send({ message: error ,success: false});
  }
};

exports.getAllCategory = async (req, res) => {
  try {
    const getAll = await Category.find({}).sort("-updatedAt");
    return res
      .status(202)
      .send({
        totalCategory: getAll.length,
        category: getAll,
        success: true,
      });
  } catch (error) {
    if (error.message) return res.status(404).send({ message: error.message ,success: false});
    return res.status(404).send({ message: error,success: false });
  }
};


