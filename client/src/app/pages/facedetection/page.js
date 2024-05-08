// 'use client'
// import React, { useState } from 'react';
// import Webcam from 'react-webcam';
// import Moreproduct from '../moreproduct/page';
// import './Facedetection.css'
// import Navbar from '@/app/components/navbar/page';

// const SkinColorAnalyzer = () => {
//   const [image, setImage] = useState(null);
//   const webcamRef = React.useRef(null);

//   const capture = React.useCallback(() => {
//     const imageSrc = webcamRef.current.getScreenshot();
//     setImage(imageSrc);
//   }, [webcamRef, setImage]);

//   const analyzeColor = () => {
//     if (!image) return;

//     const canvas = document.createElement('canvas');
//     const context = canvas.getContext('2d');

//     const img = new Image();
//     img.crossOrigin = 'Anonymous';
//     img.src = image;

//     img.onload = () => {
//       canvas.width = img.width;
//       canvas.height = img.height;
//       context.drawImage(img, 0, 0, img.width, img.height);

//       // Define skin color ranges
//       const skinColors = {
//         'Fair/Light Skin': { r: [200, 255], g: [150, 200], b: [100, 150] },
//         'Medium Skin/Tan': { r: [150, 210], g: [100, 180], b: [50, 140] },
//         'Olive Skin': { r: [120, 184], g: [80, 151], b: [30, 120] },
//         'Dark Skin': { r: [50, 92], g: [20, 58], b: [10, 33] },
//         'Black Skin': { r: [0, 26], g: [0, 26], b: [0, 26] },
//         'Brown Skin': { r: [90, 139], g: [40, 69], b: [0, 19] },
//       };

//       // Get the RGB values of the center pixel
//       const pixelData = context.getImageData(img.width / 2, img.height / 2, 1, 1).data;
//       const [r, g, b] = pixelData;

//       // Check if the color matches any skin color range
//       let result = null;
//       for (const color in skinColors) {
//         const { r: [minR, maxR], g: [minG, maxG], b: [minB, maxB] } = skinColors[color];
//         const rMatch = (r >= minR && r <= maxR) ? 1 : 0;
//         const gMatch = (g >= minG && g <= maxG) ? 1 : 0;
//         const bMatch = (b >= minB && b <= maxB) ? 1 : 0;
//         const matchPercentage = (rMatch + gMatch + bMatch) / 3 * 100;
//         if (matchPercentage >= 10) {
//           result = color;
//           break;
//         }
//       }

//       // If no skin color match, display the detected color
//       if (!result) {
//         const detectedColor = detectColor(r, g, b);
//         alert(`Detected color: ${detectedColor}`);
//       } else {
//         alert(`Skin color: ${result}`);
//       }
//     };
//   };

//   // Function to detect non-skin colors
//   const detectColor = (r, g, b) => {
//     const colorNames = {
//       'Red': { r: [220, 255], g: [0, 100], b: [0, 100] },
//       'Green': { r: [0, 100], g: [220, 255], b: [0, 100] },
//       'Blue': { r: [0, 100], g: [0, 100], b: [220, 255] },
//       'Yellow': { r: [220, 255], g: [220, 255], b: [0, 100] },
//       'Orange': { r: [220, 255], g: [100, 200], b: [0, 100] },
//       'Purple': { r: [120, 180], g: [0, 50], b: [120, 180] },
//       'Pink': { r: [220, 255], g: [150, 200], b: [150, 200] },
//       'Brown': { r: [100, 150], g: [50, 100], b: [0, 50] },
//       'Gray': { r: [100, 180], g: [100, 180], b: [100, 180] },
//       'White': { r: [200, 255], g: [200, 255], b: [200, 255] },
//       'Black': { r: [0, 50], g: [0, 50], b: [0, 50] },
//       // Add more colors as needed
//     };

//     for (const color in colorNames) {
//       const { r: [minR, maxR], g: [minG, maxG], b: [minB, maxB] } = colorNames[color];
//       if (r >= minR && r <= maxR && g >= minG && g <= maxG && b >= minB && b <= maxB) {
//         return color;
//       }
//     }

//     return 'Unknown';
//   };

//   return (
//     <>
//     <Navbar />
//     <div className='maindivcontainer' >
//       <Webcam
//         audio={false}
//         ref={webcamRef}
//         screenshotFormat="image/jpeg"
//         width={640}
//         height={480}
//         videoConstraints={{ facingMode: 'user' }}
//       />
//     </div>

//     <div className='div_center' >
//     <button style={{padding:'10px',fontWeight:'bold',borderRadius:'10px',fontSize:'18px',backgroundColor:'#D2B48C'}} onClick={capture}>Click</button>
//       {image && <button style={{padding:'10px',fontWeight:'bold',borderRadius:'10px',fontSize:'18px',backgroundColor:'#F5EDDC',margin:'20px 0'}}   onClick={analyzeColor}>Analyze Color</button>}
//       {image && <img src={image} alt="Captured" />}
//     </div>


