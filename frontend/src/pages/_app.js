import dynamic from 'next/dynamic'
import '../styles/globals.css'
import Navbar from '@/components/navbar'

dynamic(() => import('preline'), {
    ssr: false
})
export default function App({ Component, pageProps }) {
    return (
        <div className='bg-gray-300 h-screen'>
            <Navbar/>
            <Component {...pageProps} />
        </div>
    )
}