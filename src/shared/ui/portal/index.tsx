import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

type ModalProps = {
    children: React.ReactNode;
}

export function Portal({ children }: ModalProps): JSX.Element | null {
    const [container, setContainer] = useState<HTMLDivElement | null>(null);

    useEffect(() => {
        document.body.style.overflowY = "hidden"; //to prevent scolling when modal is opened 

        const div: HTMLDivElement = document.createElement("div");

        document.body.appendChild(div);

        setContainer(div);

        return () => {
            document.body.removeChild(div);
            document.body.style.overflowY = "auto";
        }

    }, []);

    return container ? createPortal(children, container) : null

}