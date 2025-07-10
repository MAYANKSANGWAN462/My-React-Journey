import { useCallback, useEffect, useRef, useState } from "react";

import Places from "./components/Places.jsx";
import { AVAILABLE_PLACES } from "./data.js";
import Modal from "./components/Modal.jsx";
import DeleteConfirmation from "./components/DeleteConfirmation.jsx";
import logoImg from "./assets/logo.png";

import { sortPlacesByDistance } from "./loc.js";

function App() {
  const storedIds = JSON.parse(localStorage.getItem('selectedPlaces')) || [];
  const storedPlaces = storedIds.map((id) => AVAILABLE_PLACES.find((place) => place.id === id)); //in this there is no need of useEffect here on this and we can direcly pass it in the useState by default initially

  // const modal = useRef();
  const [modalIsOpen,setModalIsOpen] = useState(false);
  const selectedPlace = useRef();
  // const [pickedPlaces, setPickedPlaces] = useState([]); // <<<<---- changed to the below line
  const [pickedPlaces, setPickedPlaces] = useState(storedPlaces);


  const [availablePlaces, setAvailabePlaces] = useState([]);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      //this is the sideeffect as it is not directly realate to the task
      // This is a callback and may take time while the app component has already executed
      const sortedPlaces = sortPlacesByDistance(
        AVAILABLE_PLACES,
        position.coords.latitude,
        position.coords.longitude
      );
      setAvailabePlaces(sortedPlaces);
    });
  }, []); //react executes it depending on the dependency present there

  function handleStartRemovePlace(id) {
    // modal.current.open();
    setModalIsOpen(true);
    selectedPlace.current = id;
  }

  function handleStopRemovePlace() {
    // modal.current.close();
    setModalIsOpen(false);
  }

  function handleSelectPlace(id) {
    setPickedPlaces((prevPickedPlaces) => {
      if (prevPickedPlaces.some((place) => place.id === id)) {
        return prevPickedPlaces;
      }
      const place = AVAILABLE_PLACES.find((place) => place.id === id);
      return [place, ...prevPickedPlaces];
    });

    //for this we cannot use the useEffect and also there is no any need for the useEffect
    const storedIds = JSON.parse(localStorage.getItem('selectedPlaces')) || [];
    if(storedIds.indexOf(id) === -1){//dont store already exisiting Ids
      localStorage.setItem('selectedPlaces', JSON.stringify([id,...storedIds]));
    }
    
  }

  const handleRemovePlace = useCallback(function handleRemovePlace() {
    setPickedPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
    );
    // modal.current.close(); //removed this and useing the useState and the useEffect we will be doing it
    setModalIsOpen(false);
    // this will update the local storage when we delete the item from the storage
     const storedIds = JSON.parse(localStorage.getItem('selectedPlaces')) || [];
     localStorage.setItem('selectedPlaces',JSON.stringify(storedIds.filter((id)=> id !== selectedPlace.current)));
  } ,[]); //as there iso no any props or state values that are used inside of this wrapped function
  // or just as the useEffect any other values that in the end depend on state values (e.g., context values,other functions)
  

  return (
    <>
      {/* <Modal ref={modal} */}
      <Modal open={modalIsOpen}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText={"Select the places you would like to visit below."}
          places={pickedPlaces}
          onSelectPlace={handleStartRemovePlace}
        />
        <Places
          title="Available Places"
          // places={AVAILABLE_PLACES}
          places={availablePlaces}
          fallbackText="Sorting places by distance..."
          onSelectPlace={handleSelectPlace}
        />
      </main>
    </>
  );
}

export default App;
