const User = require("../models/User");
const Profile = require("../models/profileModel");
const asyncHandler = require("express-async-handler");



exports.updateProfile = asyncHandler(async (req, res, next) => {
    const user_id = req.user.id
    const { firstName, lastName, gender, role, location, about, profileImage } = req.body
  
    let findProfile = await Profile.findOne({ userId: user_id })
    console.log(findProfile)
    if (!findProfile) {
        return res.status(404).json({
            status: "failed",
            message: "Profile does not exist"
        });
    }
  
  
    let updatedProfile = await Profile.findOneAndUpdate({ userId: user_id }, { 
        firstName: firstName,
        lastName: lastName,
        gender: gender,
        birthdate: birthdate,
        email: email, 
        phoneno: phoneno, 
        whereyoulive:whereyoulive,
        describeyourself:describeyourself ,
        profileImage: profileImage }, { new: true });
    res.status(201).json({
        status: "success",
        data: updatedProfile
    });
  });