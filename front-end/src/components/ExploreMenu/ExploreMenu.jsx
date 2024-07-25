import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';

const ExploreMenu = ({category,scategory}) => {
  return (
    <div className='exploremenu' id='exploremenu'>
        <h1>Explore our Menu</h1>
        <p className="explorememutext">Choose from a diverse menu featuting a delectable array of dishes. Our missin is to satisfy your cravings and elevate your dining experience ,one deliciouse meal at a time.</p>
        <div className="exploremenulist">
            {
                menu_list.map((each,index)=>{
                    return (
                        <div onClick={()=>scategory(prev=>prev===each.menu_name?"All":each.menu_name)} key={index} className='exploremenulistitem'>
                            <img className={category===each.menu_name?"active":""} src={each.menu_image} alt=""/>
                            <p>{each.menu_name}</p>
                        </div>
                    )
                })
            }
        </div>
        <hr></hr>
    </div>
  )
}

export default ExploreMenu
