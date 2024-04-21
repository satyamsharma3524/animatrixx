import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import FlatList from 'flatlist-react';


const MangaReader = () => {
    const { pk } = useParams();
    const [images, setImages] = useState([]);
    const [apidata, setApidata] = useState({});

    const loadMoreData = async () => {
        const response = await axios.get(apidata.next);
        setApidata(response.data);
        setImages([...images, ...response.data.results]);
    }

    const renderImage = (image, idx) => {
        return (
            <img className='px-5 mx-5' key={idx} src={`data:image/png;base64,${image}`} alt={`Page ${idx + 1}`} />
        )
    }

    useEffect(() => {
        const fetchImages = async () => {
            console.log("pk", pk)
            const response = await axios.get(`http://localhost:8000/api/chapter_images/?pk=${pk}`);
            setApidata(response.data);
            setImages(response.data.results);
        };

        fetchImages();
    }, [pk]);

    return (
        <div className='d-flex justify-content-center flex-column px-5 mx-5 bg-dark'>
            <FlatList
                list={images}
                renderItem={renderImage}
                renderWhenEmpty={() => <div>List is empty!</div>}
                loadMoreData={loadMoreData}
                pagination={{
                    hasMore: apidata.next !== null,
                    loadMore: loadMoreData,
                  }}
            />
        </div>
    );
};

export default MangaReader;