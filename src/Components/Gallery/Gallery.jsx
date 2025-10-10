import React, { useEffect, useState } from 'react'
import './Gallery.css'
import axios from 'axios'
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useMediaQuery, useTheme } from '@mui/material';


const Gallery = () => {
  const [img, setImg] = useState([])
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm")); // mobile
  const isSm = useMediaQuery(theme.breakpoints.between("sm", "md")); // tablet


  const fetchImage = async () => {
    try {
      const response = await axios.get('./Gallery.json')
      setImg(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchImage()
  }, [])

  return (
    <div className='gallery'>
    <Box sx={{
        width: {
          xs: "100vw",
          sm: "90vw",  
          md: "80vw",  
          lg: "96vw",  
        },
        maxWidth: 1516, 
        height: {
          xs: "auto", 
          sm: 500,    
          md: 650,
        },
        overflowY: "auto",
        mx: "auto", 
        px: { xs: 1, sm: 2, md: 3 },
      }}
    >
      <ImageList variant="masonry" cols={isXs ? 1 : isSm ? 2 : 3} gap={8}>
        {img.map((item) => (
          <ImageListItem key={item.image}>
            <img
              srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.image}?w=248&fit=crop&auto=format`}
              alt={item.id}
              loading="lazy"
                style={{
                width: "100%",
                borderRadius: "2px",
                display: "block",
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
    </div>
  )
}

export default Gallery
