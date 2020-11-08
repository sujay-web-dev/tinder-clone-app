import React from "react";
import Chat from "./Chat";
import "./Chats.css";


function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Ranbir Kapoor"
        message="Yo babe..!!"
        timestamp="40 seconds ago"
        profilepic="https://www.instantstories.com/uploads/stories/ranbir-kapoor/ranbir-kapoor-latest-hd-images-k3pr-lg.jpg?v=1570125006"
      />

      <Chat
        name="Alia Bhatt"
        message="Hey Handsome..!!"
        timestamp="40 seconds ago"
        profilepic="https://images.hdqwalls.com/download/quad-alia-bhatt-1366x768.jpg"
      />

      <Chat
        name="Parineeti"
        message="Yo babe..!!"
        timestamp="40 seconds ago"
        profilepic="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2019/06/23/840118-parineetichopra-053119.jpg"
      />

      <Chat
        name="Deepika"
        message="Yo babe..!!"
        timestamp="40 seconds ago"
        profilepic="https://www.thenewsminute.com/sites/default/files/Deepika_Padukone-1200-PTI.jpg"
      />

      <Chat
        name="Ranveer Singh"
        message="Yo babe..!!"
        timestamp="40 seconds ago"
        profilepic="https://static.toiimg.com/photo/65675521.cms"
      />

     
    </div>
  );
}

export default Chats;
