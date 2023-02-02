import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getPlaylistById } from '../spotify';
import playback from '../assets/playback.svg'

export default function SinglePlaylist() {
    const {id} = useParams();
    const [mixTracks, setMixtracks] = useState([])
    const [mixTrack1, setMixtrack1] = useState([])
    const [mixTrack2, setMixtrack2] = useState([])
    const [mixTrack3, setMixtrack3] = useState([])
    const [mixTrack4, setMixtrack4] = useState([])
    const [mixTrack5, setMixtrack5] = useState([])
    const [mixTrack6, setMixtrack6] = useState([])
    const [mixTrack7, setMixtrack7] = useState([])
    const [mixTrack8, setMixtrack8] = useState([])
    const [mixTrack9, setMixtrack9] = useState([])
    const [mixTrack10, setMixtrack10] = useState([])
    const [mixTrack11, setMixtrack11] = useState([])
    const [mixTrack12, setMixtrack12] = useState([])
    const [mixTrack13, setMixtrack13] = useState([])
    const [mixTrack14, setMixtrack14] = useState([])
    const [mixTrack15, setMixtrack15] = useState([])
    const [mixTrack16, setMixtrack16] = useState([])
    const [mixTrack17, setMixtrack17] = useState([])

    useEffect(() => {
        const fetchData =  async () => {
            const {data} = await getPlaylistById(id); 
            // console.log(data)
            const song = data.tracks.items
            const shuffled =  song.sort(() => 0.5 - Math.random());
            const mixTape =  shuffled.slice(0, 18); 
           setMixtracks([mixTape[0].track.name, mixTape[0].track.artists[0].name]); 
           setMixtrack1([mixTape[1].track.name, mixTape[1].track.artists[0].name]);
           setMixtrack2([mixTape[2].track.name, mixTape[2].track.artists[0].name])
           setMixtrack3([mixTape[3].track.name, mixTape[3].track.artists[0].name])  
           setMixtrack4([mixTape[4].track.name, mixTape[4].track.artists[0].name])  
           setMixtrack5([mixTape[5].track.name, mixTape[5].track.artists[0].name])  
           setMixtrack6([mixTape[6].track.name, mixTape[6].track.artists[0].name])  
           setMixtrack7([mixTape[7].track.name, mixTape[7].track.artists[0].name])  
           setMixtrack8([mixTape[8].track.name, mixTape[8].track.artists[0].name])  
           setMixtrack9([mixTape[9].track.name, mixTape[9].track.artists[0].name])  
           setMixtrack10([mixTape[10].track.name, mixTape[10].track.artists[0].name])  
           setMixtrack11([mixTape[11].track.name, mixTape[11].track.artists[0].name])  
           setMixtrack12([mixTape[12].track.name, mixTape[12].track.artists[0].name])  
           setMixtrack13([mixTape[13].track.name, mixTape[13].track.artists[0].name])  
           setMixtrack14([mixTape[14].track.name, mixTape[14].track.artists[0].name])  
           setMixtrack15([mixTape[15].track.name, mixTape[15].track.artists[0].name])  
           setMixtrack16([mixTape[16].track.name, mixTape[16].track.artists[0].name])  
           setMixtrack17([mixTape[17].track.name, mixTape[17].track.artists[0].name])  
         console.log(mixTrack1)
        }
            
        fetchData();
    }, []) 
   
    
  return (  
     
   <div className='bg-hero bg-cover py-10 grid grid-cols-3 gap-6'> 
  
     {/* ---------1------ */}
     <div  className='bg-black relative top-4 left-1 rounded-lg w-28 h-24 origin-center rotate-12'>
                {mixTracks && <h2 className='text-center truncate px-3 pt-3 text-sm'>{mixTracks[0]}</h2>}
                 {mixTracks && <h2 className='text-sm font-display text-gray-500 text-center'>{mixTracks[1]}</h2>}
              <img src={playback} className='px-3 pt-4' />
        </div>
       {/* ---------2------ */}
        <div  className='bg-black relative rounded-lg w-28 h-24 top-3 '>
                {mixTrack1 &&  <h2 className='text-center truncate px-3 pt-3 text-sm'>{mixTrack1[0]}</h2>}
                 {mixTrack1 && <h2 className='text-sm font-display text-gray-500 text-center'>{mixTrack1[1]}</h2>}
               <img src={playback} className='px-6 pt-4' />
         </div>
        {/* ---------3------ */}
         <div  className='bg-black rounded-lg w-28 h-24 relative left-4 bottom-2 origin-top rotate-12'>
                 {mixTrack2 &&  <h2 className='text-center truncate px-3 pt-3 text-sm'>{mixTrack2[0]}</h2>}
                 {mixTrack2 && <h2 className='text-sm font-display text-gray-500 text-center'>{mixTrack2[1]}</h2>}
               <img src={playback} className='px-3 pt-4' />
         </div>
        {/* ---------4------ */}
         <div  className='bg-black rounded-lg w-32 h-28 origin-right -rotate-12'>
                 {mixTrack3 &&  <h2 className='text-center truncate px-3 pt-3 text-sm'>{mixTrack3[0]}</h2>}
                 {mixTrack3 && <h2 className='text-sm font-display text-gray-500 text-center'>{mixTrack3[1]}</h2>}
               <img src={playback} className='px-3 pt-4' />
         </div>
        {/* ---------5------ */}
         <div  className='bg-black rounded-lg w-24 h-24 origin-bottom rotate-6'>
                 {mixTrack4 &&  <h2 className='text-center truncate px-3 pt-3 text-sm'>{mixTrack4[0]}</h2>}
                 {mixTrack4 && <h2 className='text-sm font-display text-gray-500 text-center'>{mixTrack4[1]}</h2>}
               <img src={playback} className='px-3 pt-4' />
         </div>
        {/* ---------6------ */}
         <div  className='bg-black rounded-lg w-32 h-28 origin-bottom-right -rotate-6'>
                 {mixTrack5 &&  <h2 className='text-center truncate px-3 pt-3 text-sm'>{mixTrack5[0]}</h2>}
                 {mixTrack5 && <h2 className='text-sm font-display text-gray-500 text-center'>{mixTrack5[1]}</h2>}
               <img src={playback} className='px-3 pt-4' />
         </div>
        {/* ---------7------ */}
         <div  className='bg-black rounded-lg w-24 h-24 mt-10 origin-top-right rotate-12'>
                 {mixTrack6 &&  <h2 className='text-center truncate px-3 pt-3 text-sm'>{mixTrack6[0]}</h2>}
                 {mixTrack6 && <h2 className='text-sm font-display text-gray-500 text-center'>{mixTrack6[1]}</h2>}
               <img src={playback} className='px-3 pt-4' />
         </div>
        {/* ---------8------ */}
         <div  className='bg-black rounded-lg w-24 h-24 relative bottom-8 right-14 origin-top-right -rotate-45'>
                 {mixTrack7 &&  <h2 className='text-center truncate px-3 pt-3 text-sm'>{mixTrack7[0]}</h2>}
                 {mixTrack7 && <h2 className='text-sm font-display text-gray-500 text-center'>{mixTrack7[1]}</h2>}
               <img src={playback} className='px-3 pt-4' />
         </div>
        {/* ---------9------ */}
         <div  className='bg-black rounded-lg w-24 h-24 '>
                 {mixTrack8 &&  <h2 className='text-center truncate px-3 pt-3 text-sm'>{mixTrack8[0]}</h2>}
                 {mixTrack8 && <h2 className='text-sm font-display text-gray-500 text-center'>{mixTrack8[1]}</h2>}
               <img src={playback} className='px-3 pt-4' />
         </div>
        {/* ---------10------ */}
         <div  className='bg-black rounded-lg w-32 h-28 relative right-5 bottom-6 origin-center -rotate-12'>
                 {mixTrack9 &&  <h2 className='text-center truncate px-3 pt-3 text-sm'>{mixTrack9[0]}</h2>}
                 {mixTrack9 && <h2 className='text-sm font-display text-gray-500 text-center'>{mixTrack9[1]}</h2>}
               <img src={playback} className='px-3 pt-4' />
         </div>
        {/* ---------11------ */}
         <div  className='bg-black rounded-lg w-40 h-36 relative  '>
                 {mixTrack10 &&  <h2 className='text-center truncate px-3 pt-3 text-sm'>{mixTrack10[0]}</h2>}
                 {mixTrack10 && <h2 className='text-sm font-display text-gray-500 text-center'>{mixTrack10[1]}</h2>}
               <img src={playback} className='px-3 pt-4' />
         </div>
        {/* ---------12------hidden */}
         <div  className='bg-black rounded-lg w-32 h-28 origin-top-right  rotate-12'>
                {mixTrack11 &&  <h2 className='text-center truncate px-3 pt-3 text-sm'>{mixTrack11[0]}</h2>}
                 {mixTrack11 && <h2 className='text-sm font-display text-gray-500 text-center'>{mixTrack11[1]}</h2>}
                 
               <img src={playback} className='px-3 pt-4' />
         </div>
        {/* ---------13------ */}
         <div  className='bg-black rounded-lg w-24 h-24 origin-top-right rotate-12'>
                 {mixTrack12 &&  <h2 className='text-center truncate px-3 pt-3 text-sm'>{mixTrack12[0]}</h2>}
                 {mixTrack12 && <h2 className='text-sm font-display text-gray-500 text-center'>{mixTrack12[1]}</h2>}
               <img src={playback} className='px-3 pt-4' />
         </div>
        {/* ---------14------ */}
         {/* <div  className='bg-black rounded-lg w-32 h-28 origin-top-right rotate-12'>
         <h2 className='text-center truncate px-3 pt-3 text-sm'>hidden</h2> 
                 {mixTracks[13].track.artists && <h2 className='text-sm font-display text-gray-500 text-center'>{mixTracks[13].track.artists[13].name}</h2>}
               <img src={playback} className='px-3 pt-4' />
         </div> */}
         {/* ---------15------- */}
         <div  className='bg-black rounded-lg w-28 h-24 origin-center rotate-90'>
                 {mixTrack14 &&  <h2 className='text-center truncate px-3 pt-3 text-sm'>{mixTrack14[0]}</h2>}
                 {mixTrack14 && <h2 className='text-sm font-display text-gray-500 text-center'>{mixTrack14[1]}</h2>}
               <img src={playback} className='px-3 pt-4' />
         </div>
         {/* ---------16------- hidden */}
         {/* <div  className='bg-black rounded-lg w-28 h-24 origin-center rotate-90'>
         <h2 className='text-center truncate px-3 pt-3 text-sm'>hidden</h2> 
                 {mixTracks[15].track.artists && <h2 className='text-sm font-display text-gray-500 text-center'>{mixTracks[15].track.artists[15].name}</h2>}
               <img src={playback} className='px-3 pt-4' />
         </div> */}
         {/* ---------17------- */}
         <div  className='bg-black rounded-lg w-28 h-24 origin-center rotate-12'>
                 {mixTrack16 &&  <h2 className='text-center truncate px-3 pt-3 text-sm'>{mixTrack16[0]}</h2>}
                 {mixTrack16 && <h2 className='text-sm font-display text-gray-500 text-center'>{mixTrack16[1]}</h2>}
               <img src={playback} className='px-3 pt-4' />
         </div>
         {/* ---------18------- */}
         <div  className='bg-black rounded-lg w-28 h-24 origin-center '>
                 {mixTrack17 &&  <h2 className='text-center truncate px-3 pt-3 text-sm'>{mixTrack17[0]}</h2>}
                 {mixTrack17 && <h2 className='text-sm font-display text-gray-500 text-center'>{mixTrack17[1]}</h2>}
               <img src={playback} className='px-3 pt-4' />
         </div>

    
    </div>
  )
}



// {mixTracks && mixTracks.map(tape => (
//   <div> 
//     <div key={tape.track.id} className='bg-black rounded-lg w-36 h-32'>
//         <h2 className='text-center truncate px-3 pt-3'>{tape.track.name}</h2>  
//         {tape.track.artists && <h2 className='text-sm font-display text-gray-500 text-center'>{tape.track.artists[0].name}</h2>}
//         <img src={playback} className='px-3 pt-4' />
//     </div>
//   </div> 
//  ))}  