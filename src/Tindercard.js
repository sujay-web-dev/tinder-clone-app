import React, { useEffect, useState } from "react";
import "./Tindercard.css";
import TinderCard from "react-tinder-card";
import database from "./firebase"

const Tindercard = () => {
  const [people, setpeople] = useState([]);


  useEffect (() => {
    //   this is where the code runs
    const unsubscribe = database.collection("people").onSnapshot(snapshot => {
        setpeople(snapshot.docs.map(doc => doc.data()))
    });

    return () => {
        unsubscribe();
    };
    
  }, []);


  return (
    <div className="tindercards">
      
      <div className="tindercards__cardcontainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
          >
            <div
              className="card"
              style={{ backgroundImage: `url(${person.url})` }}
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default Tindercard;
