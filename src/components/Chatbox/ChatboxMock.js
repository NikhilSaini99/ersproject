/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import chatBotIcon from "../../assets/icons/chat-box.png"
import styles from './Chatbot.module.css'
const ChatboxMock = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleChatBox = () => {
      setIsOpen(!isOpen);
    };
  return (
    <div className={styles.chat_box_container}>
         <div className={styles.icon_container}>
                <img src={chatBotIcon.src} alt="chat-bot-icon" className={styles.chat_bot_icon} onClick={toggleChatBox} style={{display: isOpen? "none" : "block"}} />
            </div>
            {isOpen && (
          <div className={styles.chat_box}>
            <div className={styles.chat_header}>
              <div style={{ width: "45px", height: "45px" }}>
                <img
                 src={chatBotIcon.src}
                  alt="Chat Bot Icon"
                  style={{
                    width: "100%",
                    height: "100%",
                    background: isOpen ? "transparent" : "transparent"
                  }}
                />
              </div>
              <h6>
                    
              </h6>
              <button className={styles.close_btn} onClick={toggleChatBox}>
                X
              </button>
            </div>
            <div className={styles.chat_messages}>
              <iframe
                src="https://www.tutorialrepublic.com/html-tutorial/html-iframes.php"
                style={{
                  width: "100%",
                  height: "100%"
                }}
                title="unique"
              />
            </div>
          </div>
        )}

    </div>
  )
}

export default ChatboxMock