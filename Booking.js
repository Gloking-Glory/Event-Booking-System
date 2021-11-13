import React from 'react'
import { Link } from 'react-router-dom';
import Image1 from './images/image1.jpeg';
import Image2 from './images/image2.jpeg';
    import Image3 from './images/image3.jpg';
import Image4 from './images/image4.jpg'

export default function Booking({hallBook, setHallBook, ...props}) {
    return (
        <div id="bookingBackground">
            <div>
                <Link to="/user" class="btn mt-2 bg-secondary text-light">BACK</Link>
            </div>
            <div id="carousel slide" data-ride="carousel" id="myCarousel">
                <ol class="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                    <li data-target="#myCarousel" data-slide-to="3"></li>
                </ol>

                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={Image2} alt="Image2" className="d-block" />
                    </div>
                    <div class="carousel-item">
                        <img src={Image3} alt="Image3" className="d-block" />
                    </div>
                    <div class="carousel-inner">
                        <img src={Image1} alt="Image1" className="d-block" />
                    </div>
                    <div className="carousel-item">
                        <img src={Image4} alt="Image4" className="d-block" />
                    </div>

                    <a class="carousel-control-prev" href="#myCarousel" data-slide="prev">
                        <span class="carousel-control-prev-icon"></span>
                    </a>
                    <a class="carousel-control-next" href="#myCarousel">
                        <span class="carouesl-control-next-icon"></span>
                    </a>
                </div>

            </div>

            <div class="d-inline-flex flex-row p-3">
                <div class="p-2">
                    <img src={Image1} alt="Image1" id="bookImage" />
                    <h2>{hallBook.hall}</h2>
                    <h4>{hallBook.location}</h4>
                    <p>{hallBook.price}</p>
                </div>
                <div class="p-2">
                    <h5>Date of Booking:</h5>
                    <input onChange={e => setHallBook({...hallBook, date: e.target.value})} type="Date" class="form-control" />
                    
                    <h5>Time of Booking:</h5>
                    <input onChange={e => setHallBook({...hallBook, time: e.target.value})} type="Time" class="form-control" />
                    
                    <h5>Purpose: </h5>
                    <textarea onChange={e => setHallBook({...hallBook, purpose: e.target.value})} placeholder="Purpose" class="form-control" />
                    <Link onClick={()=> props.setBookedHall([...props.bookedHall, hallBook])} class="btn bg-danger text-light" to="/user">BOOK</Link>
                </div>
            </div>


            {/* <div id="myCarousel" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                    <li data-target="#myCarousel" data-slide-to="3"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={Image2} alt="Image2" class="d-block w-50" />
                    </div>
                    <div class="carousel-item">
                        <img src={Image1} class="d-block w-50" alt="Image1" />
                    </div>
                    <div class="carousel-item">
                        <img src={Image3} alt="Image3" class="d-block w-50" />
                    </div>
                    <div class="carousel-item">
                        <img src={Image4} alt="Image4" class="d=block w-50" />
                    </div>
                </div>

                <a class="carousel-control-prev" href="#myCarousel" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                </a>
                <a class="carousel-control-next" href="#myCarousel" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                </a>
            </div> */}
        </div>
    )
}
