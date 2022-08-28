import axios from "axios"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import Card from "../components/Card"
import Loading from "../components/Loading"

const ResultImage = () => {
    const searchInput = useLocation()
    const [dataImg, setDataImg] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const searchImg = async () => {
        setIsLoading(true)

        const config = {
            method: 'GET',
            url: `https://google-search3.p.rapidapi.com/api/v1/image/q=${searchInput.state}`,
            headers: {
                'X-User-Agent': 'desktop',
                'X-Proxy-Location': 'IN',
                'X-RapidAPI-Key': process.env.REACT_APP_API_KEY_2,
                'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'
            }
        }

        try {
            const response = await axios(config)
            setDataImg(response.data)
            setIsLoading(false)

        } catch(err) {
            console.log(err)
        }
    }

    useEffect(() => {
        document.title = 'Pasarnow | Image Result'
        searchImg()
    }, [])

    return (
        <>
            {!isLoading ? (
                <div className="min-h-screen flex justify-center">
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 lg:pl-6 lg:pr-6 xl:grid-cols-5 gap-4 justify-center pt-20 p-4 xl:pt-24 pb-24 max-w-screen-xl">
                        {dataImg?.image_results?.map((img, index) => {
                            return (
                                <div key={index}>   
                                    <Card keys={index} href={img.link.href} src={img.image.src} alt={img.image.alt} title={img.link.title} link={img.link.href}/>
                                </div>
                                )
                            })}
                    </div>
                </div>
            ) : 
            (
                <Loading/>
            )}
        </>
    )
}

export default ResultImage