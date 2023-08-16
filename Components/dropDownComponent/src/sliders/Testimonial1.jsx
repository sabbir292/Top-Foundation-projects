import Slide from "./Slide";
import { motion } from "framer-motion";

const slides = [
  {
    id: 1,
    ratings: 4,
    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur optio sint consequatur vel, eligendi odio modi a explicabo neque?',
    userName: 'Sam Altman',
    occupation: 'AI Engineer',
    url: 'https://dummyimage.com/106x106'
  },
  {
    id: 2,
    ratings: 5,
    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus voluptates quidem incidunt minima.',
    userName: 'Emily Smith',
    occupation: 'Web Developer',
    url: 'https://dummyimage.com/106x106'
  },
  {
    id: 3,
    ratings: 4.5,
    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod minima nesciunt cum illo natus voluptas tempore sint quo, corporis amet?',
    userName: 'John Doe',
    occupation: 'Software Engineer',
    url: 'https://dummyimage.com/106x106'
  },
  {
    id: 4,
    ratings: 3.5,
    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est maiores id dolorum tempora alias eveniet?',
    userName: 'Ava Johnson',
    occupation: 'UI/UX Designer',
    url: 'https://dummyimage.com/106x106'
  },
  {
    id: 5,
    ratings: 5,
    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit itaque magni, molestias officia eum maxime!',
    userName: 'Daniel Brown',
    occupation: 'Full Stack Developer',
    url: 'https://dummyimage.com/106x106'
  },
  {
    id: 6,
    ratings: 4,
    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique exercitationem doloremque quidem repellendus tempora iure!',
    userName: 'Sophia Martinez',
    occupation: 'Front-End Developer',
    url: 'https://dummyimage.com/106x106'
  },
  {
    id: 7,
    ratings: 4.5,
    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, voluptate magnam. Voluptas, laborum repellat.',
    userName: 'Liam Wilson',
    occupation: 'Software Developer',
    url: 'https://dummyimage.com/106x106'
  },
  {
    id: 8,
    ratings: 3,
    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi dolor commodi voluptas aliquid odio.',
    userName: 'Olivia Taylor',
    occupation: 'Web Designer',
    url: 'https://dummyimage.com/106x106'
  },
  {
    id: 9,
    ratings: 5,
    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint unde quod voluptate voluptatibus exercitationem!',
    userName: 'Ethan Clark',
    occupation: 'Front-End Engineer',
    url: 'https://dummyimage.com/106x106'
  },
  {
    id: 10,
    ratings: 4.5,
    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, vitae pariatur repellendus ad nisi!',
    userName: 'Isabella White',
    occupation: 'UI Developer',
    url: 'https://dummyimage.com/106x106'
  },
];



const testimonial1 = () => {

  return (
    <motion.section 
      className="text-gray-600 body-font py-12 h-[30rem] bg-red-50 spacing">
      <Slide slides = {slides}/>
    </motion.section>
  );
};

export default testimonial1;



// const testimonialCard = () => {
//   return (
//     <div className="relative grid place-content-center shadow-md">
//       <div>&#9733</div>
//       <p>
//         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
//         consequatur exercitationem quis! Veritatis, accusantium.
//       </p>
//       <h3>Title</h3>
//       <p>Occupation</p>
//       <img
//         alt="testimonial"
//         src="https://dummyimage.com/106x106"
//         className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
//       />
//     </div>
//   );
// };
// export { testimonialCard };
