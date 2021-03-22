import {  TextField } from '../../components/TextField';

const TextFieldDemo =() => {
    return (
      <div>
        <TextField valueText={"Disabled"} labelName={"This is disable input"} disProps={true} errorTxt={""}/>
        <TextField valueText={"Accessible"} labelName={"A valid input"} disProps={false} errorTxt={""}/>
        <TextField valueText={"101"} labelName={"An input with error"} disProps={false} errorTxt={"Could not be greater than"}/>
      </div>
    );
}
export default TextFieldDemo;