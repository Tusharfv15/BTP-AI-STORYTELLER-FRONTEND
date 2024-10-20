import React, { useContext, useState } from "react";
import { Plus, X } from "lucide-react";
import StoryCard from "@/components/StoryCard";
import { UserContext } from "@/context/UserContext";
import { useNavigate } from "react-router-dom";

function DashboardPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate();
  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const { user, setUser } = useContext(UserContext);
  const [storyDetails, setStoryDetails] = useState({
    storyTitle: "",
    storyDescription: "",
    includeImage: false,
    maxPages: 0,
    childAge: user.childAge,
  });
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await fetch(`${BACKEND_URL}/api/story/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(storyDetails),
        credentials: "include",
      });
      if (response.status === 201) {
        const data = await response.json();
        const storyId = data.story._id;
        navigate(`/dashboard/${storyId}/ReadStory`);

        console.log(data);
        toggleModal();
      }
    } catch (error) {
      console.error("Error creating story:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Story Dashboard</h1>
          <button
            onClick={toggleModal}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg flex items-center"
          >
            <Plus className="mr-2" size={20} />
            Create New Story
          </button>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <StoryCard
            title="The Adventure Begins"
            description="A thrilling journey through uncharted lands."
            imageUrl="https://source.unsplash.com/random/800x600?adventure"
            id="1234"
          />
          <StoryCard
            title="Mystery in the Old Town"
            description="Uncover secrets hidden for centuries in this gripping tale."
            imageUrl="https://source.unsplash.com/random/800x600?mystery"
            id="5678"
          />
          <StoryCard
            title="Galactic Explorers"
            description="Join the crew on an interstellar mission to save humanity."
            imageUrl="https://source.unsplash.com/random/800x600?space"
            id="91011"
          />
          <StoryCard
            title="Galactic Explorers"
            description="Join the crew on an interstellar mission to save humanity."
            imageUrl="https://source.unsplash.com/random/800x600?space"
            id="91011"
          />
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg p-8 max-w-md w-full">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Create New Story</h2>
                <button
                  onClick={toggleModal}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X size={24} />
                </button>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Story Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter story title"
                    onChange={(e) =>
                      setStoryDetails({
                        ...storyDetails,
                        storyTitle: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Story Description
                  </label>
                  <textarea
                    id="description"
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter story description"
                    onChange={(e) =>
                      setStoryDetails({
                        ...storyDetails,
                        storyDescription: e.target.value,
                      })
                    }
                  ></textarea>
                </div>
                <div className="mb-4">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      id="includeImage"
                      className="form-checkbox h-5 w-5 text-blue-500"
                      onChange={(e) =>
                        setStoryDetails({
                          ...storyDetails,
                          includeImage: e.target.checked,
                        })
                      }
                    />
                    <span className="ml-2 text-sm text-gray-700">
                      Include Image
                    </span>
                  </label>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="pages"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Maximum Number of Pages
                  </label>
                  <input
                    type="number"
                    id="pages"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter maximum pages"
                    min="1"
                    onChange={(e) =>
                      setStoryDetails({
                        ...storyDetails,
                        maxPages: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={toggleModal}
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Generate
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default DashboardPage;