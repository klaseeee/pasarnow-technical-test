const Card = (props) => {
    return (
        <div key={props.keys}>
            <div className="rounded-lg shadow-lg bg-white dark:bg-slate-500 p-2">
                <a href={props.href} data-mdb-ripple="true" data-mdb-ripple-color="light" className="flex justify-center">
                    <img className="rounded-t-lg" src={props.src} alt={props.alt}/>
                </a>
                <div className="p-2 pb-0">
                    <a href={props.link} className="text-gray-700 dark:text-white text-base mb-4 text-center hover:underline">
                        {props.title}
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Card