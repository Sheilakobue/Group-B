// import { addFavoriteToMongoDB, addFavoriteToMongoDBToo } from '@/helpers/database/favoriteModule';
// import { connectToDatabase } from '../../db';
// import { getSession } from 'next-auth/react';

import { addFavoritesFromMongoDB } from "@/helpers/mongodb";

// async function handler(req, res) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ error: 'Method not allowed' });
//   }

//   const session = await getSession({ req });

//   if (!session) {
//     return res.status(401).json({ error: 'Unauthorized' });
//   }

//   const { recipe } = req.body;

//   if (!recipe) {
//     return res.status(400).json({ error: 'Invalid request' });
//   }

//   const db = await connectToDatabase();
//   const favoritesCollection = db.collection('favorites');

//   try {
//     const userId = session.user.id;

//     // Add user ID to the recipe object
//     const recipeWithUserId = { ...recipe, userId };

//     await favoritesCollection.insertOne(recipeWithUserId);

//     return res.status(201).json({ message: 'Recipe added to favorites' });
//   } catch (error) {
//     console.error('Error adding favorite to MongoDB:', error);
//     return res.status(500).json({ error: 'Internal Server Error' });
//   }
// }

// // export default handler;

// //  export default async function handler(req, res){
// //   if(req.method === 'POST'){

// //     const { recipe } = req.body;
// //     const db = await connectToDatabase();
// //     const favoritesCollection = db.collection('favorites');

// //     try{
// //       const recipeWithUserId = { ...recipe, userId };
// //       await favoritesCollection.insertOne(recipeWithUserId);

// //     }catch(error){
// //       res.status(500).json({ error: 'Internal Server Error' });
// //     }
// //   }
// //  }
// export default async function handler(req, res) {
//   // if (req.method === 'POST') {
//   //   try {
//   //     const recipe = req.body.recipe; // Extract the recipe from the request body
//   //     await addFavoriteToMongoDB(recipe);
//   //     res.status(200).json({ message: 'added favorite' });
//   //   } catch (error) {
//   //     res.status(500).json({ error: 'Internal Server Error' });
//   //   }
//   // }

//   if(req.method === 'POST'){

//     const { title } = req.body

//     try{
//       await addFavoriteToMongoDBToo(title);
//       res.status(200).json({ message: 'success'})
//     }catch(error){
//       res.status(500).json({ message: error})
//     }
//   }
// }

//is working
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { recipe } = req.body;

    try {
      await addFavoritesFromMongoDB(recipe);
      res.status(200).json({ message: 'success' });
    } catch (error) {
      res.status(500).json({ message: 'not working', error });
    }
  }
}