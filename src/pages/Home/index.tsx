import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import { CardContent } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import api from "../../services/api";

interface Customer {
 id: string;
 createdAt: string;
 name: string;
}

function Home() {

 const [customers, setCustomers] = useState<Customer[]>();

 useEffect(() => {
  getCustomers();
  console.log(customers);
 }, []);

 async function getCustomers() {
  try {
   const response = await api.get('/api/customers');
   const customers = response.data;

   setCustomers(customers);
  } catch (e: any) {
   console.log(e.response.error)
  }
 }

 return (
  <>
   <Typography variant="h3" component="div" sx={{marginBottom: 5}}>
       Contabilidade Fácil
   </Typography>
   {customers && customers.map((customer) => (
    <Card variant="outlined" sx={{maxWidth: 600, marginBottom: 3}}>
     <CardContent>
      <Typography variant="h5" component="div">
       {customer.name}
      </Typography>
     </CardContent>
     <CardActions>
      <Button size="small">Detalhes</Button>
     </CardActions>
    </Card>
   ))}
  </>
 );
}

export default Home;