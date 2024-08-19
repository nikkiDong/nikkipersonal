import React from "react";
import { FiInstagram, FiGithub, FiLinkedin} from "react-icons/fi";

const Social = () => {
    return (
        
<div className="home__social">
<a href="https://instagram.com/nikkiymdong" className="home__social-icon" target="_blank">
    <FiInstagram />
</a>
<a href="https://github.com/nikkiDong" className="home__social-icon" target="_blank" >
    <FiGithub />
</a>
<a href="https://www.linkedin.com/feed/" className="home__social-icon" target="_blank"  >
    <FiLinkedin />
</a>    
</div>
        
    ); 
}

export default Social;
