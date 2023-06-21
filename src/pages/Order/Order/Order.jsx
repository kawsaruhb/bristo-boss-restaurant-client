import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import orderImg from '../../../assets/shop/order.jpg';
import useMenu from '../../../hooks/useMenu';
import Cover from '../../Shared/Cover/Cover';
import OrderTab from '../OrderTab/OrderTab';

const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const [menu] = useMenu();
  const salad = menu.filter((item) => item.category === 'salad');
  const dessert = menu.filter((item) => item.category === 'dessert');
  const pizza = menu.filter((item) => item.category === 'pizza');
  const soup = menu.filter((item) => item.category === 'soup');
  const drinks = menu.filter((item) => item.category === 'drinks');

  return (
    <div>
      <Helmet>
        <title>Bristo Boss | Order</title>
      </Helmet>
      <Cover img={orderImg} title={'Order Here'}></Cover>

      <Tabs
        className={'mt-12 mb-12'}
        selectedIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
      >
        <TabList
          className={'font-bold text-center bg-red-200 rounded-md underline'}
        >
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
        </TabList>

        <TabPanel>
          <OrderTab items={salad}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={pizza}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={soup}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={dessert}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={drinks}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
