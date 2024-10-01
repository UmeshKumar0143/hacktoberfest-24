import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";

// Function to generate a unique gradient for each item
const generateGradient = (index) => {
  const gradients = [
    "linear-gradient(45deg, red, orange, yellow, green, blue, indigo, violet)",
    "linear-gradient(45deg, violet, indigo, blue, green, yellow, orange, red)",
    "linear-gradient(45deg, orange, yellow, green, blue, indigo, violet, red)",
    // Add more gradients if needed
  ];
  return gradients[index % gradients.length];
};

const Benefits = () => {
  return (
    <Section id="about">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="What is HacktoberFest'24 and Why Should You Participate?"
        />

        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item, index) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
                border: `5px solid`,
                borderImage: generateGradient(index),
                borderImageSlice: 1,
                borderRadius: '10px',
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div className="flex items-center mt-auto">
                  <img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                  />
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="ml-auto flex items-center font-code text-xs font-bold text-n-1 uppercase tracking-wider hover:cursor-pointer pointer-events-auto"
                  >
                    <p className="mr-2">Learn more</p> 
                    <Arrow /> 
                  </a>
                </div>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)", borderRadius: '10px' }} // Add borderRadius here as well
              >
                
              </div>

              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
