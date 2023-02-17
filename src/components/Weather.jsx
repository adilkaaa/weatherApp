export const Weather =(props)=>{
    return (

    <div className="section">
        <div className="container2">
            <div className="title">
                <p>Weather App</p>
            </div>
            <div className="">
                <input className='input-city' placeholder="Type city" onKeyDown={props?.handleSubmit}/>
            </div>
        </div>

        {/* <div className="container"> */}
        {props?.weatherData ? 
        <div className="container">
            <div className="box title">
                <p>{props?.weatherData?.name}</p> 
            </div>
            <div className="box description">
                <div className="descripion-box">
                    <p className="description-text">{props?.weatherDescription?.description}</p>
                </div>
            </div>
            {/* <div className="box image"><img src="images/clouds.png" alt="photo"/></div> */}
            <div className="box degrees">
                <p>{props?.weatherData && <p>{props?.weatherData?.main?.feels_like} <span>&#8451;</span></p>}</p>
            </div>
            <div className="box footer">
                <div className="extra-info">
                    <p>Humidity: {props?.weatherData?.main?.humidity}</p>
                    <p>Speed: {props?.weatherData?.wind?.speed} m/s</p>
                </div>
            </div>
        </div> : <div className="container3">
            <div className="not-found-box">
                <p>Not Found!</p></div>
            </div>
            }
            
        {/* </div> */}
    </div>
    )
}