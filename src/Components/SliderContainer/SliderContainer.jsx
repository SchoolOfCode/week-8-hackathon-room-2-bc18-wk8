import { useState } from "react";
import CardContainer from "../CardComponent/Card.jsx";
import SliderExpense from "./SliderExpense/SliderExpense.jsx";

function SliderContainer() {
  const [sliders, setSliders] = useState([{ id: 1, name: "", amount: 0 }]);

  const addNewSlider = () => {
    setSliders([...sliders, { id: sliders.length + 1, name: "", amount: 0 }]);
  };

  return (
    <>
      <CardContainer
        content={
          <>
            {sliders.map((slider) => (
              <SliderExpense key={slider.id} />
            ))}
            <button onClick={addNewSlider}>Add New Slider</button>
          </>
        }
      />
    </>
  );
}

export default SliderContainer;
