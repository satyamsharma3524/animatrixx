// import React, { useEffect, useState } from 'react';
// import unzipper from 'unzipper';

// const MangaFileReader = ({ mangaFile }) => {
//     const [images, setImages] = useState([]);

//     useEffect(() => {
//         const fetchCBZFile = async () => {
//             try {
//                 const response = await fetch(mangaFile);
//                 const buffer = await response.arrayBuffer();
//                 const zip = await unzipper.Open.buffer(buffer);

//                 const imageFiles = zip.files.filter((file) => file.path.endsWith('.jpg') || file.path.endsWith('.png'));

//                 const imageUrls = await Promise.all(imageFiles.map(async (file) => {
//                     const imageBuffer = await file.buffer();
//                     const imageUrl = URL.createObjectURL(new Blob([imageBuffer]));
//                     return imageUrl;
//                 }));

//                 setImages(imageUrls);
//             } catch (error) {
//                 console.error('Error reading CBZ file:', error);
//             }
//         };

//         fetchCBZFile();
//     }, [mangaFile]);

//     return (
//         <div>
//             <h2>Manga File Reader</h2>
//             {images.map((imageUrl, index) => (
//                 <img key={index} src={imageUrl} alt={`Page ${index + 1}`} />
//             ))}
//         </div>
//     );
// };

// export default MangaFileReader;