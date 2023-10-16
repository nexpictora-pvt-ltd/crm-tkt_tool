import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

function createData(
  Order_ID: number,
  Order: string,
  Customer: string,
  Status: string,
  Order_Time: string
) {
  return {
    Order_ID,
    Order,
    Customer,
    Status,
    Order_Time,
    Services: 'Service 1',
    history: [
      {
        date: '2020-01-05',
        services: 'Service 1',
        amount: 3,
      },
      {
        date: '2020-01-02',
        services: 'Service 2',
        amount: 1,
      },
    ],
  };
}

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  const [status, setStatus] = React.useState(row.Status);

  const handleStatusChange = (event:any) => {
    setStatus(event.target.value);
  };

  const getStatusColor = (status:any) => {
    switch (status) {
      case 'Accepted':
        return 'green';
      case 'Rejected':
        return 'red';
      case 'Shipped':
        return 'blue';
      case 'Delivered':
        return 'black';
      default:
        return 'black';
    }
  };

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell>{row.Order_ID}</TableCell>
        <TableCell component="th" scope="row">
          {row.Order}
        </TableCell>
        <TableCell>{row.Customer}</TableCell>
        <TableCell>
          <Select
            value={status}
            onChange={handleStatusChange}
            style={{ color: getStatusColor(status) }}
          >
            <MenuItem value="Accepted" style={{ color: 'green' }}>
              Accepted
            </MenuItem>
            <MenuItem value="Rejected" style={{ color: 'red' }}>
              Rejected
            </MenuItem>
            <MenuItem value="Shipped" style={{ color: 'blue' }}>
              Shipped
            </MenuItem>
            <MenuItem value="Delivered" style={{ color: 'black' }}>
              Delivered
            </MenuItem>
          </Select>
        </TableCell>
        <TableCell>{row.Order_Time}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Services</TableCell>
                    <TableCell align="right">Amount</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.services}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const rows = [
  createData(1, 'Order 1', 'Customer 1', 'Accepted', '2022-01-10'),
  createData(2, 'Order 2', 'Customer 2', 'Rejected', '2022-02-15'),
  createData(3, 'Order 3', 'Customer 3', 'Shipped', '2022-03-20'),
  createData(4, 'Order 4', 'Customer 4', 'Delivered', '2022-04-25'),
  createData(5, 'Order 5', 'Customer 5', 'Shipped', '2022-05-30'),
];

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Order ID</TableCell>
            <TableCell>Order</TableCell>
            <TableCell>Customer</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Order Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.Order_ID} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
