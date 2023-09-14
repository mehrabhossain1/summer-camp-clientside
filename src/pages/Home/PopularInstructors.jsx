const popularInstructorsData = [
  {
    name: "John Doe",
    specialty: "Music Instructor",
    image: "https://via.placeholder.com/300x300.png?text=John+Doe",
  },
  {
    name: "Jane Smith",
    specialty: "Dance Instructor",
    image: "https://via.placeholder.com/300x300.png?text=Jane+Smith",
  },
  {
    name: "Emily Johnson",
    specialty: "Art & Craft Instructor",
    image: "https://via.placeholder.com/300x300.png?text=Emily+Johnson",
  },
  {
    name: "Michael Brown",
    specialty: "Language Instructor",
    image: "https://via.placeholder.com/300x300.png?text=Michael+Brown",
  },
  {
    name: "Sarah Davis",
    specialty: "Yoga Instructor",
    image: "https://via.placeholder.com/300x300.png?text=Sarah+Davis",
  },
  {
    name: "David Wilson",
    specialty: "Cooking Instructor",
    image: "https://via.placeholder.com/300x300.png?text=David+Wilson",
  },
];

const PopularInstructors = () => {
  return (
    <section className='bg-gray-100 py-12'>
      <div className='container mx-auto text-center'>
        <h2 className='text-3xl font-semibold mb-8'>Popular Instructors</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {popularInstructorsData.map((instructor, index) => (
            <div
              key={index}
              className='bg-white rounded-lg shadow-md overflow-hidden'
            >
              <img
                src={instructor.image}
                alt={instructor.name}
                className='w-full h-40 object-cover'
              />
              <div className='p-4'>
                <h3 className='text-xl font-semibold mb-2'>
                  {instructor.name}
                </h3>
                <p className='text-gray-600'>{instructor.specialty}</p>
                <button className='mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded'>
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularInstructors;
