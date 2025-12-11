import Link from "next/link";



const Newslayout = ({children}: {children: React.ReactNode}) => {
    return (
        <div>
         <div className="py-4">
            <h1 className="text-xl font-bold">Latest News</h1>
            <nav className="space-x-4 py-4">
                <Link href='/news/sports' >Sports</Link>
                <Link href='/news/health' >Health</Link>
                <Link href='/news/tech' >Technology</Link>
            </nav>
        </div>

         <div className="flex ">
                <div className="w-4/5 bg-blue-100 h-96 flex justify-center items-center">
                   {children}
                </div>
                <div className="w-1/5 bg-pink-300 h-96 ">
                    Sidebar
                </div>
            </div>
        </div>
    );
};

export default Newslayout;