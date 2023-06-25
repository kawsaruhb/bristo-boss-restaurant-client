import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/menu-bg.jpg';
import desertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {

    const [menu] = useMenu();
    const salad = menu.filter(item => item.category === 'salad');
    const dessert = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const soup = menu.filter(item => item.category === 'soup');
    const offered = menu.filter(item => item.category === 'offered');

  return (
    <div className='mb-12'>
      <Helmet>
        <title>Bristo Boss | Menu</title>
      </Helmet>
      <Cover img={menuImg} title={'Our Menu'}></Cover>
      <SectionTitle subHeading="---Don't miss---" heading="TODAY'S OFFER"></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>
      <MenuCategory items={pizza} title={'pizza'} img={pizzaImg}></MenuCategory>
      <MenuCategory items={salad} title={'salad'} img={saladImg}></MenuCategory>
      <MenuCategory items={soup} title={'soup'} img={soupImg}></MenuCategory>
      <MenuCategory items={dessert} title={'dessert'} img={desertImg}></MenuCategory>
    </div>
  );
};

export default Menu;
