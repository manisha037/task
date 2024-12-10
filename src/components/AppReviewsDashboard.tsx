import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Box,
  TextField,
  Button,
  CircularProgress,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Alert,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

const API_BASE_URL = 'http://172.210.48.197:8000'; // Change this to your API URL

// Define types
interface AppSearchResult {
  appId: string;
  title: string;
  developer: string;
  icon: string;
}

interface Review {
  reviewId: string;
  userName: string;
  score: number;
  content: string;
  at: string;
  thumbsUpCount: number;
}

const AppReviewsDashboard: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchResults, setSearchResults] = useState<AppSearchResult[]>([]);
  const [selectedApp, setSelectedApp] = useState<string | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [isFetchingReviews, setIsFetchingReviews] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Search for apps
  const handleSearch = async () => {
    if (!searchTerm) return;

    setIsSearching(true);
    setError(null);

    try {
      const response = await fetch(`${API_BASE_URL}/search/${encodeURIComponent(searchTerm)}`);
      if (!response.ok) throw new Error('Search failed');

      const data: AppSearchResult[] = await response.json();
      setSearchResults(data);
    } catch (err) {
      setError('Failed to search apps. Please try again.');
    } finally {
      setIsSearching(false);
    }
  };

  // Start scraping reviews
  const handleAppSelect = async (appId: string) => {
    setSelectedApp(appId);
    setIsFetchingReviews(true);
    setError(null);


    try {
      // Start scraping
    
      const scrapeResponse = await fetch(`${API_BASE_URL}/scrape`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ appId }),
      });

      if (!scrapeResponse.ok) throw new Error('Failed to start scraping');

      const { jobId }: { jobId: string } = await scrapeResponse.json();

      // Poll for job completion
      const checkStatus = async () => {
        const statusResponse = await fetch(`${API_BASE_URL}/scrape/${jobId}/status`);
        const statusData: { status: string; error_message?: string } = await statusResponse.json();

        if (statusData.status === 'completed') {
          
            window.location.href = 'http://localhost:5173/prodai'; // Replace with your target localhost URL
          
          // Fetch reviews
          const reviewsResponse = await fetch(`${API_BASE_URL}/reviews/${appId}`);
          const reviewsData: Review[] = await reviewsResponse.json();
          setReviews(reviewsData);
          setIsFetchingReviews(false);
        } else if (statusData.status === 'failed') {
          throw new Error(statusData.error_message || 'Failed to fetch reviews');
        } else {
          // Continue polling
          setTimeout(checkStatus, 2000);
        }
      };

      checkStatus();
    } catch (err) {
      setError('Failed to fetch reviews. Please try again.');
      setIsFetchingReviews(false);
    }
  };

  return (
    <Box sx={{ p: 4, maxWidth: '1200px', mx: 'auto', spaceY: 4 }}>
      <Card sx={{ mb: 4 }}>
        <CardHeader>
          <Typography variant="h5">Google Play Store Reviews Dashboard</Typography>
        </CardHeader>
        <CardContent>
          <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
            <TextField
              label="Search for an app..."
              variant="outlined"
              fullWidth
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleSearch}
              disabled={isSearching || !searchTerm}
            >
              {isSearching ? <CircularProgress size={24} /> : 'Search'}
            </Button>
          </Box>

          {searchResults.length > 0 && (
            <FormControl fullWidth>
              <InputLabel className='bg-white'>Select an app...</InputLabel>
              <Select
                value={selectedApp || ''}
                onChange={(e) => handleAppSelect(e.target.value as string)}
              >
                {searchResults.map((app) => (
                  <MenuItem key={app.appId} value={app.appId}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <img src={app.icon} alt={app.title} style={{ width: 24, height: 24 }} />
                      <span>{app.title} - {app.developer}</span>
                    </Box>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}

          {error && <Alert severity="error" sx={{ mt: 4 }}>{error}</Alert>}
        </CardContent>
      </Card>

      {isFetchingReviews ? (
        <Card>
          <CardContent sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: 4 }}>
            <CircularProgress />
            <Typography sx={{ ml: 2 }}>Fetching reviews...</Typography>
          </CardContent>
        </Card>
      ) : reviews.length > 0 ? (
        <Card>
          <CardHeader>
            <Typography variant="h6">Reviews</Typography>
          </CardHeader>
          <CardContent>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>User</TableCell>
                    <TableCell>Rating</TableCell>
                    <TableCell>Review</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Likes</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {reviews.map((review) => (
                    <TableRow key={review.reviewId}>
                      <TableCell>{review.userName}</TableCell>
                      <TableCell>{review.score} ⭐</TableCell>
                      <TableCell>{review.content}</TableCell>
                      <TableCell>{new Date(review.at).toLocaleDateString()}</TableCell>
                      <TableCell>{review.thumbsUpCount}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      ) : null}
    </Box>
  );
};

export default AppReviewsDashboard;
