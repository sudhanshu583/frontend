import {  TextFieldDemo } from './pages/TextFieldDemo';
function App() {
  return (
    <div className="App">
        <div className="popup-box">
          <div className="box">
            <span className="close-icon"><i class="fa fa-times-circle"></i>
                    </span>
              <TextFieldDemo />
          </div>
        </div>
    </div>
  );
}
export default App;
