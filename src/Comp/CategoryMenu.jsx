import { useEffect, useState } from "react";
import FoodData from "../Data/FoodData";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/slices/CategorySlice";


const CategoryMenu = () => {

    const [categories, setCategories] = useState([]);

    const listUniqueCategories = () => {
        const uniqueCategories = [...new Set(FoodData.map((food) => food.category))];
        setCategories(uniqueCategories);
    };

    useEffect(() => {
        listUniqueCategories();
    }, []);

    const dispatch = useDispatch();
    const selectedCategory = useSelector((state) => state.category.category)

    return (
        <>
            <div className="flex justify-center">

                <h2 className="text-1xl">Find the Best Food...!!!</h2>
                
                


                <div className="flex  justify-center gap-3 my-5 overflow-x-scroll scroll-smooth lg:overflow-x-hidden">
                    <button
                        onClick={() => dispatch(setCategory("All"))}
                        className={`px-4 py-2  rounded-lg bg-gray-200 hover:bg-green-500 hover:text-white  ${selectedCategory ===
                            "All" && "bg-green-500 text-white"
                        } `}
                    >
                        All
                    </button>
                    {
                        categories.map((category, index) => {
                            return (
                                <button
                                    onClick={() => dispatch(setCategory(category))}
                                    key={index}
                                    className={`px-4 py-2  rounded-lg bg-gray-200 hover:bg-green-500 hover:text-white ${selectedCategory ===
                                        category && "bg-green-500 text-white"
                                    } `}
                                >
                                    {category}
                                </button>

                            );
                        })
                    }

                    {/* <button className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-blue-500 hover:text-white">lunch</button>
        <button className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-blue-500 hover:text-white">Breakfast</button>
        <button className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-blue-500 hover:text-white">Dinner</button>
        <button className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-blue-500 hover:text-white">Snacks</button> */}
                </div>
            </div>
        </>
    )
}

export default CategoryMenu;