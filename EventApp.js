import React, { useState } from 'react'
import { Route, Switch } from 'react-router';
import EventReg from './components/EventReg';
import EventLog from './components/EventLog';
import EventNav from './components/EventNav';
import EventAdmin from './components/EventAdmin';
import EventUser from './components/EventUser';
import Booking from './components/Booking';
import RequestBooking from './components/RequestBooking';
import EventUserHistory from './components/EventUserHistory';
export default function App() {
  let [loginUsername, setLoginUsername] = ("");
  let [booking, setBooking] = useState([]);
  let [bookedHall, setBookedHall] = useState([]);
  let [bookedStatus, setBookedStatus] = useState([]);
  let [hallBook, setHallBook] = useState({hall: "", location: "", price: "", date: "", time: "", purpose: "", status: ""});

  const bookStatus =(action, ind)=> {
    if (action === "accept") {
      setBookedStatus([...bookedStatus, {...hallBook, status: "Accept"}]);
      setBookedHall(bookedHall.filter((_, i)=> i !== ind));
    } else if (action === "decline") {
      setBookedStatus([...bookedStatus, {...hallBook, status: "Decline"}]);
      setBookedHall(bookedHall.filter((_, i)=> i !== ind));
    };
  }
  return (
    <div>
      <EventNav />
      <Switch>
        <Route exact path='/'>
          <EventReg></EventReg>
        </Route>
        <Route exact path="/login">
          <EventLog setLoginUsername={setLoginUsername}></EventLog>
        </Route>
        <Route exact path="/admin">
          <EventAdmin booking={booking} setBooking={setBooking} bookedHall={bookedHall}></EventAdmin>
        </Route>
        <Route exact path="/user">
          <EventUser booking={booking} setBooking={setBooking} hallBook={hallBook} setHallBook={setHallBook} loginUsername={loginUsername}></EventUser>
        </Route>
        <Route exact path="/book">
          <Booking hallBook={hallBook} setHallBook={setHallBook} bookedHall={bookedHall} setBookedHall={setBookedHall}></Booking>
        </Route>
        <Route exact path="/bookingRequest">
          <RequestBooking bookedHall={bookedHall} bookStatus={bookStatus}></RequestBooking>
        </Route>
        <Route exact path="/bookingHistory">
          <EventUserHistory bookedStatus={bookedStatus}></EventUserHistory>
        </Route>
      </Switch>
    </div>
  )
}