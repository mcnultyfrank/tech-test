import React, { useState, useEffect } from "react";

const Main = () => {
  const [state, setState] = useState("");
  const [search, setSearch] = useState("");
  const getApiData = () => {
    console.log("working");
    fetch("http://search-api.fie.future.net.uk/widget.php?id=review&site=TRD&model_name=Ipad_Air")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      
      setState(data)
    })

  }
    const nameOfItem = (Object.keys(state.models).toString());
    console.log(nameOfItem);
    

  useEffect(() => {
    if (state !== undefined && state !== null){
      getApiData();
    }
  }, [])


  return (
    <div>
      <form>
        <input type="text" placeholder = "search for goodies" OnInput={e => setSearch(e.target.value)}/>
        <input type="submit"/>
      </form>
      {/* <h1>{nameOfItem}</h1> */}
      <button onClick = {() => getApiData()}></button>
    </div>
  );
};

export default Main;
