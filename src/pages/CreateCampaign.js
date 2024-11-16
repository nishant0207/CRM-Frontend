// CreateCampaign.js
import React, { useState } from 'react';
import { createCampaign } from '../services/api';

const CreateCampaign = ({ onCampaignCreated }) => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [spending, setSpending] = useState('');
  const [visits, setVisits] = useState('');
  const [lastVisit, setLastVisit] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const conditions = {};
    if (spending) conditions.spending = Number(spending);
    if (visits) conditions.visits = Number(visits);
    if (lastVisit) conditions.lastVisit = Number(lastVisit);
  
    const campaignData = {
      name,
      message,
      conditions,
    };
  
    try {
      const response = await createCampaign(campaignData);
      console.log('Campaign Created:', response.data); // Debug success
      alert('Campaign created successfully');
      onCampaignCreated();
    } catch (error) {
      console.error('Error creating campaign:', error.response || error.message); // Debug error
      if (error.response) {
        console.error('Response Status:', error.response.status);
        console.error('Response Data:', error.response.data);
      }
      alert('Failed to create campaign');
    }
  };

  return (
    <div>
      <h2>Create New Campaign</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Campaign Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Message:</label>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Total Spending (Threshold):</label>
          <input
            type="number"
            value={spending}
            onChange={(e) => setSpending(e.target.value)}
          />
        </div>
        <div>
          <label>Visits (Threshold):</label>
          <input
            type="number"
            value={visits}
            onChange={(e) => setVisits(e.target.value)}
          />
        </div>
        <div>
          <label>Last Visit (Months Ago):</label>
          <input
            type="number"
            value={lastVisit}
            onChange={(e) => setLastVisit(e.target.value)}
          />
        </div>
        <button type="submit">Create Campaign</button>
      </form>
    </div>
  );
};

export default CreateCampaign;