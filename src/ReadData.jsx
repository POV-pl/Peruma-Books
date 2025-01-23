import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "./firebaseConfig";
import {
  collection,
  query,
  getDocs,
  deleteDoc,
  doc,
  orderBy,
  setDoc,
} from "firebase/firestore";
import { text } from "framer-motion/client";

export default function OwnerDataReader() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deletedItem, setDeletedItem] = useState(null);
  const [authKey, setAuthKey] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState("");

  // Hardcoded owner access key (replace with your secure method)
  const OWNER_KEY = import.meta.env.VITE_OWNER_ACCESS_KEY;

  const navigate = useNavigate();

  const handleAuth = (e) => {
    e.preventDefault();
    if (authKey === OWNER_KEY) {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Invalid access key");
    }
  };

  const fetchData = async () => {
    try {
      const q = query(
        collection(db, "collaborations"),
        orderBy("timestamp", "desc")
      );
      const querySnapshot = await getDocs(q);
      const fetchedData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setData(fetchedData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  const handleDelete = async (item) => {
    try {
      // Delete from Firestore collection 'collaborations'
      await deleteDoc(doc(db, "collaborations", item.id));

      setDeletedItem(item);

      // Temporary removal from UI
      setData((prevData) => prevData.filter((d) => d.id !== item.id));

      // Undo timer
      setTimeout(() => {
        setDeletedItem(null);
      }, 3000);
    } catch (error) {
      console.error("Error deleting document:", error);
    }
  };

  const handleUndo = async () => {
    if (deletedItem) {
      try {
        // Re-add the deleted item to 'collaborations' collection
        const { id, ...itemData } = deletedItem;
        await setDoc(doc(db, "collaborations", id), itemData);

        // Refresh data to ensure consistency
        await fetchData();
        setDeletedItem(null);
      } catch (error) {
        console.error("Error undoing deletion:", error);
      }
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchData();
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-blue-50 p-4 relative">
        <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">
            Owner Access
          </h2>
          {error && (
            <div className="bg-red-100 text-red-700 p-3 rounded mb-4">
              {error}
            </div>
          )}
          <form onSubmit={handleAuth} className="space-y-4">
            <input
              type="password"
              onChange={(e) => setAuthKey(e.target.value)}
              value={authKey}
              placeholder="Enter access key"
              className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors"
            >
              Access Dashboard
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-blue-50 p-4 relative">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-blue-800">
            Owner Data Dashboard
          </h1>
          <div className="flex space-x-4">
            <button
              onClick={() => navigate("/")}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Back to Home
            </button>
            <button
              onClick={() => setIsAuthenticated(false)}
              className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>

        {deletedItem && (
          <div className="bg-orange-100 text-orange-800 p-4 rounded-lg mb-4 flex justify-between items-center">
            <span>Item deleted. Undo available for 3 seconds.</span>
            <button
              onClick={handleUndo}
              className="bg-orange-500 text-white px-3 py-1 rounded"
            >
              Undo
            </button>
          </div>
        )}

        {loading ? (
          <div className="text-center text-blue-800">Loading...</div>
        ) : data.length === 0 ? (
          <div className="text-center text-blue-800">No data found</div>
        ) : (
          <div className="overflow-x-auto bg-white rounded-xl shadow-md">
            <table className="w-full">
              <thead className="bg-blue-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Name</th>
                  <th className="px-4 py-3 text-left">Email</th>
                  <th className="px-4 py-3 text-left">Phone</th>
                  <th className="px-4 py-3 text-left">Institution</th>
                  <th className="px-4 py-3 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.id} className="border-b hover:bg-blue-50">
                    <td className="px-4 py-3">{item.name}</td>
                    <td className="px-4 py-3">{item.email}</td>
                    <td className="px-4 py-3">{item.phone}</td>
                    <td className="px-4 py-3">
                      {item.institutionName} ({item.institutionType})
                    </td>
                    <td className="px-4 py-3">
                      <button
                        onClick={() => handleDelete(item)}
                        className="bg-orange-500 text-white px-3 py-1 rounded hover:bg-orange-600 transition-colors"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
