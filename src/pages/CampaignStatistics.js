// CampaignStatistics.js
import React, { useEffect, useState } from 'react';
import { fetchCampaigns } from '../services/api';

const CampaignStatistics = () => {
  const [totalCampaigns, setTotalCampaigns] = useState(0);
  const [totalMessagesSent, setTotalMessagesSent] = useState(0);
  const [totalMessagesFailed, setTotalMessagesFailed] = useState(0);

  useEffect(() => {
    fetchCampaigns()
      .then(response => {
        const campaigns = response.data.campaigns;
        setTotalCampaigns(campaigns.length);
        setTotalMessagesSent(campaigns.reduce((sum, campaign) => sum + campaign.stats.messagesSent, 0));
        setTotalMessagesFailed(campaigns.reduce((sum, campaign) => sum + campaign.stats.messagesFailed, 0));
      })
      .catch(error => console.error('Error fetching campaign statistics:', error));
  }, []);

  return (
    <div>
      <h2>Campaign Statistics</h2>
      <p><strong>Total Campaigns:</strong> {totalCampaigns}</p>
      <p><strong>Total Messages Sent:</strong> {totalMessagesSent}</p>
      <p><strong>Total Messages Failed:</strong> {totalMessagesFailed}</p>
    </div>
  );
};

export default CampaignStatistics;