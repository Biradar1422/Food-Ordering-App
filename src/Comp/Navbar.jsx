import { useDispatch } from "react-redux";
import { setSearch } from "../redux/slices/SearchSlice";



const Navbar = () => {

    const dispatch = useDispatch();

    return (
        <>
            <nav className="flex flex-col lg:flex-row justify-between mx-6 p-3">
                <div>
                    <h3 className="text-xl font-bold text-gray-600">{ new Date().toString().slice(0,16) }</h3>
                </div>

                <div>
                    <h2 className="font-bold font-serif text-3xl text-pink-800">Tasty Sensation - Tasty Food</h2>
                </div>

                <div>
                    <input
                        type="search"
                        name="search"
                        id=""
                        placeholder="Search here"
                        autoComplete="off"
                        onChange={(e) => dispatch(setSearch(e.target.value))}
                        className="p-3 border border-gray-500 text-sm rounded-lg outline-none w-full lg:wd[25vw]"
                        />
                </div>
            </nav>
        </>
    )
}

export default Navbar;