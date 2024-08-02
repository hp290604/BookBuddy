import React,{useState} from 'react';
import "./Header.css";
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from "date-fns";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faPlane , faCar, faTaxi, faCalendarDays,faPerson } from '@fortawesome/free-solid-svg-icons'
export default function Header(props){
    const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
    ]);
    const [openBtn,setOpenBtn] =useState(false);
    const [openDate, setOpenDate]=useState(false);
    const [options, setOptions]=useState({
       adult:1,
       children:0,
       room:1
    });

    let handleOnClick=(name,operation)=>{
        setOptions((prev)=>{
            return {
                ...prev,
                [name]:operation==="d"?options[name]-1:options[name]+1
            }
        })
    }
    return(
        <>
            <div className="header">
            <div className={props.type!=="notMuchHeader"?"headerContainer notMuchHeader":"headerContainer"}>
                <div className="headerList">
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faCar}/>
                        <span>Cars</span>
                    </div>
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faBed}/>
                        <span>Attractions</span>
                    </div>
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport Taxis</span>
                    </div>
                </div>

                {props.type!=="noMuchHeader" && <> <h1 className="headerTitle">A lifetime of discounts? It's Genius</h1>
                <p className="headerDesc">Get rewarded for your travels - Unlock instant savings of 10 % with a free BookBuddy account</p>
                <button className="headerBtn">Register/Sign in</button>
                <div className="headerSearch">
                    <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faBed} className
                    ="headerIcon"/>
                        <input type="text" placeholder="Where are you going?" className="searchInput"/>

                    </div>
                    <div className="headerSearchItem">
                    <FontAwesomeIcon className
                    ="headerIcon" icon={faCalendarDays} />
                        <span onClick={()=>{setOpenDate(!openDate)}} className="headerSearchText">{`${format(date[0].startDate, "MM/dd/yyyy")} To ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                        {openDate && <DateRange className="calender"
                            editableDateInputs={true}
                            onChange={(item) => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            />}

                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faPerson} className
                    ="headerIcon"/>
                    <span onClick={()=>{setOpenBtn(!openBtn)}} className="headerSearchText">`{options.adult}adult - {options.children}children - {options.room}room`</span>
                    {openBtn && <div className="options" >
                        <div className="optionItem">
                        <span className="optionText">Adults</span>

                            <div className="optionCntItem">

                            <button className="optionCounter" onClick={()=>handleOnClick("adult","d")} disabled={options.adult<=1}>-</button>
                            <span className="optionCnt">{options.adult}</span><button className="optionCounter" onClick= {()=>handleOnClick("adult","u")}>+</button>
                            </div>
                        </div>
                        <div className="optionItem">
                        <span className="optionText">Children</span>
                            <div className="optionCntItem">

                            <button disabled={options.children<=0} className="optionCounter" onClick= {()=>handleOnClick("children","d")}>-</button>
                            <span className="optionCnt">{options.children}</span><button className="optionCounter" onClick= {()=>handleOnClick("children","u")}>+</button>
                            </div>
                        </div>
                        <div className="optionItem">
                            <span className="optionText" >Room</span>
                            <div className="optionCntItem">

                            <button disabled={options.room<=1} className="optionCounter" onClick= {()=>handleOnClick("room","d")}>-</button>
                            <span className="optionCnt">{options.room}</span><button className="optionCounter" onClick= {()=>handleOnClick("room","u")}>+</button>
                            </div>
                        </div>


                    </div>}

                    </div>

                    <button className="SearchBtn">Search</button>
                </div></>}

                </div>
            </div>

        </>
    )
}
