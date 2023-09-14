import { Card, Button, Space } from "antd";

const classesData = [
  {
    id: 1,
    name: "Music Class 1",
    instructor: "John Doe",
    availableSeats: 5,
    price: 50,
    image: "https://example.com/music-class-1.jpg",
  },
  {
    id: 2,
    name: "Dance Class 1",
    instructor: "Alice Smith",
    availableSeats: 0,
    price: 60,
    image: "https://example.com/dance-class-1.jpg",
  },
  {
    id: 3,
    name: "Art Class 1",
    instructor: "Emily Johnson",
    availableSeats: 8,
    price: 40,
    image: "https://example.com/art-class-1.jpg",
  },
  {
    id: 4,
    name: "Yoga Class 1",
    instructor: "David Wilson",
    availableSeats: 2,
    price: 55,
    image: "https://example.com/yoga-class-1.jpg",
  },
  {
    id: 5,
    name: "Cooking Class 1",
    instructor: "Sarah Lee",
    availableSeats: 10,
    price: 45,
    image: "https://example.com/cooking-class-1.jpg",
  },
  {
    id: 6,
    name: "Photography Class 1",
    instructor: "Michael Brown",
    availableSeats: 7,
    price: 70,
    image: "https://example.com/photography-class-1.jpg",
  },
];

const Classes = () => {
  const isLoggedIn = true;
  const isAdminOrInstructor = false;

  return (
    <div className='container mx-auto'>
      <h2 className='text-2xl font-semibold mb-4'>Classes</h2>
      <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {classesData.map((classItem) => (
          <Card
            key={classItem.id}
            title={classItem.name}
            extra={
              <Space>
                <span>Instructor: {classItem.instructor}</span>
                <span>Available Seats: {classItem.availableSeats}</span>
                <span>Price: ${classItem.price}</span>
              </Space>
            }
            actions={[
              <Button
                key={`select-button-${classItem.id}`}
                style={{ color: "black" }}
                type='primary'
                disabled={
                  !isLoggedIn ||
                  isAdminOrInstructor ||
                  classItem.availableSeats === 0
                }
              >
                {isLoggedIn ? "Select" : "Log In to Select"}
              </Button>,
            ]}
            className={classItem.availableSeats === 0 ? "bg-red-200" : ""}
          >
            <img src={classItem.image} alt={classItem.name} />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Classes;
