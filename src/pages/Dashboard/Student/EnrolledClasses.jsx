import { Card } from "antd";

const enrolledClasses = [
  {
    id: 3,
    name: "Dance Class",
    instructor: "Alice Johnson",
    price: 25,
    // Add more class details as needed
  },
  {
    id: 4,
    name: "Cooking Class",
    instructor: "Bob Wilson",
    price: 35,
    // Add more class details as needed
  },
  // Add more enrolled classes here
];

const EnrolledClasses = () => {
  return (
    <section>
      <h3 className='text-lg font-semibold mb-4'>My Enrolled Classes</h3>
      {enrolledClasses.length === 0 ? (
        <p>No classes enrolled.</p>
      ) : (
        <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {enrolledClasses.map((classItem) => (
            <Card key={classItem.id} title={classItem.name}>
              {/* Display relevant information about the enrolled class */}
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

export default EnrolledClasses;
