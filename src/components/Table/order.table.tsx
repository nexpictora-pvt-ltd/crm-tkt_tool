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
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const capsuleStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'rgba(200, 200, 200, 0.3)',
  borderRadius: '30px',
  width: '120px',
  height: '35px',
  border: 'none',
};

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
    Status: 'No Accepted', // Initial value
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
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const toggleStatus = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (newStatus: string) => {
    setAnchorEl(null);
    row.Status = newStatus;
  };

  const isConfirmButtonDisabled = row.Status === 'No Accepted';

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
          <Button
            aria-controls="status-menu"
            aria-haspopup="true"
            onClick={toggleStatus}
            style={{
              display: 'inline-block',
            }}
          >
            <div
              style={{
                ...capsuleStyle,
                background: getStatusColor(row.Status),
                color: getTextColor(row.Status),
              }}
            >
              {row.Status}
            </div>
          </Button>
          <Menu
            id="status-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={() => setAnchorEl(null)}
          >
            <MenuItem onClick={() => handleClose('Accepted')} style={{ color: '#8c8801' }}>
              Accepted
            </MenuItem>
            <MenuItem onClick={() => handleClose('Rejected')} style={{ color: 'red' }}>
              Rejected
            </MenuItem>
            <MenuItem onClick={() => handleClose('Shipped')} style={{ color: 'blue' }}>
              Shipped
            </MenuItem>
            <MenuItem onClick={() => handleClose('Delivered')} style={{ color: 'green' }}>
              Delivered
            </MenuItem>
          </Menu>
        </TableCell>
        <TableCell>{row.Order_Time}</TableCell>
        <TableCell>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {}}
            disabled={isConfirmButtonDisabled}
          >
            Confirm
          </Button>
        </TableCell>
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
  createData(1, 'Order 1', 'Customer 1', 'No Accepted', '2022-01-10'),
  createData(2, 'Order 2', 'Customer 2', 'No Accepted', '2022-02-15'),
  createData(3, 'Order 3', 'Customer 3', 'No Accepted', '2022-03-20'),
  createData(4, 'Order 4', 'Customer 4', 'No Accepted', '2022-04-25'),
  createData(5, 'Order 5', 'Customer 5', 'No Accepted', '2022-05-30'),
];

function getStatusColor(status: string) {
  switch (status) {
    case 'Accepted':
      return 'rgba(250, 221, 2, 0.2)';
    case 'Rejected':
      return 'rgba(255, 0, 0, 0.2)';
    case 'Shipped':
      return 'rgba(0, 0, 255, 0.2)';
    case 'Delivered':
      return 'rgba(1, 140, 25, 0.2)';
    default:
      return 'rgba(0, 0, 0, 0.2)';
  }
}

function getTextColor(status: string) {
  switch (status) {
    case 'Accepted':
      return '#8c8801';
    case 'Rejected':
      return 'red';
    case 'Shipped':
      return 'blue';
    case 'Delivered':
      return 'green';
    default:
      return 'black';
  }
}

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
            <TableCell>Confirm</TableCell>
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
