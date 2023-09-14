import { Button, Card } from "antd";

const selectedClasses = [
  {
    id: 1,
    name: "Yoga Class",
    instructor: "John Doe",
    price: 20,
    // Add more class details as needed
  },
  {
    id: 2,
    name: "Painting Workshop",
    instructor: "Jane Smith",
    price: 30,
    // Add more class details as needed
  },
  // Add more selected classes here
];

const SelectedClasses = () => {
  const handleDelete = () => {
    console.log("deleted");
  };
  return (
    <section className='mb-8'>
      <h3 className='text-lg font-semibold mb-4'>My Selected Classes</h3>
      {selectedClasses.length === 0 ? (
        <p>No classes selected.</p>
      ) : (
        <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {selectedClasses.map((classItem) => (
            <Card
              key={classItem.id}
              title={classItem.name}
              extra={
                <Button className='' onClick={() => handleDelete(classItem.id)}>
                  Delete
                </Button>
              }
            >
              {/* Display relevant information about the class */}
              <p>Instructor: {classItem.instructor}</p>
              <p>Price: ${classItem.price}</p>
              {/* Add more class details here */}
            </Card>
          ))}
        </div>
      )}
    </section>
  );
};

export default SelectedClasses;
