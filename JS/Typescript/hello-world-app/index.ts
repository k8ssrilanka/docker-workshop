import * as express from "express";



const app = express();
app.get( "/", ( req, res ) => {
  res.send( "Hello Kubernetes Sri Lanka" );
} );

app.listen(8080, () => {
  console.log("Server started on http://localhost:8080"); 
});
