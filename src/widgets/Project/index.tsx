import { useState } from "react";
type PortfolioItem = {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
};
import SectionTitle from '@/components/ui/SectionTitle';
import SectionOpacity from '@/components/ui/SectionOpacity';

const portfolioItems: PortfolioItem[] = [
  { title: "BMI-Interiors", description: "The Premier Interior Design & Fit-out Company in Dubai and UAE.", imageUrl: "/images/bmi.png", link: "https://www.bmiinterior.com/" },
  { title: "Personal Chat-Bot", description: "An AI assistant tailored to interact, assist, and personalize user experiences.", imageUrl: "/images/pc.png", link: "https://personal-chatbot-six.vercel.app/" },
  { title: "Coffee Shop", description: "A cozy place serving coffee, pastries, and a relaxing atmosphere.", imageUrl: "/images/coffee.png", link: "https://coffee-shop-orpin.vercel.app/" },
  { title: "Japanese Dream Tour", description: "A guided journey through Japan's culture, landmarks, cuisine, and traditions.", imageUrl: "/images/japanesedreamtour.png", link: "https://japanesedreamtour.vercel.app/" },
  { title: "Travel With Me", description: "Travel With Me simplifies booking flights, hotels, and unforgettable adventures.", imageUrl: "/images/travel.png", link: "https://online-booking-inky.vercel.app/" },
  { title: "Multi Vendor Ecommerce", description: "A platform allowing multiple sellers to list and sell products online.", imageUrl: "/images/ec.png", link: "https://multi-vendor-client-rho.vercel.app/" },
  { title: "School System", description: "An organized structure for education, managing curriculum, teachers, and students.", imageUrl: "/images/school.png", link: "https://school-website-rouge-theta.vercel.app/academics" },
  { title: "Rooza", description: "Helping businesses grow with innovative online marketing strategies.", imageUrl: "/images/earlx.png", link: "" },
  { title: "The Lex", description: "Exclusive law magazine offering the latest updates in legal news.", imageUrl: "/images/rooza.png", link: "" },
];

const PortfolioSlider: React.FC = () => {
  const [startIndex, setStartIndex] = useState<number>(0);

  const nextSlide = () => {
    setStartIndex((prevIndex) => (prevIndex + 4) % portfolioItems.length);
  };

  const prevSlide = () => {
    setStartIndex((prevIndex) => (prevIndex - 4 + portfolioItems.length) % portfolioItems.length);
  };

  const visibleItems = [...portfolioItems.slice(startIndex), ...portfolioItems.slice(0, startIndex)].slice(0, 4);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      <SectionOpacity classes="z-2">
        <SectionTitle title=" Our Projects." classes="px-[0vw] md:px-[3vw] pt-[3vw] z-10" />
        {/* <h2 className="text-4xl font-extrabold text-white text-center mb-8 uppercase tracking-wide">
          Recent Projects
        </h2> */}
      </SectionOpacity>
      <div className="mt-12"></div> {/* Yeh gap create karega */}

<div className="relative"></div>

      <div className="relative">
        <div className="flex flex-wrap -mx-2">
          {visibleItems.map((item) => (
            <div key={item.title} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4">
              <div className="bg-transparent rounded-lg shadow-lg overflow-hidden relative group">
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                  <img src={item.imageUrl || "/placeholder.svg"} alt={item.title} className="w-full h-48 object-cover group-hover:opacity-80 transition-all duration-300" />
                  <div className="absolute inset-0 bg-black bg-opacity-30 text-white p-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <h3 className="font-semibold text-lg mb-1 text-shadow-md">{item.title}</h3>
                    <p className="text-sm text-gray-200 truncate">{item.description}</p>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-900 text-white p-4 rounded-full shadow-lg z-10 hover:bg-gray-700 transition-all duration-300"
          aria-label="Previous slide"
        >
          &#8592;
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-900 text-white p-4 rounded-full shadow-lg z-10 hover:bg-gray-700 transition-all duration-300"
          aria-label="Next slide"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default PortfolioSlider;
