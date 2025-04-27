// pages/AddActivityForm.jsx
import { useState } from "react";

function AddActivityForm({ onAddActivity }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [priority, setPriority] = useState("medium");
  const [category, setCategory] = useState("study");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newActivity = {
      title,
      description,
      date,
      time,
      priority: priority.toLowerCase(),
      category: category.toLowerCase(),
    };

    onAddActivity(newActivity);

    // Reset fields
    setTitle("");
    setDescription("");
    setDate("");
    setTime("");
    setPriority("medium");
    setCategory("study");
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold text-[#6200ea] mb-6">
        Add New Activity
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-[#212121]">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-4 border border-[#03dac6] rounded-lg bg-[#f5f5f5] text-[#212121] focus:outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[#212121]">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-4 border border-[#03dac6] rounded-lg bg-[#f5f5f5] text-[#212121] focus:outline-none"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-[#212121]">
              Date
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full p-4 border border-[#03dac6] rounded-lg bg-[#f5f5f5] text-[#212121]"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#212121]">
              Time
            </label>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full p-4 border border-[#03dac6] rounded-lg bg-[#f5f5f5] text-[#212121]"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-[#212121]">
              Priority
            </label>
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="w-full p-4 border border-[#03dac6] rounded-lg bg-[#f5f5f5] text-[#212121]"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-[#212121]">
              Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-4 border border-[#03dac6] rounded-lg bg-[#f5f5f5] text-[#212121]"
            >
              <option value="study">Study</option>
              <option value="work">Work</option>
              <option value="personal">Personal</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-4 bg-[#6200ea] text-white rounded-lg mt-6 shadow-md hover:bg-[#3700b3] transition-all"
        >
          Add Activity
        </button>
      </form>
    </div>
  );
}

export default AddActivityForm;
