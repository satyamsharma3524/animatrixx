import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

const MangaChapters = () => {
    const { pk } = useParams();
    const [chapterData, setChapterData] = useState(null);
    const SERVER_BASE_URL = "http://localhost:8000/";

    useEffect(() => {
        const fetchChapterData = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/mangachapter/?pk=${pk}`);
                setChapterData(response.data.chapters);
            } catch (error) {
                // Handle error
            }
        };

        fetchChapterData();
    }, [pk]);

    return (
        <div id="carouselExampleControls" className="carousel slide mx-5 my-5" data-bs-ride="carousel">
        <div className="carousel-inner">
            {chapterData && chapterData.reduce((acc, chapter, index) => {
                const chunkIndex = Math.floor(index / 5);
                if (!acc[chunkIndex]) {
                    acc[chunkIndex] = [];
                }
                acc[chunkIndex].push(chapter);
                return acc;
            }, []).map((chunk, chunkIndex) => (
                <div className={`carousel-item ${chunkIndex === 0 ? 'active' : ''}`} key={chunkIndex}>
                    <div className="d-flex justify-content-center">
                        {chunk.map(chapter => (
                            <div className="card mx-3" style={{width: "18rem"}}>
                                <img className="card-img-top" style={{height: "22rem"}} src={SERVER_BASE_URL + chapter.image} alt={chapter.name}></img>
                                <div className="card-body">
                                    <h5 className="card-title">{chapter.name}</h5>
                                    <p className="card-text text-truncate">{chapter.description}</p>
                                    <Link to={`/manga/${chapter.id}`} className="btn btn-primary">Read</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
    );
};

export default MangaChapters;