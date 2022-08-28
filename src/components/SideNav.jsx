import {TbWorld} from 'react-icons/tb'

const SideNav = () => {
    return (
        <nav className="hidden lg:fixed lg:block lg:left-0 lg:top-0 md:bottom-0 w-1/5 pt-20">
            <ul className="flex flex-col justify-center gap-2 pr-2">
                <li className='flex gap-2 items-center pl-6 p-2 dark:bg-slate-500 bg-green-800 w-full rounded-r-3xl shadow'>
                    <TbWorld className="text-white"/>
                    <span className='text-white'>Top News</span>
                </li>
            </ul>
        </nav>   
    )
}

export default SideNav