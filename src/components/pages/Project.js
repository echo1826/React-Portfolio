import React from "react";
import "../styles/Project.css";
import Modal from "../modal";

function Project({ project, modalOpen, handleModalOpen, cardNumber }) {
    // const [modalOpen, setModalOpen] = React.useState(true);
    // const handleModalOpen = (e) => {
    //     e.preventDefault();
    //     if(!modalOpen) {
    //         setModalOpen(true);
    //     }else {
    //         setModalOpen(false);
    //     }
    // }
    console.log(modalOpen[cardNumber]);

    return (
        <li className="card">
            <a
                href={project.deployed}
                style={{ textDecoration: "none", color: "black" }}
                target="_blank"
                rel="noreferrer"
            >
                <img
                    className="image"
                    src={project.image}
                    alt={project.title}
                />
            </a>
            <div className="card-body">
                <h3 style={{ marginTop: "1rem", fontSize: "1.25rem" }}>
                    {project.title}
                </h3>
                <p style={{ fontWeight: "bolder" }}>{project.stack}</p>
                <button
                    onClick={handleModalOpen}
                    className="modal-button"
                    id={cardNumber}
                >
                    Description
                </button>
                <div className={modalOpen ? "" : "modal-background"}>
                    {modalOpen[cardNumber] ? (
                        <Modal
                            handleModalOpen={handleModalOpen}
                            projectDescription={project.description}
                            projectTitle={project.title}
                            cardNumber={cardNumber}
                        ></Modal>
                    ) : (
                        <></>
                    )}
                </div>
                <a href={project.repo} target="_blank" rel="noreferrer">
                    <p className="github-button">Github Repo</p>
                </a>
            </div>
        </li>
    );
}

export default Project;
