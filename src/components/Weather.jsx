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

        
        {props?.weatherData ? 
        <div className="container">
            <div className="box title">
                <p>{props?.weatherData?.name}</p> 
            </div>
            <div className="box description">
                {props?.weatherData.cod &&
                <div className="descripion-box">
                    <p className="description-text">{props?.weatherDescription?.description}</p>
                </div>}
            </div>
            
            <div className="box degrees">
                <p>{props?.weatherData?.cod&& <p>{props?.weatherData?.main?.feels_like} <span>&#8451;</span></p>}</p>
            </div>
            <div className="box footer">
                <div className="extra-info">
                    {props?.weatherData.cod && <p>Humidity: {props?.weatherData?.main?.humidity}</p>}
                    {props?.weatherData.cod && <p>Speed: {props?.weatherData?.wind?.speed} m/s</p>}
                </div>
            </div>
        </div> : <div className="container3">
            <div className="not-found-box">
                <p>Not Found!</p></div>
            </div>
            }
            
        
    </div>
    )
}