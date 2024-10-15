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
    const [showShare, setShowShare] = useState(false);  // Add this state for the new toggle

    // Dropdown options
    const [segmentOptions, setSegmentOptions] = useState([]);
    const [dealerOptions, setDealerOptions] = useState([]);
    const [tseOptions, setTseOptions] = useState([]);

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
                params: { ...filters, valueVolume, page, limit: rowsPerPage, showShare: showShare ? 'true' : 'false' }
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

    // Heatmap function for applying colors based on row-wise values
    const getHeatmapColor = (value, minValue, maxValue) => {
        if (maxValue === minValue) return 'rgba(255, 255, 255, 0.5)';  // Avoid division by zero if values are all the same

        const normalizedValue = (value - minValue) / (maxValue - minValue);  // Normalize the value between 0 and 1

        // Progressive color stops for enhanced contrast:
        // 0-50%: Green -> Yellow
        // 50-100%: Yellow -> Red
        const r = normalizedValue < 0.5 ? Math.floor(normalizedValue * 510) : 255;  // Red intensifies in the second half
        const g = normalizedValue < 0.5 ? 255 : Math.floor(255 - (normalizedValue - 0.5) * 510);  // Green decreases after mid-range
        return `rgba(${r}, ${g}, 0, 0.6)`;  // Color gradient from green (low) to yellow (mid) to red (high)
    };

    // Function to handle rank coloring
    const getRankColor = (rank) => {
        if (rank === 1) return 'rgba(255, 8, 8, 0.6)'; // red for 1
        if (rank === 2) return 'rgba(255, 165, 0, 0.6)';   // orange for rank 2
        if (rank === 3) return 'rgba(255, 255, 102, 0.6)';  // Light yellow for rank 3
        return 'rgba(102, 255, 10, 0.5)';                   // Light green for other ranks
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

                {/* Show share toggle */}
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
                    <Table stickyHeader className="scrollable-table" style={{backgroundColor : '#F0EADE'}}>
                        <TableHead>
                            <TableRow className="sticky-header">
                                {columns.map((column, index) => (
                                    <TableCell key={index} style={{ fontWeight: 'bold', backgroundColor: '#F0EADE' }}>{column}</TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row, index) => {
                                // Find the min and max values for this row (excluding Rank)
                                const rowValues = columns
                                    .filter(col => col !== 'Price Class' && col !== 'Rank of Samsung')
                                    .map(col => row[col]);
                                const minValue = Math.min(...rowValues);
                                const maxValue = Math.max(...rowValues);

                                return (
                                    <TableRow key={index}>
                                        {columns.map((col, i) => (
                                            <TableCell
                                                key={i}
                                                style={{
                                                    fontWeight: col === 'Price Class' ? 'bold' : 'normal',  // Bold for "Price Class" column
                                                    backgroundColor: col === 'Rank of Samsung'
                                                        ? getRankColor(row[col])
                                                        : getHeatmapColor(row[col], minValue, maxValue)
                                                }}
                                            >
                                                {typeof row[col] === 'number' ? formatNumberIndian(row[col]) : row[col]}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                );
                            })}
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
