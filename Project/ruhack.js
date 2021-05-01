import { Textbox } from 'react-inputs-validation';

<Textbox
  attributesInput={{ // Optional.
    id: 'Name',
    name: 'Name',
    type: 'text',
    placeholder: 'Place your name here ^-^',
  }}
  value={nameRg} // Optional.[String].Default: "".
  placeholder="Place your name here ^-^" // Optional.[String].Default: "".
  onChange={(name, e) => {
    this.setState({ nameRg });
    console.log(e);
  }} // Required.[Func].Default: () => {}. Will return the value.
  onBlur={(e) => {console.log(e)}} // Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
  validationOption={{
    reg: /^d{5}$/, // Optional.[Bool].Default: "" Custom regex.
    regMsg: 'failed in reg.test(value)' // Optional.[String].Default: "" Custom regex error message.
  }}
/>