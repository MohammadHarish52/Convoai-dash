import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';

// third-party
import ReactApexChart from 'react-apexcharts';

// chart options
const areaChartOptions = {
  chart: {
    height: 450,
    type: 'area',
    legend: { show: true },
    toolbar: {
      show: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth',
    width: 2
  },
  grid: {
    strokeDashArray: 0
  }
};

// ==============================|| INCOME AREA CHART ||============================== //

const IncomeAreaChart = ({ slot }) => {
  const theme = useTheme();

  const { primary, secondary } = theme.palette.text;
  const line = theme.palette.divider;

  const [options, setOptions] = useState(areaChartOptions);

  useEffect(() => {
    setOptions((prevState) => ({
      ...prevState,
      colors: [theme.palette.primary.main, theme.palette.primary[700]],
      xaxis: {
        categories: [
          '',
          '',
          '',
          '02/4',
          '',
          '',
          '',
          '',
          '',
          '',
          '02/11',
          '',
          '',
          '',
          '',
          '',
          '',
          '02/18',
          '',
          '',
          '',
          '',
          '',
          '',
          '2/25',
          '',
          '',
          '',
          '',
          ''
        ],

        labels: {
          style: {
            colors: [
              secondary,
              secondary,
              secondary,
              secondary,
              secondary,
              secondary,
              secondary,
              secondary,
              secondary,
              secondary,
              secondary,
              secondary
            ]
          }
        },
        axisBorder: {
          show: true,
          color: line
        },
        tickAmount: slot === 'month' ? 11 : 7
      },
      yaxis: {
        categories: [0, 3, 6, 9, 12, 15, 18, 21],
        min: 0,
        max: 21,
        labels: {
          style: {
            colors: [secondary]
          }
        }
      },
      grid: {
        show: false
      },
      tooltip: {
        theme: 'light'
      }
    }));
  }, [primary, secondary, line, theme, slot]);

  const [series, setSeries] = useState([
    {
      name: 'Per conversation',
      data: [13, 13, 14, 13, 12, 13, 12, 12, 11, 17, 12, 13, 13, 14, 12, 14, 12, 13, 13, 13, 13, 11, 10, 9, 12, 13, 11, 12, 12, 12]
    }
  ]);

  useEffect(() => {
    setSeries([
      {
        name: 'Per  conversation',
        data: [13, 13, 14, 13, 12, 13, 12, 12, 11, 17, 12, 13, 13, 14, 12, 14, 12, 13, 13, 13, 13, 11, 10, 9, 12, 13, 11, 12, 12, 12]
      }
    ]);
  }, []);

  return <ReactApexChart options={options} series={series} type="area" height={450} />;
};

IncomeAreaChart.propTypes = {
  slot: PropTypes.string
};

export default IncomeAreaChart;
