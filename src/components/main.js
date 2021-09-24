import React from 'react';
import Header from './header';
import JsonData from "../data/data.json";
import { Navigation } from './navigation';
import { useState, useEffect } from "react";
import About from './about';
import Contact from './contact';

const Main = () => {

    const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);    
  }, []);

    return(
        <div>
            <Navigation/>
            <Header data={landingPageData.Header}/>
            <About data={landingPageData.About}/>
            <Contact data={landingPageData.Contact}/>
        </div>
        );
    }

export default Main;
