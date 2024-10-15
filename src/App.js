// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '../src/context/AuthContext'; // Import the Auth context
import Dashboard from './pages/dashboard';
import BrandComparison from './pages/components/brandComparison';
import DealerPerformance from './pages/components/dealerPerformance';
import SegmentAnalysis from './pages/components/segmentAnalysis';
import ExtractionReport from './pages/extractionReport';
import ExtractionOverview from './pages/extractionOverview';
import Login from './pages/login';
import PrivateRoute from './pages/components/privateRoute'; // Import the PrivateRoute component
import Logout from './pages/logout';

function App() {
    return (
        <AuthProvider>
            <Router>
                <Dashboard>
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        
                        {/* Protect these routes */}
                        <Route path="/brand-comparison" element={<PrivateRoute element={BrandComparison} />} />
                        <Route path="/dealer-performance" element={<PrivateRoute element={DealerPerformance} />} />
                        <Route path="/segment-analysis" element={<PrivateRoute element={SegmentAnalysis} />} />
                        <Route path="/extraction-report" element={<PrivateRoute element={ExtractionReport} />} />
                        <Route path="/extraction-overview" element={<PrivateRoute element={ExtractionOverview} />} />

                        <Route path="/logout" element={<Logout />} />
                    </Routes>
                </Dashboard>
            </Router>
        </AuthProvider>
    );
}

export default App;
