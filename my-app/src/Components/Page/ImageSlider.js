import React, { useState } from 'react';

const ImageSlider = ({ arr, img=null }) => {
    const [current, setCurrent] = useState(0);
    // const arr =  cpu.cpuPriceList?.map(e => {return (e)})

    const length = arr?.length;
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

     console.log(arr?.length);

    if (!Array.isArray(arr) || arr.length <= 0) {
        return (
            <div class="block img">
                <img className="detail-img" src={img} alt="img-demo"/>
            </div>
        )
    }

    else if (arr?.length <= 1) {
        
        arr.map(element => {
            return (
                <div class="block img">
                    <img className="detail-img" src={element.img} alt={element.name}/>
                </div>
            )
        })
    }

    return (
        <div class="slider">
            <i class="fas fa-arrow-left left-arrow" onClick={prevSlide}></i>
            <i class="fas fa-arrow-right right-arrow" onClick={nextSlide}></i>
            {arr.map((element, index) => {
                return (
                    <div className={`block img slide ${index === current ? "active" : ""}`} key={index}>
                        {index === current && (
                            <img className="detail-img" src={element.img} alt={element.name}/>
                        )}
                    </div>
                )})}
        </div>
    )
}

export default ImageSlider;