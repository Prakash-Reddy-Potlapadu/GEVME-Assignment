import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import "./SidePanel.scss";

function SidePanel(props) {
    // when enable mask is false then background mask lifted or removed .
    const { children, title, onClose, contentPaneStyles, enableMask = true, style, isMouseOutClose = true } = props;
    const sidePanelRef = useRef();
    //Hide sidepanel when escape button is pressed.
    useEffect(() => {
        if (isMouseOutClose) {
            const listener = (e) => {
                if (e.keyCode === 27) {
                    onClose(e);
                } else if (!sidePanelRef.current.contains(e.target) && e.target.id !== "btnModelYes" && e.target.id !== "btnModelNo") {
                    onClose(e);
                }
            };
            document.addEventListener("keyup", listener);
            document.addEventListener("pointerdown", listener);
            return () => {
                document.removeEventListener("keyup", listener);
                document.removeEventListener("pointerdown", listener);
            };
        }
    }, [onClose]);

    return createPortal(
        <div id={props.id}>
            <div className={enableMask ? "overlay" : undefined} />
            <div style={style} className="sidepanel" ref={sidePanelRef}>
                <div className="sidepanel-header">
                    <label>{title}</label>
                    <i id="sidePanelClose" className="sidepanel-close" onClick={onClose} >X</i>
                </div>

                <div className="sidepanel-content" style={contentPaneStyles}>
                    {children}
                </div>
            </div>
        </div>,
        document.querySelector("body")
    );
}

export default SidePanel;
