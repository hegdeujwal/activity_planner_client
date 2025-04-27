// components/ActivityList.jsx
import ActivityCard from "./ActivityCard";

function ActivityList({ activities, onDelete, onUpdate }) {
  if (activities.length === 0) {
    return <p className="text-center text-gray-500 mt-6">No activities yet.</p>;
  }

  return (
    <div className="max-w-xl mx-auto mt-8">
      {activities.map((activity) => (
        <ActivityCard
          key={activity.id}
          activity={activity}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
}

export default ActivityList;
