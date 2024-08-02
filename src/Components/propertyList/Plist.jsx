import React from 'react';
import "./pList.css";
export default function Plist(){

    return (
        <>
        <div className="pList">
            <div className="pListItem">
                <img className="pListImg" src="https://c4.wallpaperflare.com/wallpaper/624/380/1000/life-resort-hotel-resort-hotel-wallpaper-preview.jpg" alt="hotels"/>
                <div className="pListTitle">
                <h2>Hotels</h2>
                <p>500+ hotels</p>
                </div>
            </div>
            <div className="pListItem">
                <img className="pListImg" src="https://w0.peakpx.com/wallpaper/94/431/HD-wallpaper-luxurious-interior-hotel-apartments-brown-leather-sofa-white-marble-table-stylish-apartment-design.jpg" alt="apts"/>
                <div className="pListTitle">
                <h2>Apartments</h2>
                <p>400+ apartments</p>
                </div>
            </div>
            <div className="pListItem">
                <img className="pListImg" src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=600" alt="villa"/>
                <div className="pListTitle">
                <h2>Villas</h2>
                <p>350+ Villas</p>
                </div>
            </div>
            <div className="pListItem">
                <img className="pListImg" src="https://images.pexels.com/photos/261169/pexels-photo-261169.jpeg?cs=srgb&dl=pexels-pixabay-261169.jpg&fm=jpg" alt="resort"/>
                <div className="pListTitle">
                <h2>Resorts</h2>
                <p>600+ Resorts</p>
                </div>
            </div>

        </div>

        </>
    );
}
