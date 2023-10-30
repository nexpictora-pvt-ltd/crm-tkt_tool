import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Fragment } from "react";
import { Grid, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";

import { getCustomerAsync } from "../../store/customer/customer.reducer";
import { Customer } from "../../store/customer/customer.state";
import { useAppSelector } from "../../hooks/useAppSelector";
import { AppDispatch } from "../../store/store"; // Import your AppDispatch type

export default function CustomerTable() {
  const dispatch: AppDispatch = useDispatch(); // Specify the dispatch type
  const filteredRecords: Customer[] = useAppSelector((state) => state.customer.Customers);
  const isLoading = useAppSelector((state) => state.customer.isLoading);

  const accessToken = useAppSelector((state) => state.login.loginResponse.access_token);

  useEffect(() => {
    // Dispatch the async thunk using the dispatch function
    dispatch(getCustomerAsync(accessToken));
  }, [dispatch, accessToken]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Fragment>
      <Grid container xs={12} direction={"column"} height={'100%'} width={'100%'}>
        <Table  aria-label="custom pagination table">
          <TableHead>
            <TableRow>
              <TableCell>Country</TableCell>
              <TableCell>Customer ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Address</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRecords.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.country}</TableCell>
                <TableCell>{row.Customer_id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.phone}</TableCell>
                <TableCell>{row.address}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Grid>
    </Fragment>
  );
}
