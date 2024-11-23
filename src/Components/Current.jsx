import React from 'react'

const Current = ({ currentWeather, location }) => {
    return (
        <div className='container mt-5'>
            <h3 className='text-white text-center mb-4'>Current weather of {location.name},{location.region},{location.country}</h3>
            <div className="row">
                <div className="col-3 mb-3 ">
                    <div className="card bg-info bg-opacity-10 border border-info border-opacity-25">
                        <img src={currentWeather.condition.icon} className="card-img-top" alt="weather Image" />
                        <div className="card-body ">
                            <h6 className="card-title text-center text-white">{currentWeather.condition.text}</h6>
                        </div>
                    </div>
                </div>
                <div className="col-9">
                    <div className="row">
                        <div className="col-4 mb-5">
                            <div className="card bg-info bg-opacity-10 border border-info border-opacity-25">
                                <div className="card-body text-center text-white">
                                    <h6>Temp(in c) : {currentWeather.temp_c}°c</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 mb-5">
                            <div className="card bg-info bg-opacity-10 border border-info border-opacity-25">
                                <div className="card-body text-center text-white">
                                    <h6>Temp(in f) : {currentWeather.temp_f}°f</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 mb-5">
                            <div className="card bg-info bg-opacity-10 border border-info border-opacity-25">
                                <div className="card-body text-center text-white">
                                    <h6>Humidity : {currentWeather.humidity}%</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-4  mb-5">
                            <div className="card bg-info bg-opacity-10 border border-info border-opacity-25">
                                <div className="card-body text-center text-white">
                                    <h6>Wind Degree : {currentWeather.wind_degree}°</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-4  mb-5">
                            <div className="card bg-info bg-opacity-10 border border-info border-opacity-25">
                                <div className="card-body text-center text-white">
                                    <h6>Wind Direction : {currentWeather.wind_dir}</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-4  mb-5">
                            <div className="card bg-info bg-opacity-10 border border-info border-opacity-25">
                                <div className="card-body text-center text-white">
                                    <h6>Wind Speed(Kph) : {currentWeather.wind_kph}</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-4  mb-5">
                            <div className="card bg-info bg-opacity-10 border border-info border-opacity-25">
                                <div className="card-body text-center text-white">
                                    <h6>Wind Speed(Mph) : {currentWeather.wind_mph}</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-4  mb-5">
                            <div className="card bg-info bg-opacity-10 border border-info border-opacity-25">
                                <div className="card-body text-center text-white">
                                    <h6>Pressure(in Inches) : {currentWeather.pressure_in}</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-4  mb-5">
                            <div className="card bg-info bg-opacity-10 border border-info border-opacity-25">
                                <div className="card-body text-center text-white">
                                    <h6>Pressure(in millibars) : {currentWeather.pressure_mb}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )

}

export default Current;
