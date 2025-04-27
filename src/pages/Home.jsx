// pages/Home.jsx
import { useState, useEffect } from "react";
import axios from "axios";
import AddActivityForm from "./AddActivityForm";
import ActivityList from "../components/ActivityList";
import FilterControls from "../components/FilterControls";
const API_URL = import.meta.env.VITE_API_URL;
function Home() {
  const [activities, setActivities] = useState([]);
  const [filters, setFilters] = useState({
    category: "",
    priority: "",
    date: "",
  });

  const fetchActivities = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/activities`); // Updated URL with /api
      setActivities(response.data);
    } catch (error) {
      console.error("Failed to fetch activities", error);
    }
  };

  useEffect(() => {
    fetchActivities();
  }, []);

  const handleAddActivity = async (activity) => {
    try {
      const response = await axios.post(
        `${API_URL}/api/activities`, // Updated URL with /api
        activity
      );
      setActivities([...activities, response.data]);
    } catch (error) {
      console.error("Failed to add activity", error);
    }
  };

  const handleDeleteActivity = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/activities/${id}`); // Updated URL with /api
      setActivities(activities.filter((activity) => activity.id !== id));
    } catch (error) {
      console.error("Failed to delete activity", error);
    }
  };

  const handleUpdateActivity = async (id, updatedData) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/api/activities/${id}`, // Updated URL with /api
        updatedData
      );
      setActivities(
        activities.map((activity) =>
          activity.id === id ? response.data : activity
        )
      );
    } catch (error) {
      console.error("Failed to update activity", error);
    }
  };

  const priorityOrder = ["high", "medium", "low"];

  const filteredActivities = activities
    .filter((activity) => {
      const matchCategory = filters.category
        ? activity.category.toLowerCase() === filters.category.toLowerCase()
        : true;
      const matchPriority = filters.priority
        ? activity.priority.toLowerCase() === filters.priority.toLowerCase()
        : true;
      const matchDate = filters.date ? activity.date === filters.date : true;

      return matchCategory && matchPriority && matchDate;
    })
    .sort((a, b) => {
      const priorityA = priorityOrder.indexOf(a.priority.toLowerCase());
      const priorityB = priorityOrder.indexOf(b.priority.toLowerCase());

      if (priorityA !== priorityB) {
        return priorityA - priorityB;
      }

      const dateA = new Date(a.date + "T" + a.time);
      const dateB = new Date(b.date + "T" + b.time);

      return dateA - dateB;
    });

  return (
    <div className="min-h-screen bg-[#f3f0ff] p-6">
      <AddActivityForm onAddActivity={handleAddActivity} />
      <FilterControls filters={filters} onChange={setFilters} />
      <ActivityList
        activities={filteredActivities}
        onDelete={handleDeleteActivity}
        onUpdate={handleUpdateActivity}
      />
    </div>
  );
}

export default Home;
