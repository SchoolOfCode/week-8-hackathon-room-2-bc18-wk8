import { useState } from "react";
import Card from "react-bootstrap/Card";
import SliderExpense from "./SliderExpense/SliderExpense.jsx";
import Button from "react-bootstrap/Button";
import "./SliderContainer.css/";

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
    <div className="slider-container">
      {sliders.map((slider) => (
        <Card key={slider.id} className="mb-2 expense-card">
          <Card.Body>
            <SliderExpense
              getTotalSliderAmount={(value) =>
                updateSliderValue(slider.id, value)
              }
            />
          </Card.Body>
        </Card>
      ))}

      <Button className="button" onClick={addNewSlider}>
        Add New Slider
      </Button>
    </div>
  );
}

export default SliderContainer;
