import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import SectionTitle from '@/components/ui/SectionTitle';
import SectionOpacity from '@/components/ui/SectionOpacity';

interface Leader {
  name: string;
  title: string;
  image: string;
}

const leadershipData: Leader[] = [
  { name: "Hamza", title: "FOUNDER", image: "/images/hamza2.png" },
  { name: "Arsalan", title: "MERN Stack Developer", image: "/images/arsalan1.jpg" },
  { name: "Huzaifa", title: "Frontend Developer", image: "/images/huzaifa2.jpg" },
  { name: "Najam", title: "Python Developer", image: "/images/najam.jpg" },
];

const LeadershipList = () => {
  return (
    <div className="p-8 mx-auto max-w-screen-xl bg-transparent">
      {/* <h2 className="text-4xl font-semibold text-center text-white mb-8">
        Leading with Vision
      </h2> */}
      <SectionOpacity classes="z-2">
        <SectionTitle title=" Leading Vision." classes="px-[0vw] md:px-[3vw] pt-[3vw] z-10" />
        </SectionOpacity>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="pb-10"
      >
        {leadershipData.map((leader, index) => (
          <SwiperSlide key={index}>
            <div className="p-4">
              <div className="bg-transparent rounded-lg shadow-xl overflow-hidden text-center p-6 flex flex-col justify-between transition-transform duration-300 ease-in-out hover:scale-105">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-[300px] object-cover rounded-lg mb-4 mx-auto"
                />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{leader.name}</h3>
                  <p className="text-md text-gray-300">{leader.title}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LeadershipList;
