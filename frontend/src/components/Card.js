import React from 'react'

export default function Card(props) {
    console.log(props)
    return (
        <section className="card--section">
            <img className="card--img" src={props.item.imageUrl} alt="sightseeing attractions"/>
            <div className="card--text_cnt">
                <div className="card--upper_text">
                    <i className="fa-solid fa-location-dot card--dot"></i>
                    <p className="card--location">{props.item.location}</p>
                    <a className="card--url" href={props.item.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1>{props.item.title}</h1>
                <p className="card--date">{props.item.startDate} - {props.item.endDate}</p>
                <p className="card--description">{props.item.description}</p>
            </div>
        </section>
    )
}