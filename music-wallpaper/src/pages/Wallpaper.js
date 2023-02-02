// import React from 'react'
// import playback from '../assets/playback.svg'

// export default function Wallpaper() {
//   return (
//     <div className='bg-gray-300 grid grid-cols-3 gap-6'>
    //     {/* ---------1------ */}
    //     <div  className='bg-black relative top-4 left-1 rounded-lg w-28 h-24 origin-center rotate-12'>
    //             {mixTracks[0].track.name &&  <h2 className='text-center truncate px-3 pt-3 text-sm'>{mixTracks[0].track.name}</h2>}
    //             {mixTracks[0].track.artists && <h2 className='text-sm font-display text-gray-500 text-center'>{mixTracks[0].track.artists[0].name}</h2>}
    //           <img src={playback} className='px-3 pt-4' />
    //     </div>
    //    {/* ---------2------ */}
    //     <div  className='bg-black relative rounded-lg w-28 h-24 top-3 '>
    //             {mixTracks[1].track.name &&  <h2 className='text-center truncate px-3 pt-3 text-sm'>{mixTracks[1].track.name}</h2>}
    //             {mixTracks[1].track.artists && <h2 className='text-sm font-display text-gray-500 text-center'>{mixTracks[1].track.artists[1].name}</h2>}
    //           <img src={playback} className='px-6 pt-4' />
    //     </div>
    //    {/* ---------3------ */}
    //     <div  className='bg-black rounded-lg w-28 h-24 relative left-4 bottom-2 origin-top rotate-12'>
    //             {mixTracks[2].track.name &&  <h2 className='text-center truncate px-3 pt-3 text-sm'>{mixTracks[2].track.name}</h2>}
    //             {mixTracks[2].track.artists && <h2 className='text-sm font-display text-gray-500 text-center'>{mixTracks[2].track.artists[2].name}</h2>}
    //           <img src={playback} className='px-3 pt-4' />
    //     </div>
    //    {/* ---------4------ */}
    //     <div  className='bg-black rounded-lg w-32 h-28 origin-right -rotate-12'>
    //             {mixTracks[3].track.name &&  <h2 className='text-center truncate px-3 pt-3 text-sm'>{mixTracks[3].track.name}</h2>}
    //             {mixTracks[3].track.artists && <h2 className='text-sm font-display text-gray-500 text-center'>{mixTracks[3].track.artists[3].name}</h2>}
    //           <img src={playback} className='px-3 pt-4' />
    //     </div>
    //    {/* ---------5------ */}
    //     <div  className='bg-black rounded-lg w-24 h-24 origin-bottom rotate-6'>
    //             {mixTracks[4].track.name &&  <h2 className='text-center truncate px-3 pt-3 text-sm'>{mixTracks[4].track.name}</h2>}
    //             {mixTracks[4].track.artists && <h2 className='text-sm font-display text-gray-500 text-center'>{mixTracks[4].track.artists[4].name}</h2>}
    //           <img src={playback} className='px-3 pt-4' />
    //     </div>
    //    {/* ---------6------ */}
    //     <div  className='bg-black rounded-lg w-32 h-28 origin-bottom-right -rotate-6'>
    //             {mixTracks[5].track.name &&  <h2 className='text-center truncate px-3 pt-3 text-sm'>{mixTracks[5].track.name}</h2>}
    //             {mixTracks[5].track.artists && <h2 className='text-sm font-display text-gray-500 text-center'>{mixTracks[5].track.artists[5].name}</h2>}
    //           <img src={playback} className='px-3 pt-4' />
    //     </div>
    //    {/* ---------7------ */}
    //     <div  className='bg-black rounded-lg w-24 h-24 mt-10 origin-top-right rotate-12'>
    //             {mixTracks[6].track.name &&  <h2 className='text-center truncate px-3 pt-3 text-sm'>{mixTracks[6].track.name}</h2>}
    //             {mixTracks[6].track.artists && <h2 className='text-sm font-display text-gray-500 text-center'>{mixTracks[6].track.artists[6].name}</h2>}
    //           <img src={playback} className='px-3 pt-4' />
    //     </div>
    //    {/* ---------8------ */}
    //     <div  className='bg-black rounded-lg w-24 h-24 relative bottom-8 right-14 origin-top-right -rotate-45'>
    //             {mixTracks[7].track.name &&  <h2 className='text-center truncate px-3 pt-3 text-sm'>{mixTracks[7].track.name}</h2>}
    //             {mixTracks[7].track.artists && <h2 className='text-sm font-display text-gray-500 text-center'>{mixTracks[7].track.artists[7].name}</h2>}
    //           <img src={playback} className='px-3 pt-4' />
    //     </div>
    //    {/* ---------9------ */}
    //     <div  className='bg-black rounded-lg w-24 h-24 '>
    //             {mixTracks[8].track.name &&  <h2 className='text-center truncate px-3 pt-3 text-sm'>{mixTracks[8].track.name}</h2>}
    //             {mixTracks[8].track.artists && <h2 className='text-sm font-display text-gray-500 text-center'>{mixTracks[8].track.artists[8].name}</h2>}
    //           <img src={playback} className='px-3 pt-4' />
    //     </div>
    //    {/* ---------10------ */}
    //     <div  className='bg-black rounded-lg w-32 h-28 relative right-5 bottom-6 origin-center -rotate-12'>
    //             {mixTracks[9].track.name &&  <h2 className='text-center truncate px-3 pt-3 text-sm'>{mixTracks[9].track.name}</h2>}
    //             {mixTracks[9].track.artists && <h2 className='text-sm font-display text-gray-500 text-center'>{mixTracks[9].track.artists[9].name}</h2>}
    //           <img src={playback} className='px-3 pt-4' />
    //     </div>
    //    {/* ---------11------ */}
    //     <div  className='bg-black rounded-lg w-40 h-36 relative  '>
    //             {mixTracks[10].track.name &&  <h2 className='text-center truncate px-3 pt-3 text-sm'>{mixTracks[10].track.name}</h2>}
    //             {mixTracks[10].track.artists && <h2 className='text-sm font-display text-gray-500 text-center'>{mixTracks[10].track.artists[10].name}</h2>}
    //           <img src={playback} className='px-3 pt-4' />
    //     </div>
    //    {/* ---------12------ */}
    //     <div  className='bg-black rounded-lg w-32 h-28 origin-top-right  rotate-12'>
    //     <h2 className='text-center truncate px-3 pt-3 text-sm'> hidden</h2> 
    //             {mixTracks[11].track.artists && <h2 className='text-sm font-display text-gray-500 text-center'>{mixTracks[11].track.artists[11].name}</h2>}
    //           <img src={playback} className='px-3 pt-4' />
    //     </div>
    //    {/* ---------13------ */}
    //     <div  className='bg-black rounded-lg w-24 h-24 origin-top-right rotate-12'>
    //             {mixTracks[12].track.name &&  <h2 className='text-center truncate px-3 pt-3 text-sm'>{mixTracks[12].track.name}</h2>}
    //             {mixTracks[12].track.artists && <h2 className='text-sm font-display text-gray-500 text-center'>{mixTracks[12].track.artists[12].name}</h2>}
    //           <img src={playback} className='px-3 pt-4' />
    //     </div>
    //    {/* ---------14------ */}
    //     <div  className='bg-black rounded-lg w-32 h-28 origin-top-right rotate-12'>
    //     <h2 className='text-center truncate px-3 pt-3 text-sm'>hidden</h2> 
    //             {mixTracks[13].track.artists && <h2 className='text-sm font-display text-gray-500 text-center'>{mixTracks[13].track.artists[13].name}</h2>}
    //           <img src={playback} className='px-3 pt-4' />
    //     </div>
    //     {/* ---------15------- */}
    //     <div  className='bg-black rounded-lg w-28 h-24 origin-center rotate-90'>
    //             {mixTracks[14].track.name &&  <h2 className='text-center truncate px-3 pt-3 text-sm'>{mixTracks[14].track.name}</h2>}
    //             {mixTracks[14].track.artists && <h2 className='text-sm font-display text-gray-500 text-center'>{mixTracks[14].track.artists[14].name}</h2>}
    //           <img src={playback} className='px-3 pt-4' />
    //     </div>
    //     {/* ---------16------- */}
    //     <div  className='bg-black rounded-lg w-28 h-24 origin-center rotate-90'>
    //     <h2 className='text-center truncate px-3 pt-3 text-sm'>hidden</h2> 
    //             {mixTracks[15].track.artists && <h2 className='text-sm font-display text-gray-500 text-center'>{mixTracks[15].track.artists[15].name}</h2>}
    //           <img src={playback} className='px-3 pt-4' />
    //     </div>
    //     {/* ---------17------- */}
    //     <div  className='bg-black rounded-lg w-28 h-24 origin-center rotate-12'>
    //             {mixTracks[16].track.name &&  <h2 className='text-center truncate px-3 pt-3 text-sm'>{mixTracks[16].track.name}</h2>}
    //             {mixTracks[16].track.artists && <h2 className='text-sm font-display text-gray-500 text-center'>{mixTracks[16].track.artists[16].name}</h2>}
    //           <img src={playback} className='px-3 pt-4' />
    //     </div>
    //     {/* ---------18------- */}
    //     <div  className='bg-black rounded-lg w-28 h-24 origin-center '>
    //             {mixTracks[17].track.name &&  <h2 className='text-center truncate px-3 pt-3 text-sm'>{mixTracks[17].track.name}</h2>}
    //             {mixTracks[17].track.artists && <h2 className='text-sm font-display text-gray-500 text-center'>{mixTracks[17].track.artists[17].name}</h2>}
    //           <img src={playback} className='px-3 pt-4' />
    //     </div>
       
//     </div>
//   )
// }
