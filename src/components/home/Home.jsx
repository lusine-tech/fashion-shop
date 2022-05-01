import Cards from "../card/Cards";
import Slide from "../slider/Slides.jsx";
import slidesData from "../../services/slideData.js";
import "../home/home.css";
import { Message, Sticky } from "semantic-ui-react";
import { useState } from "react";


function Home() {
  const [responseInfo, setResponseInfo] = useState("");
  let countPageProduct = 6;

  function handleDismiss() {
    setResponseInfo("");
  }
  return (
    <div className="home ui container">
      {responseInfo && responseInfo.length > 0 ? (
        <Sticky>
          <Message success onDismiss={handleDismiss} content={responseInfo} />
        </Sticky>
      ) : (
        ""
      )}
      <Slide slides={slidesData()} />

      <Cards pageDevider={countPageProduct} setResponseInfo={setResponseInfo} />
    </div>
  );
}
export default Home;
