import { Container, Grid, Header, Icon, Segment, List } from "semantic-ui-react";
import "./footer.css";
import {Link} from "react-router-dom";


function Footer() {
  return (
    <div className="footer">
      <Segment inverted vertical style={{ padding: "5em 0em" }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={3}>
                <List link>
                  <List.Item to="/" as={Link}>
                    Home
                  </List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <List link>
                  <List.Item to="/products" as={Link}>
                    Products
                  </List.Item>
                </List>
              </Grid.Column>

              <Grid.Column width={3}>
                <Header as="h4" inverted>
                  <Icon name="facebook" />

                  <Icon name="instagram" />
                  
                </Header>
              </Grid.Column>

              <Grid.Column width={3}>
                <Icon name="phone square" />
                +374 93 322 902
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </div>
  );
}


export default Footer;
