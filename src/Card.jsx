import React from 'react'

export default function Card(props) {
    return (
        <>

            <div className="col-md-4">





                <div className="card shadow-lg p-3 mb-5 bg-body rounded" style={{ width: "18rem" }}>
                    <img src={props.data} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.description}</p>
                        <a href={props.link} className=" btn btn-outline-secondary" target="_blank">Watch Now</a>
                    </div>
                </div>
            </div>

        </>
    )
}
