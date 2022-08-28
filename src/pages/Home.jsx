import { useId, useRef } from "react"
import { useNavigate } from "react-router-dom";

import SearchInput from "../components/SearchInput";
import { images } from "../constants";

const Home = () => {
    const searchInput = useRef('')
    const navigate = useNavigate()
    const id = useId()

    const currentUrl = window.location.pathname

    const hasilPencarian = (url) => {
        const urlDefaultSearch = url === '/' ? '/result' : url + '/result'

        navigate(urlDefaultSearch, {
            state: searchInput.current.value
        })
    }

    const handleKeyUp = (e) => {
        e.preventDefault()

        if(e.key === 'Enter') {
           hasilPencarian(currentUrl)
           searchInput.current.value = ''
        }
    }

    return (
        <>
            <section className="flex justify-center content-center border min-h-screen">
                <div className="flex flex-col justify-start pt-32 p-10 lg:p-24 items-center gap-6 w-full">
                    <label htmlFor={id} className="text-3xl dark:text-white">
                        <img src={images.pasarnow} alt="pasarnow" className="w-44 md:w-52 lg:w-60"/>
                    </label>
                    <SearchInput id={id} refs={searchInput} onKeyUp={handleKeyUp} className="py-1.5 md:py-2 lg:py-2.5 w-full md:w-3/5 lg:w-2/5"/>
                </div>
            </section>
        </>
        
    )
}

export default Home