import React from 'react'

export default function FavoritePage() {
  return (
    <div>
      <h1>Favorites</h1>
      
    </div>
  )
}


export async function getRecipeFromFavorites() {
  try {
    await connectToMongo();
    const db = client.db("devdb");
    const collection = db.collection("favorites");
    const result = await collection.find({});
    return result;
  } catch (error) {
    console.error("Failed to fetch data from MongoDB:", error);
    return null;
  } finally {
    await closeMongoConnection();
  }
}

export async function addRecipeToFavorites(id) {
  try {
    await connectToMongo();
    const db = client.db("devdb");
    const collection = db.collection("favorites");
    const result = await collection.insertOne({ _id: id });
    return result;
  } catch (error) {
    console.error("Failed to fetch data from MongoDB:", error);
    return null;
  } finally {
    await closeMongoConnection();
  }
}

export async function removeRecipeFromFavorites(id) {
  try {
    await connectToMongo();
    const db = client.db("devdb");
    const collection = db.collection("favorites");
    const result = await collection.deleteOne({ _id: id });
    return result;
  } catch (error) {
    console.error("Failed to fetch data from MongoDB:", error);
    return null;
  } finally {
    await closeMongoConnection();
  }
}