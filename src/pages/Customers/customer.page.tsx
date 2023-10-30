import { Grid, Typography } from "@mui/material";
import CustomerTable from "../../components/Table/customer.table";

const Customer = () => {
  return (
    <>

      <Grid item xs={12} >
        <CustomerTable></CustomerTable>
      </Grid>
    </>
  );
};

export default Customer;
