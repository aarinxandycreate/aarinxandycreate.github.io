import React, { useEffect, useRef, useState } from 'react';
import '../App.css';
import './Carousel.css';

/*
Supported Carousel Types and Usage Example:
const items = [
    { type: 'image', src: 'https://example.com/image1.jpg' },
    { type: 'youtube', videoId: 'dQw4w9WgXcQ' },
    { type: 'youtube-playlist', playlistId: 'PLFgquLnL59alCl_2TQvOiD5Vgm1hCaGSI' },
    { type: 'spotify', spotifyType: 'track', spotifyId: '3n3Ppam7vgaVa1iaRUc9Lp' },
];

*/

function Carousel({ items, options = {} }) {
    const { showArrows = true, showDots = true, autoSlide = false, slideInterval = 3000 } = options;

    const [currentIndex, setCurrentIndex] = useState(0);
    const [slideHeight, setSlideHeight] = useState(0);
    const slideRef = useRef(null);

    useEffect(() => {
        if (autoSlide) {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
            }, slideInterval);
            return () => clearInterval(interval);
        }
    }, [autoSlide, slideInterval, items.length]);

    useEffect(() => {
        // Update carousel height dynamically based on active slide content
        if (slideRef.current) {
            setSlideHeight(slideRef.current.scrollHeight); // Adjusts for all dynamic content including title and text
        }
    }, [currentIndex, items]);

    const updateCarousel = (direction) => {
        setCurrentIndex((currentIndex + direction + items.length) % items.length);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    const renderItem = (item, index) => {
        return (
            <div
                ref={index === currentIndex ? slideRef : null}
                className="carousel-item"
                style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >
                {item.type === 'image' && <img src={item.src} alt={`Slide ${index + 1}`} className="carousel-content" />}
                {item.type === 'youtube' && (
                    <iframe
                        className="carousel-content"
                        src={`https://www.youtube.com/embed/${item.videoId}`}
                        title={`YouTube Video ${index + 1}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                )}
                {item.type === 'youtube-playlist' && (
                    <iframe
                        className="carousel-content"
                        src={`https://www.youtube.com/embed/videoseries?list=${item.playlistId}`}
                        title={`YouTube Playlist ${index + 1}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                )}
                {item.type === 'spotify' && (
                    <iframe
                        className="carousel-content"
                        src={`https://open.spotify.com/embed/${item.spotifyType}/${item.spotifyId}`}
                        title={`Spotify Embed ${index + 1}`}
                        frameBorder="0"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                )}
                {/* Title and Subtitle within Slide */}
                <div className="carousel-meta-slide" style={{ width: '85%', textAlign: 'left', marginTop: '1rem', zIndex: 1 }}>
                    <h2 className="carousel-title-slide" style={{ margin: '0', fontSize: '1.5rem'}}>{item.title || ''}</h2>
                    <p className="carousel-subtitle-slide" style={{ margin: '0.5rem 0 0', fontSize: '1rem'}}>{item.subtitle || ''}</p>
                </div>
            </div>
        );
    };

    return (
        <div className="carousel-container" style={{ height: slideHeight }}>
            <div
                className="carousel-track"
                style={{ transform: `translateX(-${currentIndex * 100}%)`, display: 'flex' }}
            >
                {items.map((item, index) => (
                    <div key={index} className="carousel-slide" style={{ flex: '0 0 100%' }}>
                        {renderItem(item, index)}
                    </div>
                ))}
            </div>

            {showArrows && (
                <>
                    <button
                        className="carousel-arrow left"
                        onClick={() => updateCarousel(-1)}
                        style={{ zIndex: 2 }}
                    >
                        &#9664;
                    </button>
                    <button
                        className="carousel-arrow right"
                        onClick={() => updateCarousel(1)}
                        style={{ zIndex: 2 }}
                    >
                        &#9654;
                    </button>
                </>
            )}

            {showDots && (
                <div className="carousel-dots">
                    {items.map((_, index) => (
                        <button
                            key={index}
                            className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => goToSlide(index)}
                        ></button>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Carousel;