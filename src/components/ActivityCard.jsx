import { useState } from "react";

// Function to format the date into a user-friendly format
const formatDate = (date) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(date).toLocaleDateString("en-US", options);
};

function ActivityCard({ activity, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedActivity, setEditedActivity] = useState({ ...activity });

  let borderColorClass = "";
  switch (activity.category) {
    case "study":
      borderColorClass = "border-teal-400";
      break;
    case "work":
      borderColorClass = "border-purple-600";
      break;
    case "personal":
      borderColorClass = "border-orange-400";
      break;
    default:
      borderColorClass = "border-gray-400";
  }

  const handleChange = (e) => {
    setEditedActivity({ ...editedActivity, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    onUpdate(activity.id, editedActivity);
    setIsEditing(false);
  };

  return (
    <div
      className={`bg-white p-4 rounded-lg shadow mb-4 border-l-4 ${borderColorClass}`}
    >
      {isEditing ? (
        <>
          <input
            name="title"
            value={editedActivity.title}
            onChange={handleChange}
            className="w-full mb-2 p-1 border rounded"
          />
          <textarea
            name="description"
            value={editedActivity.description}
            onChange={handleChange}
            className="w-full mb-2 p-1 border rounded"
          />
          <input
            type="date"
            name="date"
            value={editedActivity.date}
            onChange={handleChange}
            className="mb-2 p-1 border rounded"
          />
          <input
            type="time"
            name="time"
            value={editedActivity.time}
            onChange={handleChange}
            className="mb-2 p-1 border rounded"
          />
          <select
            name="priority"
            value={editedActivity.priority}
            onChange={handleChange}
            className="mb-2 p-1 border rounded"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <select
            name="category"
            value={editedActivity.category}
            onChange={handleChange}
            className="mb-2 p-1 border rounded"
          >
            <option value="study">Study</option>
            <option value="work">Work</option>
            <option value="personal">Personal</option>
          </select>
          <div className="flex gap-2">
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Save
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
            >
              Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          <h3 className="text-xl font-semibold text-[#212121]">
            {activity.title}
          </h3>
          <p className="text-sm text-gray-600">{activity.description}</p>
          <div className="text-sm text-gray-700 mt-2">
            <p>
              <strong>Date:</strong> {formatDate(activity.date)}{" "}
              {/* Formatted Date */}
            </p>
            <p>
              <strong>Time:</strong> {activity.time}
            </p>
            <p>
              <strong>Priority:</strong> {activity.priority}
            </p>
            <p>
              <strong>Category:</strong> {activity.category}
            </p>
          </div>
          <div className="flex gap-2 mt-4">
            <button
              onClick={() => setIsEditing(true)}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(activity.id)}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default ActivityCard;
