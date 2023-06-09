import Hero from "./components/Sections/Hero";

export default function Home() {
  return (
    <main className="">
      <div className="grid grid-cols-3">
        <div className="col-span-2 border-r-[1px] border-b-[1px] border-grey px-3 md:px-6 lg:px-8 py-8">
          <Hero />
        </div>
        <div className="border-b-[1px] border-grey px-3 md:px-6 lg:px-8 py-8">
          
        </div>
      </div>
    </main>
  );
}
