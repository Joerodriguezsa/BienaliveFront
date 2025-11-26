import React, { useState, useCallback, useMemo } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import debounce from 'lodash.debounce';

const RangeSlider = () => {
  const [price, setPrice] = useState([10, 60]);

  // Debounce the slider change handler to reduce unnecessary re-renders
  const debouncedHandleChange = useCallback(
    debounce((value) => {
      setPrice(value);
    }, 100), // 100ms debounce delay
    []
  );

  // Memoize the formatted price value
  const formattedValue = useMemo(() => `$${price[0]} - $${price[1]}`, [price]);

  return (
    <div className="range-slider clearfix">
      <div className="price-range-slider mb-10">
        <Slider
          range
          min={0}
          max={100}
          value={price}
          onChange={debouncedHandleChange}
        />
      </div>
      <div className="clearfix">
        <p>Price:</p>
        <div className="input">
          <input
            type="text"
            className="property-amount"
            name="field-name"
            value={formattedValue}
            readOnly
          />
        </div>
        <input type="submit" value="Filter" />
      </div>
    </div>
  );
};

export default RangeSlider;