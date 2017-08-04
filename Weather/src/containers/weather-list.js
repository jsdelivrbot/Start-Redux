import React,{Component} from "react";
import {connect} from "react-redux";
import {Line} from 'react-chartjs-2';

//import {Sparklines,SparklinesLine} from "react-sparklines";

class WeatherList extends Component{
  renderWeather(cityData){
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: temps
    }
  ]
};
    //this is similar to the following code:-
    /*cityData.list.map((weather) =>{
     temps.push(weather.main.temp);s
    });*/

    return(
        <tr key = {name}>
          <td>{name}</td>
          <td>
            <Line data={data} height={120} width={180}/>
          </td>
        </tr>
    );
  }
  render(){
    return (
      <table className = "table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps(state){
  return {
    weather:state.weather,
  };
}
export default connect(mapStateToProps)(WeatherList);
