import React from 'react';

import AddIcon from '@mui/icons-material/Add';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import VoicemailIcon from '@mui/icons-material/Voicemail';

const headerItems = [
  {
    id: '1',
    text: 'Filter',
    icon: <AddIcon sx={{ color: '#3099db', fontSize: '12px' }} />
  },
  {
    id: '2',
    text: 'Template',
    subtext: 'No template',
    icon: <FactCheckOutlinedIcon sx={{ fontSize: '12px' }} />
  },
  {
    id: '3',
    text: 'Search User or team',
    icon: <PeopleOutlineIcon sx={{ fontSize: '12px' }} />
  },
  {
    id: '4',
    text: 'Last 30 days | Daily',
    icon: <CalendarTodayIcon sx={{ fontSize: '12px' }} />
  },
  {
    id: '5',
    text: 'Duration',
    subtext: 'All',
    icon: <AccessTimeIcon sx={{ fontSize: '12px' }} />
  },
  {
    id: '6',
    text: 'Exclude Voicemail',
    subtext: 'Yes',
    icon: <VoicemailIcon sx={{ fontSize: '12px' }} />
  }
];

const TopBar = () => {
  return (
    <ul className="list" style={{ display: 'flex', listStyleType: 'none', gap: '16px', fontSize: '12px', flexWrap: 'wrap' }}>
      {headerItems.map((list) => (
        <li key={list.id} style={{ display: 'flex', alignItems: 'end', justifyContent: 'center' }}>
          <p style={{ marginRight: '4px' }}>{list.icon}</p>
          {list.text && <p style={{ color: '#8c8c8c' }}> {list.text} </p>}
          {list.subtext && <p>: {list.subtext}</p>}
        </li>
      ))}
    </ul>
  );
};

export default TopBar;
