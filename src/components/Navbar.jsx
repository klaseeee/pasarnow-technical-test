import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import {MdOutlineDarkMode} from 'react-icons/md'
import {HiMenuAlt4} from 'react-icons/hi'
import {BsSun} from 'react-icons/bs'

import { Home, NewsResult, Result, ResultImage} from '../pages';

const NavBar = () => {
    const [theme, setTheme] = useState('light')
    const [toggle, setToggle] = useState(false)
    const [active, setActive] = useState({id: '', class: ''})

    const changeTheme = () => {
      if(theme === 'light') {
        setTheme('dark')

        document.body.classList.remove('light')
        document.body.classList.add('dark')
      }
      else {
        setTheme('light')
        localStorage.theme = 'light'

        document.body.classList.remove('dark')
        document.body.classList.add('light')
      }
    }

    const handleToggle = () => {
      toggle ? setToggle(false) : setToggle(true)
    }

    const navActive = (id) => {
      if(id === '1') {
        setActive({id: id, class: 'bg-green-800 text-white'})
      } else {
        setActive('bg-green-800 text-white')
      }
    }

    return (
        <Router>
            <nav className={`z-20 fixed flex justify-between items-center w-full p-2 pr-4 pl-4 dark:bg-slate-800 bg-white dark:text-white`}>
              <button onClick={() => changeTheme()}>
                {theme === 'light' ? <BsSun className='text-md md:text-lg'/> : <MdOutlineDarkMode className='text-md md:text-lg'/>}
              </button>

              <ul className="hidden md:flex justify-end gap-2 pt-2">
                  <li className={`${active.class} cursor-pointer pt-1 pb-1 p-3 rounded-md`} onClick={() => navActive('1')}>
                    <Link to="/search/image" className="capitalize">image</Link>
                  </li>
                  <li className={`${active} cursor-pointer pt-1 pb-1 p-3 rounded-md`} onClick={() => navActive('2')}>
                    <Link to="/search/news" className="capitalize">news</Link>
                  </li>
              </ul>

              <button className='md:hidden lg:hidden xl:hidden' onClick={() => handleToggle()}>
                <HiMenuAlt4 className='text-lg'/>
              </button>

              {toggle && <ul className='absolute right-1 top-10 w-32 h-14 rounded bg-zinc-300 shadow-sm dark:bg-slate-400 flex justify-center items-center flex-col'>
                <li className="text-center text-base w-full hover:bg-green-500 hover:dark:bg-slate-500">
                  <Link to="/search/image" className='capitalize'>image</Link>
                </li>
                <li className="text-center text-base w-full hover:bg-green-500 hover:dark:bg-slate-500">
                  <Link to="/search/news" className='capitalize'>news</Link>
                </li>
              </ul>}
            </nav>

            <Routes>
              <Route path="/" element={<Home name="Engine"/>}/>
              <Route path="/search/image" element={<Home name="Image"/>}/>      
              <Route path="/search/image/result" element={<ResultImage/>}/>      
              <Route path="/search/news" element={<Home name="News"/>}/>
              <Route path="/search/news/result" element={<NewsResult/>}/>
              <Route path="/result" element={<Result/>}/>
            </Routes>
        </Router>
    )
}

export default NavBar