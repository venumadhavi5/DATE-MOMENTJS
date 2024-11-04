import logo from './logo.svg';
import './App.css';
import moment from 'moment';

function App() {
  let monthsArr =["January","February","March","April","May","June","July","August","September","October","November","December"]
  let daysArr = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
 //let myBirthDayDate = new Date(1993,4,23,10,30,25,555);
  //let myBirthDayDate = new Date(523486785263);
 //let myBirthDayDate = new Date("23 may 1993");
 let myBirthDayDate = new Date();

  //console.log(myBirthDayDate.getFullYear());
  //console.log(monthsArr[myBirthDayDate.getMonth()]);
  //console.log(daysArr[myBirthDayDate.getDay()]);
  //console.log(myBirthDayDate.getDate());
  //console.log(myBirthDayDate.getHours());
  //console.log(myBirthDayDate.getMinutes());
 // console.log(myBirthDayDate.getSeconds());
  //console.log(myBirthDayDate.getMilliseconds());
  //console.log(myBirthDayDate.getTime());
  return (
    <div className="App">
     <h1>Learning Date Classes</h1>
     <form>
      <div>
        <label>Gold Scheme Date</label>
        <input type="datetime-Local" onChange={(eo)=>{
         let selectedDate = new Date(eo.target.value);
        console.log( moment(selectedDate).add(330, 'days').calendar()); 
         //console.log(selectedDate.setFullYear(2030));
         console.log(selectedDate.getFullYear());
  console.log(monthsArr[selectedDate.getMonth()]);
  console.log(daysArr[selectedDate.getDay()]);
  console.log(selectedDate.getDate());
  console.log(selectedDate.getHours());
  console.log(selectedDate.getMinutes());
  console.log(selectedDate.getSeconds());
  console.log(selectedDate.getMilliseconds());
  console.log(selectedDate.getTime());
 
  let schemeDuration = 330*24*60*60*1000;
  let schemeEndDateinMs = selectedDate.getTime()+schemeDuration;
  let schemeEndDate = new Date(schemeEndDateinMs);
  console.log(schemeEndDate);


        }}></input>
      </div>
     </form>
     <button type='button' onClick={()=>{
      console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
      console.log(moment().format());
     }}>momentjs</button>
    </div>
  );
}

export default App;
