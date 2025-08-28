const Header = () => {
    return(
        <header className="w-full h-[250px] mb-4 flex">
            <h2 className="items-center justify-center text-4xl font-bold">My Pet&apos;s Diary</h2>
            <ul>
                <li><a>Home</a></li>
                <li><a>About</a></li>
                <li><a>Top</a></li>
            </ul>
        </header>
    );
}

export default Header;