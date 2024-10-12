// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import BrandComparison from './pages/components/brandComparison';
import DealerPerformance from './pages/components/dealerPerformance';
import SegmentAnalysis from './pages/components/segmentAnalysis';

function App() {
    return (
        <Router>
            <Dashboard>
                <Routes>
                    <Route path="/brand-comparison" element={<BrandComparison />} />
                    <Route path="/dealer-performance" element={<DealerPerformance />} />
                    <Route path="/segment-analysis" element={<SegmentAnalysis />} />
                    {/* Add more routes for other reports */}
                </Routes>
            </Dashboard>
        </Router>
    );
}

export default App;
