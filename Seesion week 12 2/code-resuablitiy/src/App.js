import { Component } from "react";
import Input from "./Input";
import Weather from "./weather";

class App extends Component {
  render() {
    return (
      <>
        <Input render={(value) => <b>{value}</b>} />
        <Input render={(value) => <b>{value.toUpperCase()}</b>} />
        <Weather
          location={"batala"}
          render={({
            error,
            isLoading,
            temperature,
            conditions,
            icon,
            place,
          }) => {
            <>
              <p>error</p>
              <p>isLoading</p>
              <p>temperature</p>
              <p>conditions</p>
              <p>icon</p>
              <p>place</p>
            </>;
          }}
        />
      </>
    );
  }
}

export default App;
