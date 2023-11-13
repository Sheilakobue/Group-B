import { connectToMongo, closeMongoConnection, getClient } from '../mongodb';

export async function RunAllRecipes(page) {
  await connectToMongo();
  const client = getClient();

  try {
    const db = client.db('devdb');
    await db.command({ ping: 1 });
    const collection = db.collection('recipes');
    const skip = (page - 1) * 100;
    const data = await collection.find({}).skip(skip).limit(150).toArray();
    return data;
  } catch (error) {
    console.error('Failed to fetch data from MongoDB:', error);
    return [];
  } finally {
    // await closeMongoConnection();
  }
}

export async function getRecipeById(id) {
  await connectToMongo();
  const client = getClient();

  try {
    const db = client.db('devdb');
    const collection = db.collection('recipes');
    const result = await collection.findOne({ _id: id });
    return result;
  } catch (error) {
    console.error('Failed to fetch data from MongoDB:', error);
    return null;
  } finally {
    // await closeMongoConnection();
  }
}
