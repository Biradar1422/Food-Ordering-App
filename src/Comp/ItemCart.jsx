
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { MdDelete } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { removeFromCart, incrementQty, decrementQty } from '../redux/slices/CartSlice'
const ItemCart = ({ img, price, id, name, qty }) => {

    const dispatch = useDispatch();

    return (
        <>
            <div className='flex gap-2 shadow-md rounded-lg p-2 mb-3'>
                <MdDelete onClick={() => {
                    dispatch(removeFromCart({ id, img, name, price, qty }));
                    toast(`${name} Removed!`, {
                        icon: '👏',
                    });
                }} className='absolute right-7 text-gray-600 cursor-pointer ' />
                <img
                    src={img}
                    className="w-[50px] h-[50px]"
                />


                <div className='leading-5'>
                    <h2 className='font-bold text-gray-700'>{name}</h2>
                    <div className='flex justify-between'>
                        <span className='text-green-600 font-bold'>₹ {price}</span>
                        <div className='flex justify-center items-center gap-2 absolute right-8'>
                            <AiOutlineMinus onClick={() => qty > 1 ? dispatch(decrementQty({ id })) : (qty = 0)} className='border-2 text-gray-600 border-gray-600 hover:text-white hover:bg-green-600 *
            hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer'/>
                            <span>{qty}</span>
                            <AiOutlinePlus onClick={() => qty >= 1 ? dispatch(incrementQty({ id })) : (qty = 0)} className='border-2 text-gray-600 border-gray-600 hover:text-white hover:bg-green-600 *
            hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer'/>


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemCart;