import React from "react";
import './footer.css';


export const Footer = () =>{
    return(
    <div>
        
        <section className="foot">

                
            <div class="container">
        
            {/* <div class="col-sm-auto">
                    <ul class="list-inline list-social list-inline-sm">
                        <li><a class="icon mdi mdi-facebook" href="#"></a></li>
                        <li><a class="icon mdi mdi-twitter" href="#"></a></li>
                        <li><a class="icon mdi mdi-instagram" href="#"></a></li>
                    </ul>
                </div> */}

                <div class="col-sm-auto" className="cc">
                    <p class="rights"><span>©&nbsp; </span><span class="copyright-year">2023</span><span>&nbsp;</span><span>paintedportait</span><span>.&nbsp; Developed by 51Solution's</span></p>
                </div>
                    
            </div>
                

        </section>

    </div>
    )
};