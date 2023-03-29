import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const WeatherInput = (props) => {
  const [cityName, cityNameHandler] = useState('');
  const onClickHandler = () => {
    props.btnclick(cityName);
  };

  return (
    <>
      <Form>
        <Form.Group>
          <Form.Label>City Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter City Name"
            value={cityName}
            onChange={(event) => cityNameHandler(event.target.value)}
          />
        </Form.Group>

        <Button variant="primary" onClick={onClickHandler}>
          Submit
        </Button>
      </Form>
    </>
  );
};

export default WeatherInput;
