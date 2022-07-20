import React, { useState } from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import AlbumGrid from './components/ux/albums/AlbumGrid';
import Main from './pages/main/Main';
import TrackList from './pages/mytracks/TrackList';
import {tracks} from './data/Tracks';
import MyTrackList from './pages/mytracks/MyTrackList';


function App() {

  const albums=[
    {name:'Jazz', img:'https://sun9-53.userapi.com/impg/tMw1Pz4-kMRW82r6NTfHdNnzqPvM5Z5Uyr42kg/G5OtXrr0igc.jpg?size=500x500&quality=95&sign=ab9534591589f0f48903ebf35ee9babb&type=album'},
    {name:'R&B', img:'https://sun9-8.userapi.com/impg/27caLMLIrKFtnSwo1xqovO2nulHnjvef0r2BEA/OX2bFXuZH2k.jpg?size=500x500&quality=95&sign=07f4a54413c50bb39b5a7fe4bdbd7252&type=album'},
    {name:'House', img:'https://sun9-64.userapi.com/impg/UcbFAmz0GjzxXJfzESP-xf6QNQ706zHAITj5eQ/YHR2lHZ3eys.jpg?size=500x500&quality=95&sign=1acb70b67d08ccff374df7225013bf83&type=album'},
    {name:'Rock', img:'https://sun9-21.userapi.com/impg/6powWJjV5S-z2k2nHHFrJgBCJJ9gChsVNS24hQ/EFNPMT-vUXs.jpg?size=1280x1280&quality=95&sign=fe02f21a9c579e94085118e70a1d3eaf&type=album'},
    {name:'Pop', img:'https://sun9-53.userapi.com/impg/etpOMWPgiRSHu6p-WctE5BFJDXQdYpJZWYLahA/i27QS3M3pCo.jpg?size=500x500&quality=95&sign=f018b0d4f855647543e1e0e6431d7e19&type=album'},
    {name:'Hip Hop', img:'https://sun9-32.userapi.com/impg/V6iKe0cG345CAzkFJBRiRiCL5QzHyrf8-pNkUw/ebBdePbmPZA.jpg?size=500x500&quality=95&sign=9a88fca9983f31eda2bee76754b1e11c&type=album'},
    {name:'Classical', img:'https://sun9-17.userapi.com/impg/Rjxw7Hl9IXA3txWgrvgOSKY8yKyurnb6D_nD6Q/cvcyHSShW1k.jpg?size=500x500&quality=95&sign=ac083a5bbff7f8bf86b88fdeeec95c2d&type=album'},
    {name:'Rap', img:'https://sun7-8.userapi.com/impg/n7LCwXcNDcNAokn4Znn5zy0Oqc_bImXT0PmV2g/SDFVC0Fy6rc.jpg?size=360x360&quality=95&sign=ad715299299386d695d7923b912f41da&type=album'},
    {name:'Indian', img:'https://sun9-75.userapi.com/impg/yptPPfw5u3FZVJyxZZhTukwAI962a9yu5z9bFw/zbCJ8z6_yWc.jpg?size=500x500&quality=95&sign=6c3fee097450c332f0789b021b9e61e8&type=album'},
    {name:'Games', img:'https://sun9-83.userapi.com/impg/-WdRPG1liAfKoZwr-T4FGjMNicl83ckoroUzYQ/HDazd3u2mUA.jpg?size=500x500&quality=95&sign=50816abfb2abcea0e07c7063f4700e6e&type=album'},

]

const [myTracks, setMyTracks]=useState([])
const [trackNow, setTrackNow]=useState( {})
const [queue,setQueue]=useState([])

const createMyTrack=(newTrack)=>{
  setMyTracks([...myTracks,newTrack])
  setQueue([...queue,newTrack])
}
const deleteMyTrack=(newTrack)=>{
  setMyTracks(myTracks.filter(t=>t.name!==newTrack.name))
  setQueue(myTracks.filter(t=>t.name!==newTrack.name))
}
const changeTrack=(newTrack, usingTracks)=>{
  setTrackNow(newTrack)
  changeQueue(usingTracks)
}
const changeQueue=(tracks)=>{
  setQueue(tracks)
}
const getPrevNext=()=>{
  const indexNow=queue.indexOf(trackNow)

  const arrTracks=[
    indexNow===0 ?queue[queue.length-1]: queue[indexNow-1],
    indexNow===queue.length-1 ?queue[0]: queue[indexNow+1],
   ]
   console.log(arrTracks)
   return arrTracks
}
const changeTrackNext=()=>{
  setTrackNow(getPrevNext()[1])
  console.log(trackNow)
}
const changeTrackPrev=()=>{
  setTrackNow(getPrevNext()[0])
  console.log(trackNow)
}
  return (
    <div className="App">
      <Router>
      <Main trackNow={trackNow} changeTrackNext={changeTrackNext} changeTrackPrev={changeTrackPrev}>
      
        <Routes>
          <Route exact path='/' element={<AlbumGrid albums={albums}/>}></Route>
          <Route exact path='mytracks' element={<MyTrackList myTracks={myTracks}  remove={deleteMyTrack} change={changeTrack} changeQueue={changeQueue}/>}></Route>
          <Route exact path='album/:name' element={<TrackList myTracks={myTracks} tracks={tracks} remove={deleteMyTrack} create={createMyTrack} change={changeTrack} changeQueue={changeQueue}/>}></Route>
        </Routes>
     
      </Main>
      </Router>
    </div>
  );
}

export default App;
