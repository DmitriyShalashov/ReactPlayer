import React, { useState, useRef, useEffect } from 'react';
import classes from './Player.module.css'



function Player({track,changeTrackNext,changeTrackPrev}) {
    const playerBtn=[classes.myPlayerBtn,classes.play];
    let playerIcon='';
    const [play, setPlay] = useState(false)
    const [duration, setDuration]=useState([0,0])
    const [currentTime, setCurrentTime]=useState(0)
    const [volume, setVolume]=useState(0.2)

    const audioPlayRef=useRef()
    if(play)
    {
        playerBtn.pop(classes.play)
        playerBtn.push(classes.stop)
    }
    else{

        playerBtn.pop(classes.stop)
        playerBtn.push(classes.play)
        
    }
   const animationRef=useRef()

    useEffect(()=>{
        setPlay(true) 
        audioPlayRef.current.play()
        animationRef.current=requestAnimationFrame(whilePlaying)
        
    },[track])

    const togglePlayPause=()=>{
        if(!play)
        {
            audioPlayRef.current.play()
            animationRef.current=requestAnimationFrame(whilePlaying)
        }
        else{
            audioPlayRef.current.pause()
            cancelAnimationFrame(animationRef.current)
        }
        setPlay(!play)
    }
    const whilePlaying=()=>{
        progressBar.current.value=audioPlayRef.current.currentTime
        changeRangeCurrentTime()
        animationRef.current=requestAnimationFrame(whilePlaying)
    }
    const progressBar=useRef()
    const changeRangeSong=()=>{
        audioPlayRef.current.currentTime=progressBar.current.value
        changeRangeCurrentTime()
    }


    const changeRangeCurrentTime=()=>{
        progressBar.current.style.setProperty('--seek-before-width',`${progressBar.current.value/duration*100}%`)
        setCurrentTime(progressBar.current.value)
    }


    const volumeBar=useRef()
    const changeVolumeSong=()=>{
        audioPlayRef.current.volume=volumeBar.current.value/100
        volumeBar.current.style.setProperty('--seek-before-width',`${volumeBar.current.value}`)
        console.log(volume)
        setVolume(volumeBar.current.value)
    }
    useEffect(()=>{
        const time=Math.floor(audioPlayRef.current.duration)
        setDuration(getSecondsMinutes(time))
        progressBar.current.max=time
        
    },[audioPlayRef?.current?.loadedmetadata, audioPlayRef?.current?.readyState])

    const getSecondsMinutes =(time)=>{
        const seconds=[0,0]
        seconds[0]=Math.floor(time/60)
        seconds[1]=time-seconds[0]*60
        seconds[1]=seconds[1]>=10 ? seconds[1] : `0${seconds[1]}`
        return seconds;
    }
    
    


    return ( 
        <div className={classes.myPlayer}>
            <audio ref={audioPlayRef} src={track.song} onEnded={changeTrackNext}/>
            <div className={classes.myPlayerNav}>
                <span className={classes.myPlayerBtnPrev} onClick={changeTrackPrev}></span>
                <div className={playerBtn.join(' ')} onClick={togglePlayPause}>{playerIcon}</div>
                <span className={classes.myPlayerBtnNext} onClick={changeTrackNext}></span>
               
            </div>
            <div className={classes.myVolume}>
                    <img src='https://sun9-87.userapi.com/impg/YvXbbLVj9vxpzypqtBgtkabF-S6WBoeD4Z0mkA/Kd8_3MoeCpk.jpg?size=58x62&quality=95&sign=aa4d9cbb2a2eea571b97d65df310ce50&type=album'/>
                    <input type = 'range' ref={volumeBar} onChange={changeVolumeSong}/>
                    
                </div>

            <div className={classes.myPlayerLine}>
            <strong>{getSecondsMinutes(currentTime)[0]+':'+getSecondsMinutes(currentTime)[1]}</strong>
            
            <input type='range' ref={progressBar} defaultValue='0' className={classes.myLine} onChange={changeRangeSong}/>

            <strong>{isNaN(duration[0]) ? '' :duration[0]+':'+duration[1]}</strong>
            </div>
        </div>
     );
}

export default Player;