/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from 'react';
import chatBotIcon from "../../assets/icons/ers1.gif";
import styles from './Chatbot.module.css';
import Loader from '../Loader';

const ChatboxMock = () => {
    const [isOpen, setIsOpen] = useState(false);
    const frameRef = useRef(null);
    const openRef = useRef(true);
    
    const toggleChatBox = () => {
      setIsOpen(!isOpen);
    };

     return (
        <>
        <div className={styles.chat_box_container} style={{ width: !isOpen ?  "6.815rem" :  undefined, }}>
                      <div style={{ position: "absolute", bottom: "20px", right: 0, maxWidth: "90px", maxHeight: "90px", background: "#fff", borderRadius: "50%",
                 border: "0.5px solid #152c5b", display : isOpen ? "none" : "block",

                  }} onClick={toggleChatBox}>
                         <img
                             src={chatBotIcon.src}
                             alt="chat-bot-icon"
                             className={styles.chat_bot_icon}
                             style={{ width: "86px", height: "86px", objectFit:"cover", position: "relative"  }}
                         />
                         <div className={styles.chatwithus}> 
                        <h1>Lets Chat!</h1>
                     </div>
                 </div>
                 {isOpen &&   <div style={{ position: "absolute", bottom: "434px", right: "26px", maxWidth: "10px", maxHeight: "10px", 
                 border: "0.5px solid transparent", 

                  }} onClick={toggleChatBox}>
                        <span style={{ color: "#FFF", fontSize: "38px", background: "#2f2483" }}>×</span>
                 </div>}

         <iframe
                ref={frameRef}
               src="https://www.ers.org.sz:5500"
               style={{
                 width: "450px",
                 height: "450px",
                 display: isOpen ? "block" : "none",
                 backgroundColor: "transparent !important",
               }}
               title="unique"
             />
   </div>

   </>
    );
};

export default ChatboxMock;
