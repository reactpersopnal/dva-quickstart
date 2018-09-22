import ImageGalley from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css";
import React from 'react'

class MyComponent extends React.Component {
  render () {
    const className = {
      width: '20px',
      height: '200px'
    }
    const images = [
      {
        thumbnail: [require('../assets/test.jpg')],
        imageSet: [{
          srcSet: [require('../assets/test.jpg')],
          media: '(min-width: 700px)'
        }]
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/2/',
        thumbnail: 'http://lorempixel.com/250/150/nature/2/'
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/3/',
        thumbnail: 'http://lorempixel.com/250/150/nature/3/'
      }
    ]

    return (
      <ImageGalley items={images}/>
    )
  }
}

export default MyComponent
