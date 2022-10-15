import React, { useState } from 'react'
import './Slide.scss'
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import { slides } from '../../data/Data';


const Slide = () => {

    const [slide] = useState(slides)
    const [active, setactive] = useState(0)

    const next=()=>{
        if(active ===slide.length - 1){
            setactive(0)
        }else{
            setactive(active + 1)
        }
    }

    const prev = () =>{
        if(active ===0){
            setactive(slide.length - 1)
        }else{
            setactive(active - 1)
        }
    }


    return (
        <div className='slide'>
            <div className="wrapper">
                <div className="leftArrow">
                    <ArrowLeftOutlinedIcon onClick={prev} className='l-Arro' />
                </div>
                {slide.map((allslide, index)=>{
                    if (index === active) {
                        return (
                            <div className="middle">
                                <img className='shopingPic' src={allslide.img} alt="" srcset="" />
                                <div className="content">
                                    <h1 className='title'>{allslide.title}</h1>
                                    <p className='desc'>{allslide.desc}</p>
                                </div>
                            </div>
                        )
                    }
                })}
                <div className="rightArrow">
                    <ArrowRightOutlinedIcon onClick={next} className='r-Arro' />
                </div>
            </div>

        </div>
    )
}

export default Slide
