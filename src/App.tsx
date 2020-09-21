import React, { useState, ChangeEvent } from 'react';
import {
  Grid,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
} from '@material-ui/core';

import Header from './Header';
import { getRandElement } from './utils';

function App() {
  const [state, setState] = useState({
    upper: false,
    numbers: false,
    specChars: false,
    length: 10,
  });

  const [pass, setPass] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newState = { ...state };
    const title = e.target.name as 'upper' | 'numbers' | 'length' | 'specChars';

    console.log(title);
    if (title === 'upper' || title === 'numbers' || title === 'specChars') {
      newState[title] = e.target.checked;
    } else {
      newState['length'] = parseInt(e.target.value);
    }

    setState(newState);
  };

  const handleGenerate = () => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const upAlphabet = alphabet.toUpperCase();
    const numbers = '0123456789';
    const specChars = '%&[]{}()=+-*/';

    const variants: [string] = [alphabet];

    if (state.upper) {
      variants.push(upAlphabet);
    }

    if (state.numbers) {
      variants.push(numbers);
    }

    if (state.specChars) {
      variants.push(specChars);
    }

    let password = '';

    for (let i = 0; i < state.length; i += 1) {
      const type = getRandElement(variants);
      password += getRandElement(type.split(""))
    }

    setPass(password);
  };

  return (
    <div className="App">
      <Header />
      <Grid container justify="center">
        <TextField disabled value={pass} />
        <Grid container justify="center">
          <Grid container justify="center">
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.upper}
                  onChange={handleChange}
                  name="upper"
                  color="primary"
                />
              }
              label="Big letters"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.numbers}
                  onChange={handleChange}
                  name="numbers"
                  color="primary"
                />
              }
              label="Numbers"
            />
          </Grid>
          <Grid container justify="center">
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.specChars}
                  onChange={handleChange}
                  name="specChars"
                  color="primary"
                />
              }
              label="Special Characters"
            />
            <TextField
              type="numbers"
              name="length"
              value={state.length}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Button onClick={handleGenerate} color="primary" variant="contained">
          Generate
        </Button>
      </Grid>
    </div>
  );
}

export default App;
