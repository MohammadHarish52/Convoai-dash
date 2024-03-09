// project import

import Navigation from './Navigation';
import SimpleBar from 'components/third-party/SimpleBar';

// ==============================|| DRAWER CONTENT ||============================== //

const DrawerContent = () => (
  <SimpleBar
    sx={{
      backgroundColor: '#1e1f29',
      '& .simplebar-content': {
        display: 'flex',
        flexDirection: 'column',

        height: '100%'
      }
    }}
  >
    <Navigation />
  </SimpleBar>
);

export default DrawerContent;
