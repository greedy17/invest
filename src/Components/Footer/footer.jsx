import React from 'react';  
import './footer.css';
import {Image} from 'react-bootstrap';
import {ImGithub, ImTwitter,ImInstagram} from 'react-icons/im';
import whiteLogo from '../../assets/images/whiteLogo.png';    

function Footer() {

 return(
     <React.Fragment>
               <div className="footer">
                   <div center>
                        <div className="center">
                            <h4 className="connect">Connect with us!</h4>
                            <div className="icons">
                            <ImGithub href="https://github.com/greedy17/invest"/><ImTwitter className="foot-icons"/><ImInstagram className="foot-icons"/>
                            </div>
                        </div>                      
                        <p className="text-center copy">Copyright &copy;<span><Image src={whiteLogo} height={20}/></span>2021</p>
                   </div>
               </div>
   </React.Fragment>
 )
}

export default Footer;