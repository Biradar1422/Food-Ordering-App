import { useSelector } from "react-redux";
import FoodData from "../Data/FoodData";
import FoodCard from "./FoodCard";
import toast, { Toaster } from 'react-hot-toast';


const FoodItems = () =>{
    const handleToast = (name) => toast.success(`Added ${name}`)
    const search = useSelector((state)=>state.search.search)
    const category = useSelector((state)=> state.category.category)

    return(
        <>
        <Toaster position="top-center" reverseOrder={false}/>
        <div className="flex flex-wrap gap-10 justify-center lg:justify-start mx-6 my-10">

            {
                FoodData.filter((food)=>{
                    if(category === "All")
                        {
                            return food.name.toLowerCase().includes(search.toLowerCase());
                        }
                    else{
                        return category === food.category &&
                        food.name.toLowerCase().includes(search.toLowerCase());
                    }
                }).map((food)=>(
                    <FoodCard 
                    key={food.id}
                    id={food.id}
                    name={food.name}
                    price={food.price}
                    desc={food.desc}
                    rating={food.rating}
                    img={food.img}
                    handleToast={handleToast}
                    />

                ))
            }
            
        </div>
        </>
    )
}

export default FoodItems;