import React from 'react';

const WelcomeBanner = () => {
  return (
    <div className="welcome-banner" style={{ width: '420px', height: '630px' }}>
      <h1>Welcome To India's First Creator's Marketplace</h1>
      <p>Create your first E-Store @ Zero Cost</p>
      <p>
        Empower your creativity with Createnary. Showcase, sell, and connect with a global audience
        effortlessly, turn your products into profits.
      </p>
      <button>Get Started</button>
    </div>
  );
};

export default WelcomeBanner;

import React from 'react';

const AudienceLinks = () => {
  return (
    <div className="audience-links">
      <p>
        <strong>Your audience wants links</strong> Make it easy for them by linking products to every post
        and video
      </p>
      <p>
        <strong>Your Rewards:</strong> 53,000 <span>Redeem Coins</span>
      </p>
      <p>
        Getting started with VerdQuery is easy.{' '}
        <a href="https://www.verdquery.com/signup" target="_blank" rel="noopener noreferrer">
          Try for free
        </a>
      </p>
    </div>
  );
};

export default AudienceLinks;

import React, { useState } from 'react';

const EstimateEarningCalculator = () => {
  const [followers, setFollowers] = useState(0);
  const [products, setProducts] = useState(0);

  const calculateEarnings = () => {
    const monthlyEarnings = 12000 * (followers / 10000);
    const yearlyEarnings = monthlyEarnings * 12 * products;

    return { monthlyEarnings, yearlyEarnings };
  };

  return (
    <div className="estimate-earning-calculator">
      <h3>ESTIMATE EARNING POTENTIAL</h3>
      <p>
        What kind of influencer are you? <br />
        Select influencer type?
      </p>
      <label htmlFor="followers">How many followers do you have?</label>
      <input
        type="number"
        id="followers"
        value={followers}
        onChange={(e) => setFollowers(parseInt(e.target.value))}
      />
      <p>SOOK</p>
      <p>
        Monthly Earning <strong>*{calculateEarnings().monthlyEarnings.toFixed(2)}</strong>
      </p>
      <p>
        How many products do you list monthly? <br />
        (Estimated based on 10,000 followers)
      </p>
      <label htmlFor="products">Update the number of products</label>
      <input
        type="number"
        id="products"
        value={products}
        onChange={(e) => setProducts(parseInt(e.target.value))}
      />
      <p>Yearly Earning <strong>*{calculateEarnings().yearlyEarnings.toFixed(2)}</strong></p>
    </div>
  );
};

export default EstimateEarningCalculator;

import React from 'react';

