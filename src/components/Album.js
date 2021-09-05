import axios from 'axios'
import {useState, useEffect} from 'react'

function Album() {

  const [albums, setAlbums] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/albums')
      .then((res) => setAlbums(res.data))
      .catch((e) => console.log(e))
      .finally(() => setIsLoading(false))
    
  }, [])

  return (
    <div>
      <h1>Albums</h1>
      {isLoading && <div>Loading..</div>}
      {albums.map((album) => <div key={album.id}>{album.title}</div> )}
    </div>
  )
}

export default Album
