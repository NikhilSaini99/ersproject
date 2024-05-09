/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from 'react';
import chatBotIcon from "../../assets/icons/ers1.gif";
import styles from './Chatbot.module.css';
import Loader from '../Loader';

const ChatboxMock = () => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef(null);
    const [isLoading, setLoading] = useState(false);
    const [showDefaultLoader, setShowDefaultLoader] = useState(false);

    const toggleChatBox = () => {
        setIsOpen(!isOpen);
        setShowDefaultLoader(true);
        if (!isOpen) {
          setTimeout(() => {
              setShowDefaultLoader(false); // Hide default loader after 5 seconds
          }, 7000);
      }
    };


    useEffect(() => {
        const loadScript = async () => {
            setLoading(true);
            try {
                if (!document.getElementById('chat-bot-script')) {
                    const script = document.createElement('script');
                    script.id = 'chat-bot-script';
                    script.type = 'text/javascript';
                    script.src = 'http://website.ers.org.sz:5500/dist/chat-bot.bundle.js';
                    script.async = true;
                    script.onload = () => {
                        setLoading(false);
                      
                    };
                    script.onerror = () => {
                        setLoading(false); // Set loading to false on error
                    };
                    // containerRef.current.appendChild(script);
                    document.body.append(script)
                } else {
                    setLoading(false);
                }
            } catch (error) {
                console.error('Error loading script:', error);
                setLoading(false);
            }
        };

        const handleDocumentClick = (event) => {
            if (event.target.classList.contains("close-btn") || event.target.closest(".close-btn")) {
                toggleChatBox();
            }
        };

        if (isOpen) {
            loadScript();
            document.addEventListener('click', handleDocumentClick);
        } else {
            const scriptElement = document.getElementById('chat-bot-script');
            if (scriptElement ) {
                // containerRef.current.removeChild(scriptElement);
                document.body.removeChild(scriptElement);
            }
            document.removeEventListener('click', handleDocumentClick);
        }

        return () => {
            document.removeEventListener('click', handleDocumentClick);
        };
    }, [isOpen]);


    return (
        <div className={styles.chat_box_container}>
            {isLoading || (isOpen && showDefaultLoader)? <Loader/> :
                <div onClick={toggleChatBox}>
                    <div className={styles.icon_container} >
                        <img
                            src={chatBotIcon.src}
                            alt="chat-bot-icon"
                            className={styles.chat_bot_icon}
                            style={{ width: "100%", height: "100%", objectFit:"cover"  }}
                        />
                    </div>
                    <div className={styles.chatwithus}> 
                        <h1>Let's Chat!</h1>
                    </div>
                </div>
            }
            {isOpen  && (
                <div ref={containerRef}></div>
            )}
        </div>
    );
};

export default ChatboxMock;
