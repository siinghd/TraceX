import Button from "./components/Buttons/Button";
import Carousel from "./components/Carousels/Carousel";
import CircularText from "./components/CircularText";
import TextAreaTrace from "./components/Inputs/TextAreaTrace";
import Contact from "./components/Sections/Contact";
import Hero from "./components/Sections/Hero";
import HowTo from "./components/Sections/HowTo";

export default function Home() {
  return (
    <main>
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="md:col-span-2 md:border-r-[1px] border-b-[1px] border-grey px-3 md:px-6 lg:px-8 py-8">
          <Hero />
        </div>
        <div className="border-b-[1px] border-grey px-3 md:px-6 lg:px-8 py-8 relative">
          <p className="medium text-[20px] md:text-[24px] leading-tight">
            Record, protect, and trace text on the blockchain.<br/>TraceX: secure, transparent, and immutable documentation for copyright, business processes, and more.
          </p>
          <div className="flex mt-8 center">
            <svg width="132" height="132" viewBox="0 0 132 132" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotation-animation max-w-[80px] max-h-[80px] md:max-w-[135px] md:max-h-[135px]">
              <path className="fill-black dark:fill-white" fillRule="evenodd" clipRule="evenodd" d="M35.877 4.05811C43.8344 0.238626 54.5438 3.08152 65.7004 11.7336C70.136 15.1736 74.5724 19.4844 78.835 24.5371C69.7394 26.5554 60.1042 29.8692 50.4827 34.4875C40.8614 39.1057 32.2492 44.5504 24.9854 50.3845C23.7094 43.8983 23.1209 37.7406 23.2114 32.1281C23.4392 18.0116 27.9197 7.8776 35.877 4.05811ZM23.5738 51.5371C18.7779 28.1287 22.6986 8.59691 35.18 2.60592C47.6614 -3.38509 65.353 5.77291 80.6172 24.1567C104.025 19.3611 123.557 23.2818 129.548 35.763C135.539 48.2443 126.381 65.9357 107.997 81.1998C112.793 104.608 108.872 124.139 96.3911 130.13C83.9099 136.121 66.2186 126.964 50.9545 108.58C27.546 113.376 8.01424 109.456 2.02325 96.9741C-3.96773 84.4928 5.19017 66.8013 23.5738 51.5371ZM49.8019 107.169C43.3157 108.445 37.1579 109.033 31.5455 108.943C17.4289 108.715 7.29493 104.234 3.47544 96.2771C-0.344047 88.3198 2.49886 77.6104 11.151 66.4538C14.5909 62.0182 18.9016 57.5819 23.9542 53.3193C25.9725 62.4147 29.2863 72.0497 33.9044 81.6709C38.5227 91.2925 43.9676 99.9048 49.8019 107.169ZM51.5787 106.804C45.6355 99.5161 40.0668 90.7868 35.3566 80.9739C30.6466 71.1613 27.3191 61.3565 25.3504 52.1613C32.638 46.2183 41.3671 40.6497 51.1797 35.9397C60.9926 31.2295 70.7976 27.9019 79.993 25.9333C85.936 33.2208 91.5045 41.9499 96.2145 51.7624C100.925 61.5752 104.252 71.3802 106.221 80.5756C98.9332 86.5187 90.204 92.0874 80.3912 96.7975C70.5786 101.508 60.7739 104.835 51.5787 106.804ZM52.7367 108.2C56.9991 113.252 61.4353 117.563 65.8708 121.003C77.0273 129.655 87.7367 132.498 95.6941 128.678C103.651 124.859 108.132 114.725 108.36 100.608C108.45 94.9959 107.862 88.8384 106.586 82.3525C99.322 88.1866 90.7097 93.6315 81.0883 98.2497C71.467 102.868 61.8321 106.182 52.7367 108.2ZM107.617 79.4176C112.67 75.1551 116.98 70.7189 120.42 66.2834C129.072 55.1268 131.915 44.4174 128.096 36.4601C124.276 28.5027 114.142 24.0222 100.025 23.7944C94.4132 23.7039 88.2557 24.2923 81.7698 25.5683C87.6038 32.8321 93.0485 41.4442 97.6667 51.0654C102.285 60.6868 105.599 70.322 107.617 79.4176ZM74.6957 40.3466C70.2 54.7626 77.7519 70.1791 91.8978 75.4634C77.4818 70.9678 62.0653 78.5196 56.781 92.6655C61.2766 78.2495 53.7248 62.833 39.5789 57.5487C53.9949 62.0444 69.4114 54.4925 74.6957 40.3466Z" fill="#EAEAF3"/>
            </svg>
          </div>
          <div className="absolute m-auto top-0 md:top-auto md:bottom-12 left-0 right-0 md:right-auto w-fit md:translate-x-[-50%] translate-y-[-50%] circular-container select-none">
            <CircularText 
              text="TEXT ON BLOCKCHAIN "
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="md:border-r-[1px] border-b-[1px] border-grey px-3 md:px-6 lg:px-8 py-8">
          <Carousel />
        </div>
        <div className="md:border-r-[1px] border-b-[1px] border-grey px-3 md:px-6 lg:px-8 py-8 flex center">
          <div className="text-center max-w-[400px]">
            <h3 className="bold text-[30px] mb-2">Record. Protect. Empower.</h3>
            <p className="text-[18px] mb-6">Harness the potential of blockchain technology. Record your text. Protect your rights. Empower your business. Start now and make your mark.</p>
            <Button 
              text="Trace something"
              type="link"
              href="#trace"
            />
          </div>
        </div>
        <div className="border-b-[1px] border-grey px-3 md:px-6 lg:px-8 py-8">
          <a href="#how" className="flex flex-col justify-between w-full h-full">
            <div className="w-full relative min-h-[200px] mb-8">
              <span className="text-[90px] bold absolute left-0 top-0 leading-none">
                how
              </span>
              <span className="text-[90px] text-gradient bold absolute left-[120px] top-[50px] leading-none">
                to
              </span>
              <span className="text-[90px] bold absolute left-[180px] top-[100px] leading-none">
                use
              </span>
            </div>
            <div className="flex items-end justify-between group">
              <svg xmlns="http://www.w3.org/2000/svg" width="43" height="42" viewBox="0 0 43 42" fill="none" className="transiton duration-300 group-hover:translate-x-[-10px] group-hover:translate-y-[10px] pointer-events-auto cursor-pointer">
                <path className="fill-black dark:fill-white" d="M37.1099 0.0598117L42.0405 4.99039L12.4571 34.5738L39.5752 34.5738L39.5752 41.5753L0.525075 41.5752L0.525078 2.5251L7.52649 2.5251L7.52649 29.6433L37.1099 0.0598117Z" fill="#EAEAF3"/>
              </svg>
              <p className="max-w-[150px]">
              Read the TraceX documentation.<br/>Accessible to everyone.
              </p>
            </div>
          </a>
        </div>
      </div>
      <div id="trace" className="px-3 md:px-6 lg:px-8 w-full flex center border-b-[1px] border-grey py-8 lg:py-12 text-center relative overflow-hidden">
        <div className="max-w-[1000px] flex flex-col center">
          <h3 className="bold text-[48px] leading-none mb-4">Capture your words. Preserve your legacy.</h3>
          <p className="regular text-[18px] max-w-[600px] mb-8">Don't let your ideas fade away. Record your text on the blockchain today and ensure your voice echoes through time.</p>
          <TextAreaTrace />
        </div>
        <div className="circles w-[420px] aspect-square rounded-full bg-grad-light-2 absolute top-[-20%] left-[5%] opacity-60 blur-[240px] z-[-1]" />
        <div className="circles w-[420px] aspect-square rounded-full bg-grad-light-1 absolute bottom-[-20%] right-[5%] opacity-60 blur-[240px] z-[-1]" />
      </div>
      <div id="how" className="px-3 py-8 md:px-6 lg:px-8 lg:py-12 border-b-[1px] border-grey">
        <HowTo />
      </div>
      <div className="px-3 md:px-6 lg:px-8">
        <Contact />
      </div>
    </main>
  );
}
