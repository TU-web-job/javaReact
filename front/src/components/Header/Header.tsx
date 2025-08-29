import Link from "next/link";

const Header = () => {
    return(
        <header className="w-full h-[250px] mb-4 flex">
            <h2 className="items-center justify-center text-4xl font-bold">My Pet&apos;s Diary</h2>
            <ul className="flex p-4 justify-end">
                <Link href="#" className="underline decoration-gray-500 mr-2">Home</Link>
                <Link href="#" className="underline decoration-gray-500 mr-2">About</Link>
                <Link href="#" className="underline decoration-gray-500 mr-2">Top</Link>
                <Link href="#" className="underline decoration-gray-500">Test</Link>
            </ul>
        </header>
    );
}

export default Header;