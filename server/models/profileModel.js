import mongoose from 'mongoose'

const profileSchema = new mongoose.Schema({

   
    userId:{
 type: mongoose.SchemaTypes.ObjectId,
    ref : "user"
     },
    
    firstName: {
      type: String,
      required: true

    },
    lastName: {
      type: String,
      required: true

    },
    gender: {
      type: String,
      required: true

    },
    birthdate:{
        type: Date,
        required: true

    },
     email:{
        type:String,
        unique: true

        
      },
      phoneno:{
          type:String,
          unique: true

      },
    whereyoulive: {
      type: String,
      required: true

    },
  describeyourself: {
      type: String,
      required: true

    },
    profileImage: {
        type: String,
      },
    
   
}, {timestamps: true});


const Profile = mongoose.model("Profile", profileSchema);

export default Profile;