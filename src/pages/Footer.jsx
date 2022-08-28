const Footer = () => {
    return (
        <footer className="dark:bg-yellow-400 bg-green-800 flex flex-col justify-center items-center pt-1 pb-2 rounded-tl-full rounded-tr-full shadow-md absolute bottom-0 w-full">
            <h4 className="capitalize text-xl md:text-2xl font-medium text-white dark:text-slate-800">pasarnow search engine</h4>
            <small className="dark:text-slate-800 text-xs text-white">Copyright {new Date().getFullYear()}. Alright Reserved.</small>
        </footer>
    )
}

export default Footer