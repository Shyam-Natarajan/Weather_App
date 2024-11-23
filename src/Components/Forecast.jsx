import React from "react";

const Forecast = ({ forecastWeather, location }) => {
    return (
        <>
            <div className="container mt-5">
                <h3 className='text-white text-center mb-4'>Forecast weather of {location.name},{location.region},{location.country}</h3>
            </div>
            {forecastWeather.forecastday.map((data, index) => {
                return (
                    <div className="accordion accordion-flush mt-3" id="accordionFlushExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button key={index} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${index}`} aria-expanded="false" aria-controls="flush-collapseOne">
                                    <div className="d-flex flex-row w-100 align-items-center justify-content-around mb-3">
                                        <div className="p-2 fw-bold">Date : {data.date}</div>
                                        <div className="p-2"><img src={data.day.condition.icon} /></div>
                                        <div className="p-2  fw-bold" >{data.day.condition.text}</div>
                                        <div className="p-2 fw-bold">Max.Temp : {data.day.maxtemp_c}°c</div>
                                    </div>
                                </button>
                            </h2>
                            <div id={`${index}`} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    {data.hour.map((data, index) => {
                                        return (
                                            <>
                                                <div key={index}>
                                                    <h6 className="text-center">Date & Time : {data.time} / Temp : {data.temp_c}°c / <img src={data.condition.icon} /></h6>
                                                    <div className="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                                        <div className="progress-bar" style={{ width: `${data.temp_c}%` }}>{data.temp_c}%</div>
                                                    </div>
                                                </div>

                                            </>
                                        )
                                    })}

                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}


export default Forecast;