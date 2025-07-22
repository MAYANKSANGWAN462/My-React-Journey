export async function fetchAvailablePlaces(){
    const response = await fetch("http://localhost:3000/places");
            const resData = await response.json();
            if (!response.ok) {
              // when 400,500
              throw new Error("Failed to fetch places");
            }

            return resData.places;
}


export async function fetchUserPlaces(){
    const response = await fetch("http://localhost:3000/user-places");
            const resData = await response.json();
            if (!response.ok) {
              // when 400,500
              throw new Error("Failed to fetch user places");
            }

            return resData.places;
}



export async function updateUserPlaces(places){
  const response = await fetch('http://localhost:3000/user-places',{
    method: 'PUT', //default is the get methode and we put hte method now to put
    body: JSON.stringify({places : places}), //adding the body property in order to define whcih data should be attached as a request body to that outgoing request and that should be the places array
    headers: {
      'Content-Type' : 'application/json'
    }
  });
  const resData = await response.json();

  if(!response.ok){ //if the resopnse is not ok
    throw new Error('Failed to update user data.');
  }
  return resData.message;
}