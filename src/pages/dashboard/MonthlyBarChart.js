import { useEffect, useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';

// third-party
import ReactApexChart from 'react-apexcharts';

// chart options
const barChartOptions = {
  chart: {
    type: 'bar',
    height: 365,
    toolbar: {
      show: false
    }
  },
  plotOptions: {
    bar: {
      columnWidth: '45%',
      borderRadius: 4
    }
  },
  dataLabels: {
    enabled: false
  },
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
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    }
  },
  yaxis: {
    categories: [0, 1027, 2054, 3081]
  },
  grid: {
    show: false
  }
};

// ==============================|| MONTHLY BAR CHART ||============================== //

const MonthlyBarChart = () => {
  const theme = useTheme();

  const { primary, secondary } = theme.palette.text;
  const info = theme.palette.info.light;

  const [series] = useState([
    {
      data: [
        2700, 2000, 400, 90, 2800, 3081, 3000, 2300, 2000, 400, 60, 2200, 2400, 2250, 2200, 1800, 357, 60, 1900, 2300, 2500, 2200, 1800,
        150, 90, 2200, 2800, 2800, 2300, 900
      ]
    }
  ]);

  const [options, setOptions] = useState(barChartOptions);

  useEffect(() => {
    setOptions((prevState) => ({
      ...prevState,
      colors: [info],
      xaxis: {
        labels: {
          style: {
            colors: [secondary, secondary, secondary, secondary, secondary, secondary, secondary]
          }
        }
      },
      tooltip: {
        theme: 'light'
      }
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [primary, info, secondary]);

  return (
    <div id="chart">
      <ReactApexChart options={options} series={series} type="bar" height={365} />
    </div>
  );
};

export default MonthlyBarChart;
