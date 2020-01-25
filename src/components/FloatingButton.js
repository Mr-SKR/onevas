import React from "react";
import { Fab, Action } from 'react-tiny-fab';
import 'react-tiny-fab/dist/styles.css';

function FloatingButton() {
    return(
        <Fab
            mainButtonStyles={{
                outline: 'none',
                outline_offset: 'none',
                box_shadow: 'none',
                backgroundColor: '#c62828',
            }}
            position={{
                bottom: 10,
                right: 0,
            }}
            icon={<i className="fa fa-phone" />}
            event="click"
            >
            <a href="https://wa.me/917483006036" target="_blank" rel="noopener noreferrer">
                <Action
                    text="WhatsApp"
                    style={{
                        outline: 'none',
                        outline_offset: 'none',
                        box_shadow: 'none',
                        backgroundColor: '#128c7e',
                    }}
                    >
                    <i className="fa fa-whatsapp" />
                </Action>
            </a>
            <a href="tel:+917483006036" target="_blank" rel="noopener noreferrer">
                <Action
                    text="Call"
                    style={{
                        outline: 'none',
                        outline_offset: 'none',
                        box_shadow: 'none',
                        backgroundColor: '#34b7f1',
                    }}
                    >
                    <i className="fa fa-phone" />
                </Action>
            </a>
        </Fab>
    )
}

export default FloatingButton;