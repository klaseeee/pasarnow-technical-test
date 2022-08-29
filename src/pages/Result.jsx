import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

import Loading from '../components/Loading'

const Result = () => {
    const location = useLocation()
    const [searchResult, setSearchResult] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const search = async () => {
        setIsLoading(true)

        const config = {
            method: 'GET',
            url: `https://google-search3.p.rapidapi.com/api/v1/search/q=${location.state}`,
            headers: {
                'X-User-Agent': 'desktop',
                'X-Proxy-Location': 'IN',
                'X-RapidAPI-Key': `${process.env.REACT_APP_API_KEY_2}`,
                'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'
            }
        }

        try {
            const response = await axios(config)
            setSearchResult(response.data.results)
            setIsLoading(false)
        } catch (err) {
            console.log(err)
        }
    }

   useEffect(() => {
     search()
   }, [])
   
    return (
        <>
            {!isLoading ? (
                <div className='container flex justify-center pt-14 pb-20 xl:pt-16 xl:pb-28 dark:text-white'>
                    <ul className='max-w-xs overflow-hidden md:max-w-screen-sm lg:max-w-screen-md lg:pt-6 xl:max-w-5xl flex flex-col gap-1 md:gap-4'>
                        {searchResult.map((result, index) => {
                            return (
                                <li key={index} className="flex flex-col overflow-hidden border-b-2 border-gray-400">
                                    <>
                                        <h6 className='text-xs md:text-sm'>{result.link}</h6>
                                        <a href={result.link} className="text-lg md:text-2xl hover:underline underline-offset-2 visited:text-purple-600 font-medium" target="_blank" rel="noopener noreferrer">{result.title}</a>
                                        <p className='truncate'>{result.description}</p>
                                    </>
                                    <ul className='pl-6 md:p-2 p-2 flex flex-col md:gap-2'>
                                        {result?.additional_links?.map((addLink, index) => {
                                            return (
                                                <div key={index}>
                                                    {(addLink.text.length < 20 && addLink.text !== 'Translate this page') && 
                                                        <>
                                                            <li>
                                                                <a href={addLink.href} target="_blank" rel="noopener noreferrer" className='hover:underline underline-offset-2 visited:text-purple-600 text-lg md:text-xl font-medium'>{addLink.text}</a>
                                                            </li> 
                                                        </>
                                                    }
                                                </div>
                                            )
                                        })}
                                    </ul>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            ) : (
                <Loading/>
            )}
            
        </>
        
    )
}

export default Result