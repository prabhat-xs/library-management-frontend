import React from "react";
import Login from "../components/Login";
import Signup from "../components/Signup";

function Auth() {
  return (
    <>
      <Login />
      <Signup />
    </>
  );
}

export default Auth;

/*
import React, { useState } from 'react';

function TabComponent() {
  const [activeTab, setActiveTab] = useState(0); // Initial active tab index

  const tabs = [
    {
      title: 'Tab 1',
      content: 'This is the content for Tab 1.'
    },
    {
      title: 'Tab 2',
      content: 'This is the content for Tab 2.'
    },
    {
      title: 'Tab 3',
      content: 'This is the content for Tab 3.'
    }
  ];

  return (
    <div>
      <ul className="tab-list">
        {tabs.map((tab, index) => (
          <li
            key={index}
            className={activeTab === index ? 'active' : ''}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </li>
        ))}
      </ul>

      <div className="tab-content">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={activeTab === index ? 'active' : ''}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TabComponent;
*/
