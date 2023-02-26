import React from "react";
import { useState } from "react";
//import "./Pagination.css";
import "../pages/Home.css" 

export default function Pagination({ data, RenderComponent, title, pageLimit, dataLimit, tablePagination }) {
    const [pages] = useState(Math.floor(data.length / dataLimit) + 1);
    const [currentPage, setCurrentPage] = useState(1);

   // define functions for moving to the next or previous page + for changing to a specific page
    function goToNextPage() {
        setCurrentPage((page) => page + 1);
    }

    function goToPreviousPage() {
        setCurrentPage((page) => page - 1);
    }

    function changePage(event) {
        // parse the page number from the clicked button + update the current page
        const pageNumber = Number(event.target.textContent);
        setCurrentPage(pageNumber);
    }


    const getPaginatedData = () => {
        // calculate the start and end indices 
        const startIndex = currentPage * dataLimit - dataLimit;
        const endIndex = startIndex + dataLimit;
    
        // return a slice of the data array
        return data.slice(startIndex, endIndex);
    };
    
    const getPaginationGroup = () => {
        // Calculate the starting index for the current pagination group
        let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    
        // return an array of page numbers .
        return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
    };
    

    return (
        <>
            {tablePagination ? (
                    // if the 'tablePagination' prop is set to true, render the data 

                getPaginatedData().map((data, idx) => <RenderComponent key={idx} {...data} />)
            ) : (
                    // if the 'tablePagination' prop is set to falserender the data in container with no pagination.

                <div className="dataContainer d-flex justify-content-center flex-wrap">
                    <h1>{title}</h1>

                    {getPaginatedData().map((data, idx) => (
                        <RenderComponent key={idx} {...data} />
                    ))}
                </div>
            )}

            {/* show the next and previous buttons */}
            {data.length > dataLimit && (
                <div className="pagination">
                    <button onClick={goToPreviousPage} className={`prev ${currentPage === 1 ? "disabled" : ""}`}>
                        prev
                    </button>
                    {getPaginationGroup().map((item, index) => (
                        <button key={index} onClick={changePage} className={`paginationItem ${currentPage === item ? "active" : ""}`}>
                            <span>{item}</span>
                        </button>
                    ))}
                    <button onClick={goToNextPage} className={`next ${currentPage >= pages ? "disabled" : ""}`}>
                        next
                    </button>
                </div>
            )}
        </>
    );
}
