
import { Bars } from 'react-loader-spinner'
import { useSelector } from 'react-redux';

function Loading() {
    const isLoading = useSelector((state) => state.isLoading);
    return(
        <>
        {
            isLoading && 
            <div className='position-absolute top-0 start-0 w-100 h-100 backtrap-window d-flex justify-content-center align-items-center'>
                    <Bars
                        height="100"
                        width="100"
                        color="#4fa94d"
                        ariaLabel="bars-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                        />
            </div> 
        }
        </>
    )
}

export default Loading;