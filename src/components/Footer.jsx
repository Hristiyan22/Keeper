import React from "react";

function Footer(){
    const currentYear = new Date().getFullYear();
    const footer = <footer><p >Copyright  ⓒ {currentYear}</p></footer>;
    
    return footer;
}

export default Footer;