// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import BrandComparison from './pages/components/brandComparison';
import DealerPerformance from './pages/components/dealerPerformance';
import SegmentAnalysis from './pages/components/segmentAnalysis';
import ExtractionReport from './pages/extractionReport';
import ExtractionOverview from './pages/extractionOverview';

function App() {
    return (
        <Router>
            <Dashboard>
                <Routes>
                    <Route path="/brand-comparison" element={<BrandComparison />} />
                    <Route path="/dealer-performance" element={<DealerPerformance />} />
                    <Route path="/segment-analysis" element={<SegmentAnalysis />} />
                    <Route path="/extraction-report" element={<ExtractionReport />} />
                    <Route path="/extraction-overview" element={<ExtractionOverview /> } />
                    {/* Add more routes for other reports */}
                </Routes>
            </Dashboard>
        </Router>
    );
}

export default App;
