
import * as React from "react";
import { render } from "react-dom";
import { calendar } from "../../declarations/calendar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

const MyHello = () => {
  const [name, setName] = React.useState('');
  const [message, setMessage] = React.useState('');

  async function doGreet() {
    const greeting = await calendar.greet(name);
    setMessage(greeting);
  }

  return (
    <Button>bootsrtap</Button>
  );
};

render(<MyHello />, document.getElementById("app"));