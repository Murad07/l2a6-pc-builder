import { Card } from "antd";

const CategoriesCard = ({ cat }) => {
  return (
    <Card
      hoverable
      style={
        {
          // padding: auto,
        }
      }
    >
      <h1>{cat?.name}</h1>
    </Card>
  );
};

export default CategoriesCard;
