import React, { useEffect } from "react";
import { useState } from "react";
import './cat.scss'

type Cats ={
    id:string,
    url: string,
    width: number,
    height: number
}

export const Cats = () =>{
    const[loading, setLoading] = useState(false);
    const[error, setError] = useState<string | null>(null);
    const[cats, setCats] = useState<Cats| null>(null)

    const CatsNew = () =>{
        setLoading(true);
        fetch('https://api.thecatapi.com/v1/images/search')
            .then(response => {
                if (!response.ok){
                    throw new Error('Ошибка загрузки')
                }
                return response.json();
            })
            .then((data: Cats[]) =>{
                setCats(data[0]);
                setError(null);
            })
            .catch(err => {
                setError(err.message);
            })
            .finally(() => {
                setLoading(false)
            });
        };

    useEffect(() => {
        CatsNew();
    }, []);

    
    if (!cats) return <div>Котиков нету</div>;
    return(
        <div className="cats_photo_button ">
            <div className="card">
                <div className="text_cats">
                   <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 256 256">
                        <defs>
                            <linearGradient id="Gradient_icon" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stop-color="#2563eb" />
                            <stop offset="100%" stop-color="#9333ea" />
                            </linearGradient>
                        </defs>
                        <path d="M222.83,33.54a16,16,0,0,0-18.14,3.15c-.14.14-.26.27-.38.41L187.05,57A111.28,111.28,0,0,0,69,57L51.69,37.1c-.12-.14-.24-.27-.38-.41a16,16,0,0,0-18.14-3.15A16.4,16.4,0,0,0,24,48.46V136c0,49,40.06,89.63,91.56,95.32a4,4,0,0,0,4.44-4v-32l-13.42-13.43a8.22,8.22,0,0,1-.41-11.37,8,8,0,0,1,11.49-.18L128,180.68l10.34-10.35a8,8,0,0,1,11.49.18,8.22,8.22,0,0,1-.41,11.37L136,195.31v32a4,4,0,0,0,4.44,4C191.94,225.62,232,185,232,136V48.46A16.4,16.4,0,0,0,222.83,33.54ZM84,152a12,12,0,1,1,12-12A12,12,0,0,1,84,152Zm20-64a8,8,0,1,1-16,0V69a8,8,0,0,1,16,0Zm32,0a8,8,0,1,1-16,0V64a8,8,0,0,1,16,0Zm16,0V69a8,8,0,0,1,16,0V88a8,8,0,1,1-16,0Zm20,64a12,12,0,1,1,12-12A12,12,0,0,1,172,152Z" 
                        fill="url(#Gradient_icon)"/>
                    </svg>
                    <h1>Котики</h1>
                </div>
                <img src={cats.url} alt={cats.id}></img>
                <button onClick={CatsNew}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" fill="#ffffffff" viewBox="0 0 256 256"><path d="M222,48V96a6,6,0,0,1-6,6H168a6,6,0,0,1,0-12h33.52L183.47,72a81.51,81.51,0,0,0-57.53-24h-.46A81.5,81.5,0,0,0,68.19,71.28a6,6,0,1,1-8.38-8.58,93.38,93.38,0,0,1,65.67-26.76H126a93.45,93.45,0,0,1,66,27.53l18,18V48a6,6,0,0,1,12,0ZM187.81,184.72a81.5,81.5,0,0,1-57.29,23.34h-.46a81.51,81.51,0,0,1-57.53-24L54.48,166H88a6,6,0,0,0,0-12H40a6,6,0,0,0-6,6v48a6,6,0,0,0,12,0V174.48l18,18.05a93.45,93.45,0,0,0,66,27.53h.52a93.38,93.38,0,0,0,65.67-26.76,6,6,0,1,0-8.38-8.58Z">
                        </path></svg>
                    <p>Обновить</p>
                </button>
            </div>
        </div>
    )
}