import { Card, Avatar, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";

const { Meta } = Card;

const instructorData = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    image: "https://via.placeholder.com/150",
    classesCount: 5,
    classes: ["Class A", "Class B", "Class C"],
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    image: "https://via.placeholder.com/150",
    classesCount: 3,
    classes: ["Class X", "Class Y"],
  },
  {
    id: 3,
    name: "Alice Johnson",
    email: "alice@example.com",
    image: "https://via.placeholder.com/150",
    classesCount: 4,
    classes: ["Class P", "Class Q", "Class R"],
  },
  {
    id: 4,
    name: "Alice Johnson",
    email: "alice@example.com",
    image: "https://via.placeholder.com/150",
    classesCount: 4,
    classes: ["Class P", "Class Q", "Class R"],
  },
  {
    id: 5,
    name: "Alice Johnson",
    email: "alice@example.com",
    image: "https://via.placeholder.com/150",
    classesCount: 4,
    classes: ["Class P", "Class Q", "Class R"],
  },
  {
    id: 6,
    name: "Alice Johnson",
    email: "alice@example.com",
    image: "https://via.placeholder.com/150",
    classesCount: 4,
    classes: ["Class P", "Class Q", "Class R"],
  },
];

const Instructors = () => {
  return (
    <section className='py-6 bg-gray-100'>
      <div className='container mx-auto'>
        <h2 className='text-3xl font-semibold mb-8 text-center text-orange-500'>
          Our Instructors
        </h2>
        <div className='flex flex-wrap justify-center'>
          {instructorData.map((instructor) => (
            <div key={instructor.id} className='w-64 p-4 mx-4 my-4'>
              <Card
                className='instructor-card h-full'
                cover={
                  <Avatar
                    src={instructor.image}
                    size={150}
                    icon={<UserOutlined />}
                    alt={instructor.name}
                  />
                }
                actions={[
                  <Button
                    type='primary'
                    key='see-classes'
                    className='bg-gradient-to-r from-blue-400 to-indigo-500 hover:from-indigo-400 hover:to-blue-500 text-white'
                  >
                    See Classes
                  </Button>,
                ]}
              >
                <Meta title={instructor.name} description={instructor.email} />
                {instructor.classesCount && (
                  <div className='class-info'>
                    <strong>Classes Taken: {instructor.classesCount}</strong>
                    <ul>
                      {instructor.classes.map((className) => (
                        <li key={className}>{className}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Instructors;
