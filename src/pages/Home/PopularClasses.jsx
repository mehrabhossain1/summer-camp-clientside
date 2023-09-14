const PopularClasses = () => {
  const popularClassesData = [
    {
      title: "Music Class",
      description:
        "Learn to play musical instruments and explore the world of music.",
      image: "https://via.placeholder.com/300x200.png?text=Music+Class",
    },
    {
      title: "Dance Class",
      description: "Groove to the rhythm and master various dance styles.",
      image: "https://via.placeholder.com/300x200.png?text=Dance+Class",
    },
    {
      title: "Art & Craft Class",
      description: "Unleash your creativity with art and craft activities.",
      image: "https://via.placeholder.com/300x200.png?text=Art+%26+Craft+Class",
    },
    {
      title: "Foreign Language Class",
      description: "Learn a new language and open doors to diverse cultures.",
      image:
        "https://via.placeholder.com/300x200.png?text=Foreign+Language+Class",
    },
    {
      title: "Yoga and Meditation Class",
      description:
        "Find inner peace and improve your physical well-being with yoga and meditation.",
      image:
        "https://via.placeholder.com/300x200.png?text=Yoga+and+Meditation+Class",
    },
    {
      title: "Cooking Class",
      description: "Master the culinary arts and prepare delicious dishes.",
      image: "https://via.placeholder.com/300x200.png?text=Cooking+Class",
    },
  ];
  return (
    <section className='bg-gray-100 py-12'>
      <div className='container mx-auto text-center'>
        <h2 className='text-3xl font-semibold mb-8'>Popular Classes</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {popularClassesData.map((classItem, index) => (
            <div
              key={index}
              className='bg-white rounded-lg shadow-md overflow-hidden'
            >
              <img
                src={classItem.image}
                alt={classItem.title}
                className='w-full h-40 object-cover'
              />
              <div className='p-4'>
                <h3 className='text-xl font-semibold mb-2'>
                  {classItem.title}
                </h3>
                <p className='text-gray-600'>{classItem.description}</p>
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

export default PopularClasses;
