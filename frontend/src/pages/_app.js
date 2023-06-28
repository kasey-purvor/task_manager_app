import dynamic from 'next/dynamic'
import '../styles/globals.css'
import Navbar from '@/components/navbar'
import ErrorBoundary from '@/components/errorBoundary'
// import ('preline')
dynamic(() => import('preline'), {
    ssr: false
})
export default function App({ Component, pageProps }) {
    return (
        <div className='bg-gray-300 h-full'>
            <Navbar/>
            <ErrorBoundary>
                <Component {...pageProps} />
            </ErrorBoundary>
        </div>
    )
}