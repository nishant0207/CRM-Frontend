import React, { useEffect, useState } from 'react';
import { fetchCampaigns, sendMessages } from '../services/api';
import CreateCampaign from './CreateCampaign';
import { Link } from 'react-router-dom'; // Add Link import here

const CampaignDashboard = () => {
  const [campaigns, setCampaigns] = useState([]);

  const loadCampaigns = () => {
    fetchCampaigns()
      .then(response => {
        console.log(response.data);  // Log the data for debugging
        setCampaigns(response.data.campaigns);
      })
      .catch(error => console.error('Error fetching campaigns:', error));
  };

  useEffect(() => {
    loadCampaigns(); // Load campaigns on component mount
  }, []);

  const handleSendMessages = (campaignId) => {
    sendMessages(campaignId)
      .then(response => {
        alert(response.data.message);
        loadCampaigns();  // Refresh data after sending messages without full page reload
      })
      .catch(error => console.error('Error sending messages:', error));
  };

  return (
    <div>
      <h1>Campaign Dashboard</h1>
      
      {/* Link to the Campaign Statistics page */}
      <Link to="/statistics">View Campaign Statistics</Link>
      
      {/* Campaign Creation Form */}
      <CreateCampaign onCampaignCreated={loadCampaigns} />
      
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Created At</th>
            <th>Audience Size</th>
            <th>Messages Sent</th>
            <th>Messages Failed</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {campaigns.map(campaign => (
            <tr key={campaign._id}>
              <td>{campaign.name}</td>
              <td>{new Date(campaign.createdAt).toLocaleString()}</td>
              <td>{campaign.stats.audienceSize}</td>
              <td>{campaign.stats.messagesSent}</td>
              <td>{campaign.stats.messagesFailed}</td>
              <td>
                <button onClick={() => handleSendMessages(campaign._id)}>
                  Send Messages
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CampaignDashboard;