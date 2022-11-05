import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import { CardContent } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";

import api from "../../services/api";

interface Customer {
 id: string;
 createdAt: string;
 name: string;
}

function Home() {

 const [customers, setCustomers] = useState<Customer[]>();
 const [loading, setLoading] = useState(false);

 useEffect(() => {
  getCustomers();
  console.log(customers);
 }, []);

 async function getCustomers() {
  setLoading(true);

  await api
   .get('/api/customers')
   .then(response => {
    setCustomers(response.data);
    setLoading(false);
   })
   .catch(error => {
    console.log(error.response.error)
   });
 }

 return (
  <>
   <Typography variant="h3" component="div" sx={{marginBottom: 5}}>
       Contabilidade Fácil
   </Typography>

   {loading === true ? 
   ( 
    <Box sx={{ display: 'flex' }}>
      <CircularProgress size={200}/>
    </Box>
   ) : 
   (
     customers && customers.map((customer) => (
      <Card variant="outlined" sx={{maxWidth: 600, marginBottom: 3}}>
       <CardContent>
        <Typography variant="h5" component="div">
         {customer.name}
        </Typography>
       </CardContent>
       <CardActions>
        <Button size="small">Detalhes</Button>
       </CardActions>
      </Card>//
     ))
    )}
  </>
 );
}

export default Home;