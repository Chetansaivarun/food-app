import { useContext } from 'react';
import './Fooddisplay.css';
import { Storecontext } from '../../context/Storecontext';
import Fooditem from '../Fooditem/Fooditem';

const Fooddisplay = ({category}) => {
    const{food_list}=useContext(Storecontext)
  return (
    <div className='food-display' id='food-display'>
        <h2>Top dishes near you.</h2>
        <div className="food-display-list">
            {food_list.map((each,index)=>{
              if (category==="All" || category===each.category) {
                return <Fooditem key={index} id={each._id} name={each.name} description={each.description} price={each.price} image={each.image} />
              }
            })}
        </div>
    </div>
  )
}

export default Fooddisplay