//     <Moreproduct />

//     </>
//   );
// };

// export default SkinColorAnalyzer;


'use client'
import React, { useState } from 'react';
import Webcam from 'react-webcam';
import Moreproduct from '../moreproduct/page';
import './Facedetection.css'
import Navbar from '@/app/components/navbar/page';
import BannerSevenButton from '@/app/components/cartbutton/page';
import Facescanresult from '../facescanresult/page';

const SkinColorAnalyzer = () => {
  const [image, setImage] = useState(null);
  const [analyzeClicked, setAnalyzeClicked] = useState(false);
  const webcamRef = React.useRef(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
  }, [webcamRef, setImage]);

  const analyzeColor = () => {
    setAnalyzeClicked(true);
    if (!image) return;

    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.src = image;

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      context.drawImage(img, 0, 0, img.width, img.height);

      // Define skin color ranges
      const skinColors = {
        'Fair/Light Skin': { r: [200, 255], g: [150, 200], b: [100, 150] },
        'Medium Skin/Tan': { r: [150, 210], g: [100, 180], b: [50, 140] },
        'Olive Skin': { r: [120, 184], g: [80, 151], b: [30, 120] },
        'Dark Skin': { r: [50, 92], g: [20, 58], b: [10, 33] },
        'Black Skin': { r: [0, 26], g: [0, 26], b: [0, 26] },
        'Brown Skin': { r: [90, 139], g: [40, 69], b: [0, 19] },
      };

      // Get the RGB values of the center pixel
      const pixelData = context.getImageData(img.width / 2, img.height / 2, 1, 1).data;
      const [r, g, b] = pixelData;

      // Check if the color matches any skin color range
      let result = null;
      for (const color in skinColors) {
        const { r: [minR, maxR], g: [minG, maxG], b: [minB, maxB] } = skinColors[color];
        const rMatch = (r >= minR && r <= maxR) ? 1 : 0;
        const gMatch = (g >= minG && g <= maxG) ? 1 : 0;
        const bMatch = (b >= minB && b <= maxB) ? 1 : 0;
        const matchPercentage = (rMatch + gMatch + bMatch) / 3 * 100;
        if (matchPercentage >= 10) {
          result = color;
          break;
        }
      }

      // If no skin color match, display the detected color
      if (!result) {
        const detectedColor = detectColor(r, g, b);
        alert(`Detected color: ${detectedColor}`);
      } else {
        alert(`Skin color: ${result}`);
      }
    };
  };

  // Function to detect non-skin colors
  const detectColor = (r, g, b) => {
    const colorNames = {
      'Red': { r: [220, 255], g: [0, 100], b: [0, 100] },
      'Green': { r: [0, 100], g: [220, 255], b: [0, 100] },
      'Blue': { r: [0, 100], g: [0, 100], b: [220, 255] },
      'Yellow': { r: [220, 255], g: [220, 255], b: [0, 100] },
      'Orange': { r: [220, 255], g: [100, 200], b: [0, 100] },
      'Purple': { r: [120, 180], g: [0, 50], b: [120, 180] },
      'Pink': { r: [220, 255], g: [150, 200], b: [150, 200] },
      'Brown': { r: [100, 150], g: [50, 100], b: [0, 50] },
      'Gray': { r: [100, 180], g: [100, 180], b: [100, 180] },
      'White': { r: [200, 255], g: [200, 255], b: [200, 255] },
      'Black': { r: [0, 50], g: [0, 50], b: [0, 50] },
      // Add more colors as needed
    };

    for (const color in colorNames) {
      const { r: [minR, maxR], g: [minG, maxG], b: [minB, maxB] } = colorNames[color];
      if (r >= minR && r <= maxR && g >= minG && g <= maxG && b >= minB && b <= maxB) {
        return color;
      }
    }

    return 'Unknown';
  };

  return (
    <>
    <Navbar />
    <div className='maindivcontainer' >
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={640}
        height={480}
        videoConstraints={{ facingMode: 'user' }}
      />
    </div>

    <div className='div_center' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <button style={{marginTop:'20px', padding: '10px', fontWeight: 'bold', borderRadius: '10px', fontSize: '18px', backgroundColor: '#D2B48C',width:'200px' }} onClick={capture}>Click</button>
  {image && <button style={{ padding: '10px', fontWeight: 'bold', borderRadius: '10px', fontSize: '18px', backgroundColor: '#F5EDDC', margin: '20px 0',width:'200px' }} onClick={analyzeColor}>Analyze Color</button>}
  {image && <img src={image} alt="Captured" />}
</div>


    {analyzeClicked && <Facescanresult style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}} />}
    </>
  );
};

export default SkinColorAnalyzer;


