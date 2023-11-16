
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import "./main.scss"
import { products } from "../../data"
import { Link } from "react-router-dom"

const Main = () => {
  return (
    <div className="main">
      <div className="container">
        {products.map((Item) => (

          <Card sx={{ maxWidth: 345 }} key={Item.id} className="items">
            <CardMedia
              sx={{ height: 140 }}
              image={Item.img}
              title={Item.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {Item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Price : {Item.price}
                <br />
                Producer : {Item.producer}
              </Typography>
            </CardContent>
            <CardActions className="cardActions">
              <div className="button">
                <Link to="/product">
                  <Button>View</Button>
                </Link>
                <Link to="/product">
                <Button>Edit</Button>
                </Link>
              </div>
              <Typography variant="body2" color="text.secondary">
                9 mins
              </Typography>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Main
