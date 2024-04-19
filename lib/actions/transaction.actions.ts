// import { revalidatePath } from "next/cache";
// import Image from "../database/models/image.model";
// import User from "../database/models/user.model";
// import { connectToDatabase } from "../database/mongoose";
// import { handleError } from "../utils";
// import { redirect } from "next/dist/server/api-utils";



// // ADD IMAGE
// export async function addImage({image, userId, path}: AddImageParams) {
//     try {
//         await connectToDatabase();

//         const author = await User.findById(userId);

//         if(!author) throw new Error("user not found");

//         const newImage = await Image.create({
//             ...image,
//             author: author._id,
//         })

//         revalidatePath(path);

//         return JSON.parse(JSON.stringify(newImage));
//     } catch (error) {
//         handleError(error);
//     }
// }

// // UPDATE IMAGE
// export async function updateImage({image, userId, path}: updateImageParams) {
//     try {
//         await connectToDatabase();

//         const imageToUpdate = await Image.findById(image._id);

//         if(!imageToUpdate || imageToUpdate.author.toHexString() ! == userId) throw new Error("Unauthorized or image not found");

//         const updatedImage = await Image.findByIdAndUpdate(
//             imageToUpdate._id,
//             image,
//             {new: true}
//         )

//         revalidatePath(path);

//         return JSON.parse(JSON.stringify(updateImage));

//     } catch (error) {
//         handleError(error);
//     }
// }

// // DELETE IMAGE
// export async function deleteImage(ImageId: string) {
//     try {
//         await connectToDatabase();

//         await Image.findByIdAndDelete(imageId);

      
//     } catch (error) {
//         handleError(error);
//     } finally{
//         redirect('/')
//     }
// }

// // GET IMAGE
// export async function getAllImages({limit = 9 , page = 1, searchQuery = ''}:{
//     limit?: number;
//     page: number;
//     searchQuery?: string;
// }) {
//     try {
//         await connectToDatabase();

//        cloudinary.config({
//         cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
//         api_key:process.env.CLOUDINARY_API_KEY,
//         api_secret: process.env.CLOUDINARY_API_SECRET,
//         secure:true,
//        })

//        let expression = 'folder=imaginify';

//        if(searchQuery){
//         expression += `AND ${searchQuery}`
//        }


//         return JSON.parse(JSON.stringify(newImage));
//     } catch (error) {
//         handleError(error);
//     }
// }




