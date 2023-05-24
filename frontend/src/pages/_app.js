import ('preline')
import '../styles/globals.css'
import Navbar from '@/components/navbar'

export default function App({ Component, pageProps }) {
    return (
        <div className='bg-gray-300 h-screen'>
            <Navbar/>
            <Component {...pageProps} />
        </div>
    )
}