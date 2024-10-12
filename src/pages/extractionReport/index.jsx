import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { TextField, MenuItem, CircularProgress, Table, TableBody, TableCell, TableHead, TableRow, Paper, Pagination, Button } from '@mui/material';
import config from '../../config';
import './style.scss';  // Include the custom CSS

const { backend_url } = config;

function ExtractionReport() {
    const [data, setData] = useState([]);  // Holds the table data
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Pagination
    const [page, setPage] = useState(1); // Current page
    const rowsPerPage = 100; // Show 100 rows per page
    const [totalRecords, setTotalRecords] = useState(0); // Total number of records for pagination

    // Filters
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [brand, setBrand] = useState('');
    const [segment, setSegment] = useState('');
    const [dealerCode, setDealerCode] = useState('');

    // Dropdown options
    const [brandOptions, setBrandOptions] = useState([]);
    const [segmentOptions, setSegmentOptions] = useState([]);
    const [dealerOptions, setDealerOptions] = useState([]);

    // Fetch unique brands, segments, and dealer codes for the dropdowns
    useEffect(() => {
        const fetchDropdownData = async () => {
            try {
                const brandResponse = await axios.get(`${backend_url}/extraction/unique-column-values?column=productId.Brand`);
                setBrandOptions(brandResponse.data.uniqueValues || []);

                const segmentResponse = await axios.get(`${backend_url}/extraction/unique-column-values?column=productId.Segment`);
                setSegmentOptions(segmentResponse.data.uniqueValues || []);

                const dealerResponse = await axios.get(`${backend_url}/extraction/unique-column-values?column=dealerCode`);
                setDealerOptions(dealerResponse.data.uniqueValues || []);
            } catch (err) {
                console.error('Error fetching dropdown data:', err);
            }
        };

        fetchDropdownData();
    }, []);

    // Fetch all data or filtered data with pagination
    const fetchData = async (filters = {}) => {
        setLoading(true);
        setError(null);

        try {
            const response = await axios.get(`${backend_url}/extraction/filtered-data`, { 
                params: { ...filters, page, limit: rowsPerPage } 
            });

            setData(response.data.data || []); // Set the fetched data
            setTotalRecords(response.data.totalRecords || 0); // Set total number of records
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    // Fetch data when filters change
    useEffect(() => {
        const filters = {};
        if (startDate) filters.startDate = startDate;
        if (endDate) filters.endDate = endDate;
        if (brand) filters.brand = brand;
        if (segment) filters.segment = segment;
        if (dealerCode) filters.dealerCode = dealerCode;

        fetchData(filters);  // Fetch data based on current filters
    }, [startDate, endDate, brand, segment, dealerCode, page]); // Dependencies include all filters and page

    // Clear filters and fetch all data
    const handleClearFilters = () => {
        setStartDate('');
        setEndDate('');
        setBrand('');
        setSegment('');
        setDealerCode('');
        setPage(1); // Reset to first page
        fetchData();  // Fetch all data when filters are cleared
    };

    // Handle pagination change
    const handlePageChange = (event, value) => {
        setPage(value);
    };

    // Ensure data is not empty and is properly formatted
    const columns = Array.isArray(data) && data.length > 0 ? data[0] : []; // The first row contains column names
    const rows = Array.isArray(data) && data.length > 1 ? data.slice(1) : []; // Subsequent rows contain data

    return (
        <div>
            <h2>Extraction Report</h2>

            {/* Filters Section */}
            <div style={{ marginBottom: '20px' }}>
                <TextField
                    label="Start Date"
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)} // Fetch data when startDate changes
                    InputLabelProps={{
                        shrink: true,
                    }}
                    style={{ marginRight: '20px' }}
                />
                <TextField
                    label="End Date"
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)} // Fetch data when endDate changes
                    InputLabelProps={{
                        shrink: true,
                    }}
                    style={{ marginRight: '20px' }}
                />
                <TextField
                    label="Brand"
                    select
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)} // Fetch data when brand changes
                    style={{ marginRight: '20px', width: '150px' }}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {brandOptions.map((option) => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    label="Segment"
                    select
                    value={segment}
                    onChange={(e) => setSegment(e.target.value)} // Fetch data when segment changes
                    style={{ marginRight: '20px', width: '150px' }}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {segmentOptions.map((option) => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    label="Dealer Code"
                    select
                    value={dealerCode}
                    onChange={(e) => setDealerCode(e.target.value)} // Fetch data when dealerCode changes
                    style={{ marginRight: '20px', width: '150px' }}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {dealerOptions.map((option) => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </TextField>

                <Button variant="outlined" color="secondary" onClick={handleClearFilters} style={{ marginLeft: '10px' }}>
                    Clear Filters
                </Button>
            </div>

            {/* Loading and Error State */}
            {loading && <CircularProgress />}
            {error && <div>Error: {error}</div>}

            {/* Data Table */}
            {!loading && rows.length > 0 && (
                <Paper>
                    <Table stickyHeader className="scrollable-table">
                        <TableHead>
                            <TableRow className="sticky-header">
                                {columns.map((column, index) => (
                                    <TableCell key={index}>{column}</TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row, index) => (
                                <TableRow key={index}>
                                    {columns.map((col, i) => (
                                        <TableCell key={i}>{row[col]}</TableCell> // Access row object by column name
                                    ))}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
            )}

            {/* Pagination Controls */}
            {!loading && totalRecords > 0 && (
                <Pagination
                    count={Math.ceil(totalRecords / rowsPerPage)} // Calculate number of pages based on total records
                    page={page}
                    onChange={handlePageChange}
                    variant="outlined"
                    shape="rounded"
                    style={{ marginTop: '20px', justifyContent: 'center', display: 'flex' }}
                />
            )}

            {!loading && rows.length === 0 && <div>No data available for the selected filters.</div>}
        </div>
    );
}

export default ExtractionReport;
