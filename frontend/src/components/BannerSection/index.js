import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const BannerSection = () => {
  const [details, setDetails] = useState([])
  useEffect(() => {
    const url = 'http://localhost:8002/'
    fetch(url).then((res) => res.json()).then((data) => setDetails(data)).catch((err) => console.log(err))
  }, [])
  console.log(details)
  return (
    <Card>
      <Card.Header>Banner</Card.Header>
      <Card.Body>
        <Card.Title>{details.length > 0 ? details[0].firstname : 'Name...'}</Card.Title>
        <Card.Text>
        {details.length > 0 ? details[0].role : 'Role...'}
        </Card.Text>
        <Button variant="primary">Explore Now</Button>
      </Card.Body>
    </Card>
  );
}

export default BannerSection;