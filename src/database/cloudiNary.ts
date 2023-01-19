import cloudinary from "cloudinary";



// cloudinary.v2.config({ 
//     cloud_name: 'dddan0kep', 
//     api_key: '357855954759392', 
//     api_secret: 'ZrrMBweuKXUYR3qLtg8K1P3pgKI' 
// });

cloudinary.v2.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
    secure: true, // Return "https" URLs by setting secure: true
});


// Transform the image

function uploadImage(imageUploaded: string,folderName:string) {
   return new Promise((resolve, reject) => {
      cloudinary.v2.uploader.upload(
        imageUploaded,
        { width: 400, height: 300, crop: "fill" },
        (err, res) => {
          if (err) reject(err);
          resolve({
            asset_folder: folderName,
            url: res?.secure_url,
            id:res?.public_id,
          });
        }
      );
   });
}
export {uploadImage};