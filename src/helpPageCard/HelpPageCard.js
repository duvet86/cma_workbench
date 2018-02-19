import React from "react";

import Card, { CardActions, CardContent } from "material-ui/Card";
import Button from "material-ui/Button";
import Typography from "material-ui/Typography";

const HelpPageCard = () => (
  <Card>
    <CardContent>
      <Typography>Word of the Day</Typography>
      <Typography variant="headline" component="h2">
        Text text
      </Typography>
      <Typography>adjective</Typography>
      <Typography component="p">More text text</Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
);

export default HelpPageCard;
