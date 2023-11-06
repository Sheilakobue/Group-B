export async function runSortDate(page) {
  try {
    // Connect the client to the server    (optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    const db = client.db('devdb');
    await client.db('devdb').command({ ping: 1 });
    const collection = db.collection('recipes');
    const skip = (page - 1) * 100;
    // Use the find() method to retrieve data
    const data = await collection.find(sort).skip(skip).limit(100).toArray();
    // return data.slice(0, limit);
    return data;
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
