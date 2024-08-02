import React from 'react';
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import Feature from "../../Components/featured/feature";
import "./home.css";
import Plist from '../../Components/propertyList/Plist';
export default function Home(){

    return (
        <>
            <Navbar/>
            <Header/>
            <div className="homeContainer">
                <Feature/>
                <h3>Browse by property type</h3>
                <Plist />
            </div>



        </>
    );
}
