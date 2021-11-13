import React, { useState } from 'react'
import EventAdminNav from './EventAdminNav';
import Image1 from './images/image1.jpeg';
import Image2 from './images/image2.jpeg';

export default function EventAdmin({booking, setBooking, ...props}) {
    let [book, setBook] = useState({hall: "", location: "", price: ""});
    
    return (
        <>
            <div id="adminBackground">
                <EventAdminNav bookedHall={props.bookedHall}></EventAdminNav>

                <div class="adminInfo">
                    <h5 class="mt-2">EVENT CENTRE NAME:</h5>
                    <input class="adminInput form-control" onChange={e => setBook({...book, hall: e.target.value})} placeholder="Event Centre" />
                    &nbsp; &nbsp;&nbsp;
                    <h5 class="mt-2">EVENT CENTRE LOCATION:</h5>
                    <input class="adminInput form-control" onChange={e => setBook({...book, location: e.target.value})} placeholder="Location" />
                </div>
                <div class="adminInfo mt-3">
                    <h5 class="mt-2">EVENT CENTRE PRICE:</h5>
                    <input class="adminInput form-control" onChange={e => setBook({...book, price: e.target.value})} placeholder="Price" />
                    &nbsp; &nbsp;&nbsp;
                    <button class="btn bg-danger text-light" onClick={()=> setBooking([...booking, book])}>ADD</button>
                </div>
                
                <h3>EVENT CENTRE ADDED</h3>
                <table class="table text-light">
                    <thead class="bg-primary">
                        <th>S/N</th>
                        <th>EVENT CENTRE</th>
                        <th>LOCATION</th>
                        <th>PRICE</th>
                        <th>PICTURE</th>
                    </thead>

                    <tbody class="bg-secondary">
                        {booking.map((val, i)=> (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{val.hall}</td>
                                <td>{val.location}</td>
                                <td>{val.price}</td>
                                <td>
                                    <img class="adminImg" src={Image1} alt="Image1" />
                                    <img class="adminImg" src={Image2} alt="Image2" />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
