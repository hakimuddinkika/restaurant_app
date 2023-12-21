import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";



export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
        <SectionHeaders 
          subHeader={'Out Story'}
          mainHeader={'About Us'}
        />

        <div className="text-stone-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quod veniam aliquam similique optio! Accusamus aspernatur aperiam fuga aut, ab voluptatum ea quasi rem reiciendis libero est ipsam iste quis neque minus quibusdam veniam quas debitis maxime dolores dolor! Illum velit suscipit quaerat consequuntur. Eos quae at ipsum consectetur atque!
          </p>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quod veniam aliquam similique optio! Accusamus aspernatur aperiam fuga aut, ab voluptatum ea quasi rem reiciendis libero est ipsam iste quis neque minus quibusdam veniam quas debitis maxime dolores dolor! Illum velit suscipit quaerat consequuntur. Eos quae at ipsum consectetur atque!
          </p>
        </div>
      </section>

      <section className="text-center my-8">
        <SectionHeaders 
          subHeader={'Don\'t Hesitate'}
          mainHeader={'Contact Us'}
        />
        <div className=" mt-8">
          <a className="text-4xl underline text-stone-500" href="tel:+96587654321">+965 87654321</a>
        </div>
      </section>

      <footer className="border-t p-8 text-center text-gray-500">
        &copy; 2023 All rights reserved
      </footer>
    </>
  )
}
