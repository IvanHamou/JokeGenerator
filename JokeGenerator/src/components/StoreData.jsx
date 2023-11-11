import React, { useState } from 'react'

function StoreData({buttonText, joke, category, language, inputWord, data}) {

    const handleStoreData = () => {
        //const sss = sessionStorage.setItem("savedMovies", JSON.stringify([data]));
        //console.log(sss);
        const dataInfo = [joke, category, language, inputWord]
        console.log(dataInfo);
        const test = JSON.parse(sessionStorage.getItem("savedJokes"));
        if (test) {
          const updated = [...test, dataInfo];
          console.log(updated);
          sessionStorage.setItem("savedJokes", JSON.stringify(updated));
        } else {
          sessionStorage.setItem("savedJokes", JSON.stringify([dataInfo]));
        }
        
    }


  return (
    <div>
        <button onClick={handleStoreData}>{buttonText}</button>
    </div>
  )
}

export default StoreData