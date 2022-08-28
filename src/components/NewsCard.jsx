import { useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import {BsBookmark, BsFillBookmarkFill, BsShare} from 'react-icons/bs'
import Moment from 'react-moment'

const NewsCard = (props) => {
    const [copy, setCopy] = useState({value: '', copied: false})

    const [savedNews, setSavedNews] = useState({
        title: '',
        href: '',
        source: '',
        timestamps: '',
        saved: false
    })

    setTimeout(() =>{
        setCopy({copied: false})
    }, 3000)

    const sendNews = (title, href, source, timestamps) => {
        setSavedNews({
            title,
            href, 
            source, 
            timestamps,
            saved: true
        })

        console.log(savedNews)
    }
    

    return (
        <>
        <article key={props.keys} className="bg-white dark:bg-slate-500 dark:border-0 dark:text-white shadow border-2 border-gray-200 ml-6 p-6 flex flex-col justify-start rounded-lg">
            <h5 className="text-gray-900 dark:text-white text-md xl:text-xl font-medium mb-2">
                <a href={props.href} className="hover:underline" target="_blank" rel="noopener noreferrer">{props.title}</a>
            </h5>
            <p className="text-gray-700 text-base mb-4">
                {props.desc}
            </p>

            <div className="flex items-center gap-2">
                <p className="text-gray-600 dark:text-white text-xs">{props.source}</p>
                <p className="text-gray-600 dark:text-white text-xs">
                    <Moment fromNow>{props.timestamps}</Moment>
                </p>

                <div className="flex gap-1 text-xs items-center">
                    <button className='hover:bg-gray-100 dark:hover:text-black hover:shadow-lg p-1 rounded-full'  onClick={() => sendNews(props.title, props.href, props.source, props.timestamps)}>
                        {savedNews.saved ? <BsFillBookmarkFill/> : <BsBookmark/>}
                    </button>

                    <CopyToClipboard text={props.href} onCopy={() => setCopy({copied: true})}>
                        <button className='hover:bg-gray-100 dark:hover:text-black hover:shadow-lg p-1 rounded-full'>
                            <BsShare/>
                        </button>

                    </CopyToClipboard>

                   {copy.copied && <small className="bg-gray-200 pl-1 pr-1 rounded-lg">link copied</small>}
                </div>
            </div>
        </article>
        </>
    )
}

export default NewsCard