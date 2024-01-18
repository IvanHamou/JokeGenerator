import React, { useState, useEffect } from 'react';

function StoreData({ dataInfo, updateFavoriteJokes }) {
  const [isInFavorites, setIsInFavorites] = useState(false);

  useEffect(() => {
    // Check if the current joke is in favorites
    const test = JSON.parse(sessionStorage.getItem("savedJokes")) || [];
    const isJokeInFavorites = test.some((item) => item.joke === dataInfo.joke);
    setIsInFavorites(isJokeInFavorites);
  }, [dataInfo]);

  const handleData = () => {
    const test = JSON.parse(sessionStorage.getItem("savedJokes")) || [];

    if (!isInFavorites) {
      // Add the joke to favorites
      const updated = [...test, dataInfo];
      sessionStorage.setItem("savedJokes", JSON.stringify(updated));
    } else {
      // Remove the joke from favorites
      const updated = test.filter((item) => item.joke !== dataInfo.joke);
      sessionStorage.setItem("savedJokes", JSON.stringify(updated));
    }

    // Update the state to reflect the change
    setIsInFavorites(!isInFavorites);

    // Callback to update state in Favorites component
    updateFavoriteJokes();
  };

  return (
    <div>
      <button onClick={handleData}>
        {isInFavorites ? "Remove From Favorites" : "Add to Favorites"}
      </button>
    </div>
  );
}

export default StoreData;
