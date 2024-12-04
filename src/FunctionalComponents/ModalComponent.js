import React, { useState } from "react";
import { CloseButton } from "react-bootstrap";
import {Spinner} from "react-bootstrap";

const ModalComponent = () => {
  const [showModalStatus, setShowModalStatus] = useState(false);

  const showModal = () => {
    setShowModalStatus((showModalStatus) => {
      return !showModalStatus;
    });
  };

  return (
    <>
      <button
        style={{ padding: "20px", backgroundColor: "white", borderRadius: "5px", margin: "10px" }}
        onClick={() => {
          showModal();
        }}
       className="bg-info">
        {" "}
        Show Modal
      </button>
      {showModalStatus && (
        <div className="Custommodal" style={{ position: "fixed", width: "100%", height: "100%", top: "0", left: "0", zIndex: "1000" }}>
          <div className="CustommodalContent" style={{ backgroundColor: "gray", width: "80%", margin: "auto", padding: "20px", borderRadius: "5px", zIndex: "1000", position: "relative", top: "50%", bottom: "25%" }}>
            <h1>
              My First Modal by CSS{" "}
              <CloseButton onClick={showModal} style={{ float: "right" }}>
              </CloseButton>
            </h1>
            <marquee>Welcome to the Custom Modal. i have created this Modal easily</marquee>
          </div>
        </div>


      )}
      <Spinner/>
    </>
  );
};

export default ModalComponent;
