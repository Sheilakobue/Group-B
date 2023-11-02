import { connectToMongo, closeMongoConnection, getClient } from '../mongodb';

// Function to retrieve favorite recipes
export async function getFavorites() {
  await connectToMongo();
  const client = getClient();

  try {
    const db = client.db('devdb');
    await db.command({ ping: 1 });
    const collection = db.collection('favorites');
    const data = await collection.find({}).toArray();
    const dataArray = data.map((doc) => doc.favorite);
    return dataArray;
  } catch (error) {
    console.error('Failed to fetch favorite recipes from MongoDB:', error);
    return [];
  } finally {
    await closeMongoConnection();
  }
}

// Function to save a recipe to favorites
export async function saveFavorite(recipe) {
  await connectToMongo();
  const client = getClient();

  try {
    const db = client.db('devdb');
    await db.command({ ping: 1 });
    const collection = db.collection('favorites');

    // Check if the recipe is already in favorites
    const existingFavorite = await collection.findOne({ _id: recipe._id });

    if (!existingFavorite) {
      // If not, save it
      await collection.insertOne({ _id: recipe._id, favorite: recipe });
    }
  } catch (error) {
    console.error('Failed to save favorite to MongoDB:', error);
  } finally {
    await closeMongoConnection();
  }
}
