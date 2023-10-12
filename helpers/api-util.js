import AllRecipes from "@/pages/recipe";

export async function getAllRecipes() {
  const response = await fetch(
    "mongodb+srv://groupb:siGyDb5l6UAMEEgD@groupb.xmhz5up.mongodb.net/?retryWrites=true&w=majority"
  );
  const data = await response.json();

  const recipes = [];

  for (const key in data) {
    events.push({
      id: key,
      ...data[key],
    });
  }

  return recipes;
}

export async function getFeatured() {
  const allEvents = await getAllEvents();
  return allEvents.filter((event) => event.isFeatured);
}

export async function getEventById(id) {
  const allEvents = await getAllEvents();
  return allEvents.find((event) => event.id === id);
}

export async function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;
  const allEvents = await getAllEvents();

  let filteredEvents = allEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}
