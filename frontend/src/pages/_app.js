import dynamic from 'next/dynamic'
import '../styles/globals.css'
import Navbar from '@/components/navbar'
// import ('preline')
dynamic(() => import('preline'), {
    ssr: false
})
export default function App({ Component, pageProps }) {
    return (
        <div className='bg-gray-300 h-full'>
            <Navbar/>
            <Component {...pageProps} />
        </div>
    )
}