import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { accessToken, logout, getAllPlaylist } from '../spotify';

export default function Playlists() {
  const [token, setToken] = useState(null)
  const [playlists, setPlaylists] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    setToken(accessToken); 
      const fetchPlaylist = async () => {
        try{
          const {data} = await getAllPlaylist();
          setPlaylists(data.items)
          console.log(playlists)
        }catch (error){
          console.log(error)
        }
      
      }
    
    fetchPlaylist()
  }, [])
  return (
    <div className='mx-4 px-2'>
      <h2 className='text-center text-2xl underline'>Choose a Playlist</h2>
      <p className='font-display'>Click on a playlist and we would select random songs from that playlist to create your wallpaper</p>
       {!token ? <Link to='/login' >login here</Link>: <div  className='grid grid-cols-3 gap-3 my-5 '>
    {playlists && playlists.map(playlist => (
      <div className='bg-gray-700' key={playlist.id}>
        <div onClick={() => navigate(`/playlists/${playlist.id}`)}>
          <h2  className='text-center truncate '>{playlist.name}</h2>
          {playlist.images.length && playlist.images[0] && (
                <div className="grid__item__img">
                  <img src={playlist.images[0].url} alt={playlist.name} />
                </div>
              )}
          <h6 className='text-center text-xs'>Tracks:{playlist.tracks.total}</h6>
        </div>
       
      </div>
    )
    
    )}
   
    </div> }
    </div>
   
    
  )
}
