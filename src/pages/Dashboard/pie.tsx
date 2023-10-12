import React from 'react'
import { PieChart, pieArcClasses } from '@mui/x-charts/PieChart';
import Box from '@mui/material/Box';
const data = [
    { id: 0, value: 10, label: 'series A',color:"#A4BFF4" },
    { id: 1, value: 15, label: 'series B',color:"#D36A2F" },
    { id: 2, value: 20, label: 'series C',color:"rgba(65,202,210,1.00)" },
  ];
const Pie = () => {
  return (
    <Box sx={{height:'430px',backgroundColor:"#EFEFEF",borderRadius:"15px"}}>
      <PieChart
      series={[
        {
          
          highlightScope: { faded: 'global', highlighted: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30 },data,
        },
      ]}
      sx={{
        [`& .${pieArcClasses.faded}`]: {
          fill: 'gray',height:'100%'
        },
      }}
      
    />
    </Box>
  )
}

export default Pie


// import React from 'react';
// import { PieChart, pieArcClasses } from '@mui/x-charts/PieChart';
// import Box from '@mui/material/Box';

// const data = [
//   { id: 0, value: 10, label: 'series A', color: "#A4BFF4" },
//   { id: 1, value: 15, label: 'series B', color: "#D36A2F" },
//   { id: 2, value: 20, label: 'series C', color: "rgba(65,202,210,1.00)" },
// ];

// const Pie = () => {
//   return (
//     <Box sx={{ height: '430px', backgroundColor: "#EFEFEF", borderRadius: "15px", position: 'relative' }}>
//       <PieChart
//         series={[
//           {
//             highlightScope: { faded: 'global', highlighted: 'item' },
//             faded: { innerRadius: 30, additionalRadius: -30 },
//             data: data,
//           },
//         ]}
//         sx={{
//           [`& .${pieArcClasses.faded}`]: {
//             fill: 'gray',
//           },
//         }}
//       />
//       <div style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
//         {data.map((item) => (
//           <div key={item.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
//             <div style={{ backgroundColor: item.color, width: '20px', height: '20px', marginRight: '5px' }}></div>
//             <div>{item.label}</div>
//           </div>
//         ))}
//       </div>
//     </Box>
//   );
// };

// export default Pie;
