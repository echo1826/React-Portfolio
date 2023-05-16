import React from "react";
import "./styles/Modal.css";

export default function modal({
    projectTitle,
    projectDescription,
    cardNumber,
    handleModalOpen,
}) {
    return (
        <div className="modal">
            <div className="modal-card">
                <div className="modal-title">
                    <h2>{projectTitle}</h2>
                </div>
                <div className="modal-body">
                    <p>{projectDescription}</p>
                    <button
                        className="close-button"
                        id={cardNumber}
                        onClick={handleModalOpen}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}
