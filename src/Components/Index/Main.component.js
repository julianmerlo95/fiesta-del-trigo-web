import React from 'react';

function Main(){
  return(
    <div className="container-main">
        <div className="container-video"
             data-aos="fade-right"
             data-aos-offset="100"
             data-aos-easing="ease-in-sine"
             data-aos-delay="250"
            >
        <iframe width="560" height="315" src="https://www.youtube.com/embed/W1w0EMo71NI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </div>
  )
}

export default Main;