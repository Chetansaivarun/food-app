import { useState } from 'react';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import Header from '../../components/Header/Header';
import './Home.css';
import Fooddisplay from '../../components/Fooddisplay/Fooddisplay';
import AppDownload from '../../components/AppDownload/AppDownload';

const Home = () => {
  const[category,scategory]=useState('All');
  return (
    <div>
      <Header/>
      <ExploreMenu category={category} scategory={scategory}/>
      <Fooddisplay category={category}/>
      <AppDownload/>
    </div>
  )
}

export default Home
