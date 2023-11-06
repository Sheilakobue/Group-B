import { connectToMongo, getClient } from '../mongodb';

export async function runFav(page) {
  await connectToMongo();
  const client = getClient();

  try {
    await client.connect();
    const db = client.db('devdb');
    await client.db('devdb').command({ ping: 1 });
    const collection = db.collection('favorites');
    const skip = (page - 1) * 100;
    const data = await collection.find({}).skip(skip).limit(100).toArray();
    return data;
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
  } finally {
    await client.close();
  }
}

export async function insertFavOrHistory(collection, document) {
  try {
    await client.connect();
    const db = client.db('devdb');
    const result = await db.collection(collection).insertOne(document);
    return result;
  } catch (error) {
    console.error('Failed to connect to MongoDB To save favorites', error);
  }
}

export async function DeleteFav(recipe) {
  await connectToMongo();
  const client = getClient();
  try {
    await client.connect();
    const db = client.db('devdb');
    const result = await db.collection('favorites').deleteOne(recipe);
    return console.log('deleted');
  } catch (error) {
    console.error('Failed to connect to MongoDB To save favorites', error);
  }
}
