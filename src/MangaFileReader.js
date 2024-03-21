import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const MangaReader = () => {
    const { pk } = useParams();
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            console.log("pk", pk)
            const response = await axios.get(`http://localhost:8000/api/chapter_images/?pk=${pk}`);
            setImages(response.data.images);
        };

        fetchImages();
    }, [pk]);

    return (
        <div className='d-flex justify-content-center flex-column px-5 mx-5 bg-dark'>
            {images.map((image, index) => {
                return (
                    <img className='px-5 mx-5' key={index} src={`data:image/png;base64,${image}`} alt={`Page ${index + 1}`} />
                )
            })}
        </div>
    );
};

export default MangaReader;