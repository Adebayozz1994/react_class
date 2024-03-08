import React, { useState } from 'react';
import axios from 'axios';

const ImageSearch = () => {
    const [inpValue, setInpValue] = useState('');
    const [images, setImages] = useState([]);
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        setInpValue(e.target.value);
    };

    const fetchImages = () => {
        if (inpValue === '') {
            setError('Please enter a search term.');
            return;
        }
        
        axios.get(`https://pixabay.com/api/?key=42766677-a60e8405a1f2deafc19e9c99a&q=${inpValue}&image_type=photo`)
            .then(response => {
                setImages(response.data.hits);
                setError('');
            })
            .catch(error => {
                console.error('Error fetching images:', error);
                setError('Error fetching images. Please try again later.');
            });
    };
    

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
                <div className="flex items-center border-b border-gray-300 p-4">
                    <input 
                        type="text" 
                        value={inpValue} 
                        onChange={handleInputChange} 
                        className="w-full rounded-lg border-2 border-gray-300 p-2 focus:outline-none focus:border-blue-500"
                        placeholder="Enter search term"
                    />
                    <button 
                        onClick={fetchImages} 
                        className="bg-blue-500 text-white rounded-lg px-4 ml-2 focus:outline-none focus:bg-blue-600"
                    >
                        Fetch
                    </button>
                </div>
                {error && <p className="text-red-500 text-center">{error}</p>}
                <div className="grid grid-cols-2 gap-4 p-4">
                    {images.map(image => (
                        <div key={image.id} className="bg-gray-200 rounded-lg overflow-hidden">
                            <img src={image.largeImageURL} alt={image.user} className="w-full" />
                            
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ImageSearch;
