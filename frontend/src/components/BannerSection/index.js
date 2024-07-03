import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BannerSection() {
  return (
    <Card>
      <Card.Header>Banner</Card.Header>
      <Card.Body>
        <Card.Title>Explore from millions of products</Card.Title>
        <Card.Text>
          Save by applying coupons and offers.
        </Card.Text>
        <Button variant="primary">Explore Now</Button>
      </Card.Body>
    </Card>
  );
}

export default BannerSection;