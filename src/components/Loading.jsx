import ReactLoading from 'react-loading'

const Loading = () => {
    return (
        <div className='flex justify-center items-center w-full h-screen absolute top-0 backdrop-blur-sm bg-white/30 dark:bg-slate-800'>
            <ReactLoading type='spin' color="#000000" height={'7%'} width={'7%'}/>
        </div>
    )
}

export default Loading