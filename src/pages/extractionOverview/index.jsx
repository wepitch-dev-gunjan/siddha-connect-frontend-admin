import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Select, MenuItem, InputLabel, FormControl, CircularProgress, Table, TableBody, TableCell, TableHead, TableRow, Paper, Pagination, Button, Chip, OutlinedInput, TextField, Switch, FormControlLabel } from '@mui/material';
import config from '../../config';
import './style.scss';  // Include the custom CSS

const { backend_url } = config;

function ExtractionOverview() {
    const [data, setData] = useState([]);  // Holds the table data
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Pagination
    const [page, setPage] = useState(1);
    const rowsPerPage = 100;
    const [totalRecords, setTotalRecords] = useState(0);

    // Filters
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [segment, setSegment] = useState([]); 
    const [dealerCode, setDealerCode] = useState([]);
    const [tse, setTse] = useState([]);
    const [valueToggle, setValueToggle] = useState(true); // Value or Volume

    // Dropdown options
    const [segmentOptions, setSegmentOptions] = useState([]);
    const [dealerOptions, setDealerOptions] = useState([]);
    const [tseOptions, setTseOptions] = useState([]);

    const [showShare, setShowShare] = useState(false);  // Add this state for the new toggle


    // Fetch unique values for segments, dealer codes, and TSEs
    useEffect(() => {
        const fetchDropdownData = async () => {
            try {
                const segmentResponse = await axios.get(`${backend_url}/extraction/unique-column-values?column=productId.Segment`);
                setSegmentOptions(segmentResponse.data.uniqueValues || []);

                const dealerResponse = await axios.get(`${backend_url}/extraction/unique-column-values?column=dealerCode`);
                setDealerOptions(dealerResponse.data.uniqueValues || []);

                const tseResponse = await axios.get(`${backend_url}/extraction/unique-column-values?column=uploadedBy`);
                setTseOptions(tseResponse.data.uniqueValues || []);
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
            // Map valueToggle to 'value' or 'volume'
            const valueVolume = valueToggle ? 'value' : 'volume';

            const response = await axios.get(`${backend_url}/extraction/overview-for-admins`, { 
                params: { ...filters, valueVolume, page, limit: rowsPerPage, showShare: showShare ? 'true' : 'false' }  // Pass 'valueVolume' instead of 'valueToggle'
            });

            setData(response.data.data || []); 
            setTotalRecords(response.data.totalRecords || 0); 
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
        if (segment.length) filters.segment = segment; 
        if (dealerCode.length) filters.dealerCode = dealerCode; 
        if (tse.length) filters.tse = tse;
        filters.valueToggle = valueToggle; 
        filters.showShare = showShare;
    
        fetchData(filters);
    }, [startDate, endDate, segment, dealerCode, tse, page, valueToggle, showShare]);

    // Clear filters and fetch all data
    const handleClearFilters = () => {
        setStartDate('');
        setEndDate('');
        setSegment([]);
        setDealerCode([]);
        setTse([]);
        setPage(1);
        fetchData();
    };

    // Handle pagination change
    const handlePageChange = (event, value) => {
        setPage(value);
    };

    // Function to format numbers in the Indian system
    const formatNumberIndian = (num) => {
        return num.toLocaleString('en-IN');
    };

    // Ensure data is not empty and properly formatted
    const columns = ['Price Class', 'Samsung', 'Vivo', 'Oppo', 'Xiaomi', 'Apple', 'One Plus', 'Real Me', 'Motorola', 'Others', 'Rank of Samsung'];
    const rows = Array.isArray(data) && data.length > 0 ? data : [];

    return (
        <div>
            <h2>Extraction Overview</h2>

            {/* Filters Section */}
            <div style={{ marginBottom: '20px', marginTop: '40px' }}>
                <TextField
                    label="Start Date"
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    InputLabelProps={{ shrink: true }}
                    style={{ marginRight: '20px' }}
                />
                <TextField
                    label="End Date"
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    InputLabelProps={{ shrink: true }}
                    style={{ marginRight: '20px' }}
                />

                {/* Multi-Select for Segment */}
                <FormControl style={{ marginRight: '20px', width: '150px' }}>
                    <InputLabel>Segment</InputLabel>
                    <Select
                        multiple
                        value={segment}
                        onChange={(e) => setSegment(typeof e.target.value === 'string' ? e.target.value.split(',') : e.target.value)}
                        input={<OutlinedInput label="Segment" />}
                        renderValue={(selected) => selected.length > 0 ? (
                            <div>{selected.map((value) => <Chip key={value} label={value} />)}</div>
                        ) : <em>None</em>}
                    >
                        {segmentOptions.map((option) => (
                            <MenuItem key={option} value={option}>{option}</MenuItem>
                        ))}
                    </Select>
                </FormControl>

                {/* Multi-Select for Dealer Code */}
                <FormControl style={{ marginRight: '20px', width: '150px' }}>
                    <InputLabel>Dealer Code</InputLabel>
                    <Select
                        multiple
                        value={dealerCode}
                        onChange={(e) => setDealerCode(typeof e.target.value === 'string' ? e.target.value.split(',') : e.target.value)}
                        input={<OutlinedInput label="Dealer Code" />}
                        renderValue={(selected) => selected.length > 0 ? (
                            <div>{selected.map((value) => <Chip key={value} label={value} />)}</div>
                        ) : <em>None</em>}
                    >
                        {dealerOptions.map((option) => (
                            <MenuItem key={option} value={option}>{option}</MenuItem>
                        ))}
                    </Select>
                </FormControl>

                {/* Multi-Select for TSE */}
                <FormControl style={{ marginRight: '20px', width: '150px' }}>
                    <InputLabel>TSE</InputLabel>
                    <Select
                        multiple
                        value={tse}
                        onChange={(e) => setTse(typeof e.target.value === 'string' ? e.target.value.split(',') : e.target.value)}
                        input={<OutlinedInput label="TSE" />}
                        renderValue={(selected) => selected.length > 0 ? (
                            <div>{selected.map((value) => <Chip key={value} label={value} />)}</div>
                        ) : <em>None</em>}
                    >
                        {tseOptions.map((option) => (
                            <MenuItem key={option} value={option}>{option}</MenuItem>
                        ))}
                    </Select>
                </FormControl>

                {/* Value/Volume Toggle */}
                <FormControlLabel
                    control={<Switch checked={valueToggle} onChange={() => setValueToggle(!valueToggle)} />}
                    label={valueToggle ? 'Value' : 'Volume'}
                />

                {/* Show share toggle  */}
                <FormControlLabel
                    control={<Switch checked={showShare} onChange={() => setShowShare(!showShare)} />}
                    label={showShare ? 'Show Actual Values' : 'Show Shares (%)'}
                    style={{ marginRight: '20px' }}
                />

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
                                        <TableCell key={i}>
                                            {typeof row[col] === 'number' ? formatNumberIndian(row[col]) : row[col]}
                                        </TableCell>
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
                    count={Math.ceil(totalRecords / rowsPerPage)}
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

export default ExtractionOverview;
