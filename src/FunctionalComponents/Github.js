import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
const Github = () => {
    const [githubData, setGithubData] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);

    useEffect(() => {
        fetch(`https://api.github.com/repositories/1296269/issues?page=${pageNumber}&per_page=10`)
            .then((data) => {
                return data.json();
            })
            .then((dataFinal) => {
                console.log(dataFinal)
                if (dataFinal.length > 0) {
                    setGithubData([...githubData, ...dataFinal])
                }
            })
    }, [pageNumber, githubData])
    return (<>
        <h1>These are Github Issues</h1>
        <Table responsive striped bordered hover>
            <thead>
                <tr><th style={{ width: "25%" }}>Id</th>
                    <th style={{ width: "45%" }}>URL</th>
                    <th style={{ width: "15%" }}>User Id</th>
                    <th style={{ width: "15%" }}>Number</th>
                </tr>
            </thead>
            <tbody>
                {githubData?.map((issue) => {
                    return (<tr key={issue?.number}>
                        <td>{issue?.id}</td>
                        <td>{issue?.url}</td>
                        <td>{issue?.user?.id}</td>
                        <td>{issue?.number}</td>
                    </tr>)


                })}
            </tbody>
        </Table>
        <button onClick={() => {
            setPageNumber((pageNumber) => pageNumber + 1)
        }} style={{ margin: "20px", color: "white", backgroundColor: "black", padding: "20px" }}>Load More</button>
    </>)
}

export default Github;