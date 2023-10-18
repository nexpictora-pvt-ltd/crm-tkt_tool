import { Grid, Paper, Typography } from "@mui/material";
import CustomerTable from "../../components/Table/customer.table";

const Customer = () => {
  return (
    <>
      <Grid container xs={12} sm={12}>
        <Grid xs={12} sm={6} padding={4}>
          <Paper
            sx={{
              backgroundColor: "#CBEEF0",
              height: "20vh",
              borderRadius: "30px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="h5" fontWeight={"600"}>
              Total Customer: 100
            </Typography>
          </Paper>
        </Grid>

        <Grid xs={12} sm={6} padding={4}>
          <Paper
            sx={{
              backgroundColor: "#A4BFF4",
              height: "20vh",
              borderRadius: "30px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="h5" fontWeight={"600"}>
              Customer loyalty: 100%
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      <Grid xs={12}>
        <CustomerTable></CustomerTable>
      </Grid>
    </>
  );
};

export default Customer;
