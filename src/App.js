// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Use Routes instead of Switch
import CampaignDashboard from './pages/CampaignDashboard';
import CampaignStatistics from './pages/CampaignStatistics';
import Login from './components/Login';

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div className="App">
        {user ? (
          <Routes> {/* Replace Switch with Routes */}
            <Route path="/" element={<CampaignDashboard />} />
            <Route path="/statistics" element={<CampaignStatistics />} />
          </Routes>
        ) : (
          <Login onLogin={setUser} />
        )}
      </div>
    </Router>
  );
}

export default App;