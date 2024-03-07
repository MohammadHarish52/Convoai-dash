import { Box, Grid, Stack, Typography } from '@mui/material';

// project import

import IncomeAreaChart from './IncomeAreaChart';
import MonthlyBarChart from './MonthlyBarChart';

import MainCard from 'components/MainCard';

// ==============================|| DASHBOARD - DEFAULT ||============================== //

const DashboardDefault = () => {
  // const [value, setValue] = useState('today');
  // const [slot, setSlot] = useState('week');

  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      <Grid item xs={12} md={7} lg={7}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item />
        </Grid>
        <MainCard sx={{ mt: 1.5 }} content={false}>
          <Box sx={{ p: 3, pb: 0 }}>
            <Stack spacing={2}>
              <Typography variant="h6" color="textSecondary">
                Conversation Volume
              </Typography>
              <Typography variant="h3">52,983</Typography>
            </Stack>
          </Box>
          <MonthlyBarChart />
        </MainCard>
      </Grid>
      <Grid item xs={12} md={5} lg={5}>
        <Grid container alignItems="center" justifyContent="space-between"></Grid>
        <MainCard content={false} sx={{ mt: 1.5 }}>
          <Box sx={{ pt: 1, pr: 2, p: 3, pb: 0 }}>
            <Stack spacing={2}>
              <Typography variant="h6" color="textSecondary">
                Average Handle Time
              </Typography>
              <Typography variant="h3">13m 19s</Typography>
            </Stack>
            <IncomeAreaChart />
          </Box>
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default DashboardDefault;
