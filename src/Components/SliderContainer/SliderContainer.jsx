import { useState } from "react";
import CardContainer from "../CardComponent/Card.jsx";
import SliderExpense from "./SliderExpense/SliderExpense.jsx";

function SliderContainer({ getTotalSliderAmount }) {
  const [sliders, setSliders] = useState([]);

  const addNewSlider = () => {
    setSliders([...sliders, { id: sliders.length, value: 0 }]);
  };

  const updateSliderValue = (id, newValue) => {
    const updatedSliders = sliders.map((slider) =>
      slider.id === id ? { ...slider, value: newValue } : slider
    );
    setSliders(updatedSliders);

    // Extract only the values and pass them as an array to `getTotalSliderAmount`
    getTotalSliderAmount(updatedSliders.map((s) => s.value));
  };

  return (
    <>
      <CardContainer
        content={
          <>
            {sliders.map((slider) => (
              <SliderExpense
                key={slider.id}
                getTotalSliderAmount={(value) =>
                  updateSliderValue(slider.id, value)
                }
              />
            ))}
            <button onClick={addNewSlider}>Add New Slider</button>
          </>
        }
      />
    </>
  );
}

export default SliderContainer;