const FAQSection = () => {
  const faqItems = [
    {
      question: 'How much does it cost to set up a store?',
      answer: 'Setting up a store is free! You can start selling your digital products without any cost.'
    },
    {
      question: 'What kind of digital products can I sell?',
      answer: 'You can sell a wide variety of digital products, such as eBooks, online courses, digital art, software, and more.'
    },
    {
      question: 'Do I need technical skills to use the platform?',
      answer: 'No, not at all! Our platform is designed with user-friendliness in mind. You can easily navigate and set up your store without any technical expertise. It’s as simple as a few clicks to get started!'
    },
    {
      question: 'Is there a limit to the number of products I can list?',
      answer: 'No, there is no limit to the number of products you can list on our platform. Feel free to add as many products as you want.'
    },
    {
      question: 'How do I receive payments for my sales?',
      answer: 'We support multiple payment methods, including credit cards, debit cards, and PayPal. You can choose your preferred payment method in your account settings.'
    },
    {
      question: 'Can I sell internationally on this marketplace?',
      answer: 'Yes, you can sell your digital products to customers from all around the world. We handle all the currency conversions and taxes for you.'
    },
    {
      question: 'What support and resources are available for sellers?',
      answer: 'We offer comprehensive documentation, tutorials, and a dedicated support team to help you succeed on our platform. You can access these resources in our Help Center.'
    },
    {
      question: 'Is there a review process for uploaded products?',
      answer: 'Yes, all products uploaded to our platform go through a review process to ensure they meet our quality standards and comply with our terms of service.'
    }
  ];

  return (
    <div className="faq-section">
      <h2>FREQUENTLY ASKED QUESTIONS</h2>
      <p>Quick answers to questions you may have. Can't find what you're looking for? Check out our full documentation</p>
      <ul>
        {faqItems.map((item, index) => (
          <li key={index}>
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQSection;

import React from 'react';

const MarketingAddress = () => {
  return (
    <div className="marketing-address">
      <p>
        CREGTENGRY <br />
        Navigation <br />
        About Createnary <br />
        Contact Us <br />
        Refund <br />
        Newsletter <br />
        Terms & Conditions <br />
        Privacy & Policy <br />
        Contacts <br />
        Delhi, India
      </p>
      <p>
        <strong>Phone:</strong> +91 9876543210, +91 9999999999
      </p>
      <p>
        <strong>© Createnary 2024</strong>
      </p>
    </div>
  );
};

export default MarketingAddress;

import React from 'react';

const ShareSection = () => {
  return (
    <div className="share-section">
      <p>
        Share the holidays, stays and experiences with your <br />
        friends and family. You receive trending & curated
        Itineraries and Insider deals on Hotels & Flights to
        share
      </p>
      <div className="share-icons">
        <div className="icon-item">
          <i className="fa-solid fa-calendar-days"></i>
          <p>ACTIVITIES</p>
        </div>
        <div className="icon-item">
          <i className="fa-solid fa-list-ul"></i>
          <p>ITINERARIES</p>
        </div>
        <div className="icon-item">
          <i className="fa-solid fa-plane"></i>
          <p>FLIGHTS</p>
        </div>
        <div className="icon-item">
          <i className="fa-solid fa-building"></i>
          <p>STAYS</p>
        </div>
      </div>
      <button>SHARE</button>
      <p>SOCIAL MEDIA AND FRIENDS CIRCLE</p>
    </div>
  );
};

export default ShareSection;

import React from 'react';

const ShareSection = () => {
  return (
    <div className="share-section">
      <p>
        Share the holidays, stays and experiences with your <br />
        friends and family. You receive trending & curated
        Itineraries and Insider deals on Hotels & Flights to
        share
      </p>
      <div className="share-icons">
        <div className="icon-item">
          <i className="fa-solid fa-calendar-days"></i>
          <p>ACTIVITIES</p>
        </div>
        <div className="icon-item">
          <i className="fa-solid fa-list-ul"></i>
          <p>ITINERARIES</p>
        </div>
        <div className="icon-item">
          <i className="fa-solid fa-plane"></i>
          <p>FLIGHTS</p>
        </div>
        <div className="icon-item">
          <i className="fa-solid fa-building"></i>
          <p>STAYS</p>
        </div>
      </div>
      <button>SHARE</button>
      <p>SOCIAL MEDIA AND FRIENDS CIRCLE</p>
    </div>
  );
};

export default ShareSection;

import React from 'react';

const ShareSection = () => {
  return (
    <div className="share-section">
      <p>
        Share the holidays, stays and experiences with your <br />
        friends and family. You receive trending & curated
        Itineraries and Insider deals on Hotels & Flights to
        share
      </p>
      <div className="share-icons">
        <div className="icon-item">
          <i className="fa-solid fa-calendar-days"></i>
          <p>ACTIVITIES</p>
        </div>
        <div className="icon-item">
          <i className="fa-solid fa-list-ul"></i>
          <p>ITINERARIES</p>
        </div>
        <div className="icon-item">
          <i className="fa-solid fa-plane"></i>
          <p>FLIGHTS</p>
        </div>
        <div className="icon-item">
          <i className="fa-solid fa-building"></i>
          <p>STAYS</p>
        </div>
      </div>
      <button>SHARE</button>
      <p>SOCIAL MEDIA AND FRIENDS CIRCLE</p>
    </div>
  );
};

export default ShareSection;

import React from 'react';

const ShareSection = () => {
  return (
    <div className="share-section">
      <p>
        Share the holidays, stays and experiences with your <br />
        friends and family. You receive trending & curated
        Itineraries and Insider deals on Hotels & Flights to
        share
      </p>
      <div className="share-icons">
        <div className="icon-item">
          <i className="fa-solid fa-calendar-days"></i>
          <p>ACTIVITIES</p>
        </div>
        <div className="icon-item">
          <i className="fa-solid fa-list-ul"></i>
          <p>ITINERARIES</p>
        </div>
        <div className="icon-item">
          <i className="fa-solid fa-plane"></i>
          <p>FLIGHTS</p>
        </div>
        <div className="icon-item">
          <i className="fa-solid fa-building"></i>
          <p>STAYS</p>
        </div>
      </div>
      <button>SHARE</button>
      <p>SOCIAL MEDIA AND FRIENDS CIRCLE</p>
    </div>
  );
};

export default ShareSection;
