import React from 'react'
import { Link } from 'react-router-dom';
import EventUserNav from './EventUserNav';
import Image1 from './images/image1.jpeg';
import Image2 from './images/image2.jpeg';
export default function EventUser({booking, ...props}) {
    return ( <div id="userBackground" class="text-light">
            <EventUserNav></EventUserNav>
            <h2>{props.loginUsername}, welcome to your Dashboard</h2>
            {booking.map((val, i)=> (
                <div class="d-inline-flex flex-row p-3 justify-content-start" key={i}>
                    <div class="p-2">
                        <img src={Image1} alt="Image1" id="image1" />
                    </div>
                    <div class="p-2">
                            <h1>{val.hall}</h1>
                            <h3>{val.location}</h3>
                            <h6>{val.price}</h6>
                            <Link class="btn bg-danger text-light" onClick={()=> props.setHallBook({hall: val.hall, location: val.location, price: val.price, date: "", time: "", purpose: ""})} to="/book">
                            BOOK</Link>
                    </div>
                </div>
            ))}
        </div>
    )
}
