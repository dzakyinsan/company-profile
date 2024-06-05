import React from "react";

interface Testimonial {
  quote: string;
  company: string;
  name: string;
  title: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam deserunt illo expedita! Fuga quisquam pariatur impedit necessitatibus inventore, placeat, assumenda reprehenderit molestiae repellat deserunt quidem maiores! Dicta, sunt illo. Voluptate.",
      company: "loom",
      name: "Tatiana Mac",
      title: "Senior Software Engineer",
    },
    {
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam deserunt illo expedita! Fuga quisquam pariatur impedit necessitatibus inventore, placeat, assumenda reprehenderit molestiae repellat deserunt quidem maiores! Dicta, sunt illo. Voluptate.",
      company: "Indent",
      name: "Fouad Matin",
      title: "CEO",
    },
    {
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam deserunt illo expedita! Fuga quisquam pariatur impedit necessitatibus inventore, placeat, assumenda reprehenderit molestiae repellat deserunt quidem maiores! Dicta, sunt illo. Voluptate.",
      company: "Wunderman Thompson",
      name: "Daniel Lopes",
      title: "Frontend Developer",
    },
  ];
  const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => (
    <div className="bg-[#333] text-white p-6 rounded-lg shadow-lg">
      <p className="text-sm italic mb-4">{testimonial.quote}</p>
      <div className="flex items-center">
        <div>
          <p className="font-bold">{testimonial.company}</p>
          <p className="text-xs">
            {testimonial.name}, {testimonial.title}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="px-10 lg:px-20 py-14 border-t-[#333] border-t-[1px] mt-20">
      <h1 className="text-2xl font-bold text-center sm:text-start mb-10">
        Testimonial
      </h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
