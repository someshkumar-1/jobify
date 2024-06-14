import { useEffect, useState } from "react";

const testimonials = [
  {
    id: 1,
    image: "/images1.jpeg",
    name: "Rebacca Johnson",
    testimonial:
      "This job portal helped me find my dream job in just a few weeks. The process was seamless and the support was exceptional!",
    designation: "Software Engineer",
    company: "Tech Solutions Inc.",
  },
  {
    id: 2,
    image: "/images2.jpeg",
    name: "Jane Smith",
    testimonial:
      "I connected with amazing companies through this platform. The variety of job listings is impressive and the user interface is very intuitive.",
    designation: "Marketing Specialist",
    company: "Creative Minds Agency",
  },
  {
    id: 3,
    image: "/images3.jpeg",
    name: "Michael Johnson",
    testimonial:
      "Thanks to this job portal, I landed a great position that aligns perfectly with my career goals. Highly recommend it!",
    designation: "Project Manager",
    company: "Innovatech Ltd.",
  },
  {
    id: 4,
    image: "/images4.jpeg",
    name: "Emily Davis",
    testimonial:
      "The personalized support I received made all the difference. The team was always there to guide me and answer my questions.",
    designation: "Data Analyst",
    company: "DataCorp",
  },
  {
    id: 5,
    image: "/images5.jpeg",
    name: "David Wilson",
    testimonial:
      "A fantastic platform with numerous opportunities. I found a job that not only pays well but also fits my lifestyle perfectly.",
    designation: "Graphic Designer",
    company: "Creative Studio",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="px-10">
      <h1 className="mt-10 text-2xl text-gray-600 md:text-4xl text-center">
        What Our Members Says
      </h1>
      <p className="mt-2 text-center text-lg text-gray-500">
        Hear what our members say about their successful job searches and
        seamless experiences on our platform
      </p>
      <div className="max-w-2xl mx-auto py-8 relative">
        <div className="overflow-hidden relative h-96 mx-10">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="flex-shrink-0 w-full">
                <div className="text-center p-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-28 h-28 rounded-full mx-auto mb-4 object-cover"
                  />
                  <p className="text-sm md:text-lg text-gray-600">{testimonial.testimonial}</p>
                  <h4 className="font-bold text-xl mt-4 text-green-600">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">
                    {testimonial.designation}, {testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={prevSlide}
          className="absolute top-[192px] left-0 transform -translate-y-1/2 bg-green-600  text-white p-2 rounded-full"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-[192px] right-0 transform -translate-y-1/2 bg-green-600  text-white p-2 rounded-full"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
}

{
  /* <div className="mt-10 flex gap-20 max-w-2xl mx-auto">
{testimonials.map((testimonial) => (
  <div key={testimonial.id} className="w-full overflow-hidden">
    <div className="w-[133px] h-[133px] rounded-full border-4 border-gray-300">
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="w-[125px] h-[125px] rounded-full object-cover"
      />
    </div>
    <p>{testimonial.testimonial}</p>
    <span>{testimonial.name}</span>
    <div>
      <span>{testimonial.designation}</span>
      <span>{testimonial.company}</span>
    </div>
  </div>
))}
</div> */
}
