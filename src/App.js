import { useEffect, useState } from 'react';
import ImageGallery from 'react-image-gallery';
import './App.css';
import axios from 'axios';


function App() {

  const [images, Setimages] = useState([]);

  useEffect(() => {
    async function getUser() {
      try {
        const response = await axios.get('https://api.npoint.io/3e81088a6a43d09c3744');
        console.log(response.data.data);
        Setimages(response.data.data)
      } catch (error) {
        console.error(error);
      }
    }

    getUser();
  },[]);
  
  return (
<>
<ImageGallery items={images} />
</>
  );
}

export default App;
