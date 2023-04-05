import React from "react";
import './home.css';
import Sky from '../../img/Parallex-img/Sky.png';
import Cloud from '../../img/Parallex-img/Cloud.png';
import Mountain from '../../img/Parallex-img/Mountain.png';
import Ground from '../../img/Parallex-img/Ground.png';
import About from '../../img/Home-img/about.png';


export const Home = () =>{
    return(
    <div>
        
        <section className="parallax">        
            <img src={Sky} alt="" className="sky"></img>   
            <img src={Cloud} alt=""  className="cloud"></img>
            <h2 className="text">Painted Portal</h2>
            <img src={Mountain} alt=""  className="mountain"></img>
            <img src={Ground} alt=""  className="ground"></img>
        </section>

        <section className="sec">
        <center>
            <h2>Latest Paintings</h2>
        </center>
            <p>
            {/* <img src={Shiva} /> */}
            </p>
        </section>

        <section  className="sec">

            <center><h2>About us</h2></center>
            
            <p className="about-img"><img src={About} alt=""  height="400px" /></p>
           
            <p className="about-disc">xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz  xyz xyz xyz xyz xyz  xyz xyz xyz
            xyz xyz xyz xyz <br /> xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz
            xyz xyz xyz xyz xyz xyz <br /> xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz
            xyz xyz xyz xyz xyz xyz xyz <br /> xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz
            </p>
           
        </section>
    
    </div>
    )
};