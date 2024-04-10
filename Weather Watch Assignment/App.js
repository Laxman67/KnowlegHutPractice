
import React, { Component,createRef } from "react";
import debounce from 'lodash.debounce'
import Input  from "./components/Input"
import SearchResults from "./components/SearchResults";
import SetUnits from './components/SetUnits'
import WeatherReport from "./components/WeatherReport";

class App extends Component {
    state={
        searchResults :[],
        error:false,
        isLoading: true,
        selectedLocId :0,
        tempUnit:"C",
        weatherData:{}
    }
searchRef = createRef()
componentDidMount(){
    this.searchRef.current.focus()
    this.getWeather()
}
componentDidUpdate(_,prevSate){
    if(prevSate.selectedLocId!==this.state.selectLocation || prevSate.tempUnit!==this.state.tempUnit)
    {
        this.getWeather()
    }
}

searchLocation =debounce(keyword=>{
    fetch(`https://api/weatherserver.com/weather/cities/${keyword}`)
    .then((res)=>res.json())
    .then(({results})=>this.setState({searchResults:results,error:false}))
    .catch(()=>this.setState({error:true}))


},200)

getWeather =()=>{
    this.setState({
        searchResults:[],
        isLoading:true,
        error:false
    })
this.searchRef.current.value=""
    fetch(`https://api/weatherserver.com/weather/current/${this.state.selectedLocId}/${this.state.tempUnit}`)
    .then((res)=>res.json())
    .then(({results})=>this.setState({weatherData:results,isLoading:false}))
    .catch(()=>this.setState({error:true}))


}
  render() {
    return (
      <div className="weather-app">
        <h1>WeatherWatch</h1>
        <Input label="LOCATION" onInput={e=>this.searchLocation(e.target.value)} inputRef ={this.searchRef} />
        {
            this.state.searchResults.length>0 && (
                <SearchResults  data={this.state.searchResults}  selectLocation={cityId=>this.setState({selectedLocId:cityId})}/>
              
            )
        }

        
                <SetUnits
                 value={this.state.tempUnit} 
                 onSet={e=>this.setState({tempUnit:e.target.value})}
                 />


                 {
                    this.state.isLoading? (<div className="is-loading"/>):(
                        <WeatherReport weatherData={this.state.weatherData}
                        units={this.state.tempUnit}
                        />
                    )
                 }
                 {this.state.error? <div className="error-panel"/> :null}
      </div>

    );
  }
}

export default App;
