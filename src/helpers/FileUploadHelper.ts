

import {v2 as cloudinary} from 'cloudinary'
import multer from 'multer';
import * as fs from 'fs'
import { ICloudenaryResponse, IUloadedFile } from '../interfaces/file';

cloudinary.config({
    cloud_name: "dvcasxh7p",
    api_key: "218834994834365",
    api_secret : "HRMe8f0IBJ9N-IFQyIDG9VjdWQE"
})


const storage = multer.diskStorage({
    destination: function(req,file,cb) {
        cb(null,'upload/')
    },
    filename: function(req,file,cb){
        cb(null,file.originalname)
    }
})
const upload = multer({storage:storage})
const uploadToCloudinary = async (file:IUloadedFile) : Promise<ICloudenaryResponse>=> {
    return new Promise((resolve,reject)=>{
         cloudinary.uploader.upload(file.path,
           (error:Error,result:ICloudenaryResponse) => {
                fs.unlinkSync(file.path)
                if (error) {
                  reject(error)
                 
                }else{
                  resolve(result)
                }
           }
       )
    })
    // return cloudinary.uploader
    // .upload(
    //     'https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg', {
    //         public_id: 'shoes',
    //     }
    // )
    // .catch((error) => {
    //     console.log(error);
    // });
 

}

export const FileUploadadHelper = {
    uploadToCloudinary,
    upload
}

// import { v2 as cloudinary } from 'cloudinary';

// (async function() {

//     // Configuration
//     cloudinary.config({ 
//         cloud_name: 'dvcasxh7p', 
//         api_key: '218834994834365', 
//         api_secret: '<your_api_secret>' // Click 'View Credentials' below to copy your API secret
//     });
    
//     // Upload an image
//      const uploadResult = await cloudinary.uploader
//        .upload(
//            'https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg', {
//                public_id: 'shoes',
//            }
//        )
//        .catch((error) => {
//            console.log(error);
//        });
    
//     console.log(uploadResult);
    
//     // Optimize delivery by resizing and applying auto-format and auto-quality
//     const optimizeUrl = cloudinary.url('shoes', {
//         fetch_format: 'auto',
//         quality: 'auto'
//     });
    
//     console.log(optimizeUrl);
    
//     // Transform the image: auto-crop to square aspect_ratio
//     const autoCropUrl = cloudinary.url('shoes', {
//         crop: 'auto',
//         gravity: 'auto',
//         width: 500,
//         height: 500,
//     });
    
//     console.log(autoCropUrl);    
// })();