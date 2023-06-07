export default function PageContainer({children}) {
    return (
        <main className=' bg-green-200 h-auto w-auto  flex justify-center py-6 sm:px-6 rounded-3xl sm:m-2 md:m-5'>
            {children}
        </main>
    )
}