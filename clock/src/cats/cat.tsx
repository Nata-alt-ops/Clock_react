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

    if (loading) return <div className="Loading"> Loading...</div>
    if (!cats) return <div>No cat found</div>;
    return(
        <div className="cats_photo_button ">
            <button onClick={CatsNew}>Обновить</button>
            <img src={cats.url} alt={cats.id}></img>
                
        </div>
    )




}