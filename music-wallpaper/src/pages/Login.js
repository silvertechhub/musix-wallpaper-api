import { useEffect, useState } from 'react'
import React from 'react'
import { accessToken, logout, getUserProfile, getTopTracks } from '../spotify';
import { Link } from 'react-router-dom';


export default function Login() {
  const [token, setToken] = useState(null)
  const [profile, setProfile] = useState('')
  const [topTracks, setTopTracks] = useState([])
  const LOGIN_URI =
  process.env.NODE_ENV !== 'production'
    ? 'http://localhost:8888/login'
    : 'https://musix-wallpaper.onrender.com/login';

  

    useEffect(() => {
      setToken(accessToken)

      const fetchData = async () => {
        try{
          const {data} = await getUserProfile();
          setProfile(data)
          console.log(data)
        }catch (error){
          console.log(error)
        }
      }
      const fetchTopTracks = async () => {
        try{
          const {data} = await getTopTracks();
          setTopTracks(data.items)
          console.log(topTracks)
        }catch (error){
          console.log(error)
        }
      
      }
      
      fetchTopTracks();
      fetchData()
     
    }, [])
    
  return (
    <div className="bg-black px-5 pb-8">
      { !token ? 
      <div >
        <h2 className='text-4xl text-left font-extrabold font-display leading-[55px]'>Create unique Music wallpaper based on your Favorite Playlist</h2>
        <div className='my-16 text-center'>
            <a className='bg-pry  py-3 px-6 rounded-lg text-lg font-bold' href={LOGIN_URI}>Login with spotify</a>
            <section className='bg-gray-800 my-10 font-basic'>
              <h3 className='text-3xl font-extrabold py-4'>It's Easy to Create</h3>
              <h5 className='text-base'>Follow the steps below and create your music wallpaper using your own playlist</h5>
              <div className='mx-7 my-6 bg-gray-400 px-3 py-6'>
                <h4 className='text-xl text-black'>Step 1</h4>
                <p>Login to your spotify account, via e-mail, Facebook, Apple-id, Google</p>
              </div>
              <div className='mx-7 my-6 bg-gray-400 px-3 py-6'>
                <h4 className='text-xl text-black'>Step 2</h4>
                <p>Login to your spotify account, via e-mail, Facebook, Apple-id, Google</p>
              </div>
              <div className='mx-7 my-6 bg-gray-400 px-3 py-6'>
                <h4 className='text-xl text-black'>Step 3</h4>
                <p>Login to your spotify account, via e-mail, Facebook, Apple-id, Google</p>
              </div>
             <div className='text-center py-5'> <a className='text-3xl text-pry underline underline-offset-4'  href="http://localhost:8888/login">Get started </a></div>
            </section>
        </div>
      </div> :
      // -----------------profile data------------------------
      <div>
            {profile && (<div>
              <h1 className='text-center text-2xl font-display'> Welcome back <span className='text-pry'>{profile.display_name}</span>!</h1>
           {profile.images.length && profile.images[0].url && (
                  <div className='my-8 flex justify-center'>
                    <img src={profile.images[0].url} className='img_header' alt="Avatar"/>
                  </div>
                )}
                <div className='flex space-x-4'>
                 <div> Followers: {profile.followers.total && <h4>{profile.followers.total}</h4>}</div>
                <div> {profile.product && <span>{profile.product}</span>} User</div>
               </div>
            </div>)}
          
          
{/* -------------display top tracks------------- */}
          <section className='my-10 '>
            <h3 className='text-center text-3xl text-pry py-6 underline underline-offset-2'>Top Listens</h3>
            {topTracks && topTracks.length ? (
              <div className='grid grid-cols-3'>
                {topTracks && topTracks.slice(0, 6).map((track, i) => (
                <div key={i}>
                  
                  {track.album.images.length && track.album.images[2] && (
                <div className="track__item__img">
                  <img src={track.album.images[2].url} alt={track.name} />
                </div>
              )}
              <div className='font-basic'>{track.name}</div>
              <div>
              {track.artists.map((artist, i) => (
                    <span className='text-xs font-display' key={i}>
                      {artist.name}{i !== track.artists.length - 1 && ', '}
                    </span>
                  ))}
              </div>
                </div>
                  ))}
               </div>
            ):  <div>No tracks available</div>}
            </section>
            
           <div className='text-center text-2xl underline hover:text-pry my-5'> <Link to='/playlists'>View all Playlist</Link></div>
             <div className='flex justify-center'> <button className='text-white bg-pry px-4 py-2 rounded-md' onClick={logout}>Log Out</button></div>
        </div>
       }
       
    </div>
    
    
  )
} 
