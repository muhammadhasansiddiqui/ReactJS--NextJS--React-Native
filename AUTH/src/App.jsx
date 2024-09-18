import React, { useState, useEffect } from "react";
import axios from "axios";

const ProfileCard = () => {
  const [index, setIndex] = useState(0);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Constants for sheet ID, API key, and range
  const sheetID = "1yLdvVU3WuZBOE3mISmNIVFbluYYOLnzxN9JcYyLc0aQ";
  const apiKey = "AIzaSyDiDZ0DDCsK-Kp5azWCZ5cvAjKpdtsQWtU";
  const range = "Sheet1!A1:B10";
  const sheetURL = `https://sheets.googleapis.com/v4/spreadsheets/${sheetID}/values/${range}?key=${apiKey}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(sheetURL);
        if (response.status === 200) {
          const data = response.data.values;
          const usersData = data.map(([name, picture]) => ({ name, picture }));
          setUsers(usersData);
        } else {
          throw new Error(`Unexpected status code: ${response.status}`);
        }
      } catch (error) {
        setError(error.response ? error.response.data : error.message);
        console.error("Error fetching data:", error.response ? error.response.data : error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [sheetURL]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % users.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [users]);

  const downloadCard = () => {
    const cardElement = document.getElementById("profile-card");
    const cardHTML = cardElement.outerHTML;
    const blob = new Blob([cardHTML], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "profile-card.html";
    link.click();
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading data: {error}</p>;
  }

  return (
    <div className="p-4 bg-red-500">
      <div
        id="profile-card"
        className="p-6 bg-white border border-gray-300 rounded-lg shadow-lg"
      >
        <h3 className="mb-2 text-xl font-semibold">{users[index].name}</h3>
        <img
          src={users[index].picture}
          alt={users[index].name}
          className="object-cover mb-4 rounded-full w-36 h-36"
        />
      </div>
      <div className="mt-4">
        <button
          onClick={() => setIndex(index > 0 ? index - 1 : users.length - 1)}
          className="px-4 py-2 mr-2 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Previous
        </button>
        <button
          onClick={() => setIndex((index + 1) % users.length)}
          className="px-4 py-2 mr-2 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Next
        </button>
        <button
          onClick={downloadCard}
          className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600"
        >
          Download Card
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
