import React from "react";
import { Spinner } from "react-bootstrap";

// loading widget so user is aware content is loading
function Loading() {
    return (
        <div className="loading-container" style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Spinner animation="grow" />
        </div>
    );
}

export default Loading;
