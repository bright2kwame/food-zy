import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/App.css'
import '../css/Notfound.css'
import '../css/Home.css'
import {
  Link
} from "react-router-dom";

function HomeComponent() {
  return (
    <div>
       <h2>We Love FoodZy</h2>
        <div id="myCarousel" className="carousel slide" data-ride="carousel">  
        <div className="carousel-inner">		
            <div className="carousel-item active">
                <div className="img-box"><img src="https://www.delonghi.com/Global/recipes/multifry/pizza_fresca.jpg" alt=""/></div>
                <p className="testimonial">Phasellus vitae suscipit justo. Mauris pharetra feugiat ante id lacinia. Etiam faucibus mauris id tempor egestas. Duis luctus turpis at accumsan tincidunt. Phasellus risus risus, volutpat vel tellus ac, tincidunt fringilla massa. Etiam hendrerit dolor eget rutrum.</p>
                <p className="overview"><b>FoodZy Inc.</b>Made with Love in <a href="#">Ghana.</a></p>
                <div className="star-rating">
                    <ul className="list-inline">
                        <li className="list-inline-item"><i className="fa fa-star"></i></li>
                        <li className="list-inline-item"><i className="fa fa-star"></i></li>
                        <li className="list-inline-item"><i className="fa fa-star"></i></li>
                        <li className="list-inline-item"><i className="fa fa-star"></i></li>
                        <li className="list-inline-item"><i className="fa fa-star-o"></i></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="text-center"><button className="btn btn-default"><Link to="/login">Login</Link></button> <button className="btn btn-primary"><Link to="/register">Create Account</Link></button></div>
        </div>
    </div>
  );
}
export default HomeComponent;


