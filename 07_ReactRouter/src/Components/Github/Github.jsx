import React, { useEffect, useState } from "react";
import { useLoaderData } from 'react-router-dom';

    function Github() {

        const data = useLoaderData()

        // const [data,setData] = useState([])

        // useEffect( () => {
        //     fetch('https://api.github.com/users/vedantsalunkhe54-design')
        //     .then( response => response.json())
        //     .then( data => {
        //         console.log(data);
        //         setData(data)
                
        //     })
        // }, [])

    return (
        <div className="text-center bg-amber-300 text-3xl m-4 text-white p-4">
            Github Name : {data.login}
            <img src={data.avatar_url} alt="Git picture" className="w-32 h-32 rounded-full" />
        </div>
    )

}

export default Github

export const GithubInfoLoader= async function () {
    const response = await fetch('https://api.github.com/users/vedantsalunkhe54-design')
    return response.json();
}