import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';

function srcset(image, width, height, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function CustomImageList() {
  return (
    <ImageList
      sx={{
        width: 700,
        height: 500,
        // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
        transform: 'translateZ(0)',
      }}
      rowHeight={245}
      gap={1}
    >
      {itemData.map((item) => {
        const cols = item.featured ? 2 : 1;
        const rows = item.featured ? 2 : 1;

        return (
          <ImageListItem key={item.img} cols={cols} rows={rows}>
            <img
              {...srcset(item.img, 250, 200, rows, cols)}
              loading="lazy"
            />
            <ImageListItemBar
              sx={{
                background:
                  'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                  'rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 0%)',
              }}
              actionPosition="left"
            />
          </ImageListItem>
        );
      })}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://i.blogs.es/1f150d/captura-de-pantalla-2020-07-09-a-las-10.31.41/1366_2000.jpg',
    author: '@bkristastucchio',
    featured: true,
  },
  {
    img: 'https://i.blogs.es/3c61e5/captura-de-pantalla-2020-07-09-a-las-10.30.29/1366_2000.jpg',
    author: '@rollelflex_graphy726',
    featured: true,
  },
  {
    img: 'https://i.blogs.es/8c87c7/captura-de-pantalla-2020-07-09-a-las-10.36.13/1366_2000.jpg',
    author: '@helloimnik',
    featured: true,
  },
  {
    img: 'https://i.blogs.es/5e5cd4/captura-de-pantalla-2020-07-09-a-las-10.37.35/1366_2000.jpg',
    author: '@nolanissac',
    featured: true,
  },
];
