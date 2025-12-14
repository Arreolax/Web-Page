import { Navigate } from "react-router-dom";
import Carrusel from "../components/carrusel.tsx";
import Footer from "../layouts/Footer.tsx";
import Memberships from "../components/Memberships_Comp.tsx";

export default function Homepage() {
  const token = localStorage.getItem("token");
  if (token) return <Navigate to="/dashboard" replace />;

  return (
    <>
      {/* Section I */}
      <section className="pt-20 flex flex-col-reverse lg:flex-row justify-between items-center px-6 md:px-12 lg:px-[75px] lg:pr-[200px] bg-gray-100 text-center lg:text-left">
        <div className="w-full lg:w-1/2 space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-bold">
            Inventory management <br />
            Now Simplified <br />
            <span className="text-blue-700">For Everyone</span>
          </h1>
          <p className="text-gray-600">
            With InventoryPRO it is very easy to manage your inventory
          </p>
          <button className="bg-[#11214D] font-bold text-white border-2 border-transparent px-6 py-2 rounded-md text-sm sm:text-base hover:bg-white hover:text-[#11214D] hover:border-[#11214D] transition">
            Learn More
          </button>
        </div>

        {/* Imagen */}
        <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0">
          <img
            className="w-[250px] sm:w-[350px] md:w-[400px] h-auto"
            src="../../src/images/images-home/sect_I.png"
            alt="Hero Image"
          />
        </div>
      </section>

      {/* Section II */}
      <section className="text-center py-12 bg-white px-4">
        <h2 className="font-bold text-2xl sm:text-3xl mb-8">
          Improve experience in your inventory
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          {/* Card 1 */}
          <div className="text-left max-w-xs leading-[1.5] space-y-2">
            <img
              src="../../src/images/images-home/logo_idk.png"
              className="w-[80px] sm:w-[100px] mx-auto md:mx-0"
              alt="logo"
            />
            <h3 className="font-bold text-center md:text-left">
              Multiple Inventories
            </h3>
            <p className="text-gray-600 text-center md:text-left">
              Manage all the inventories you want from anywhere.
            </p>
          </div>

          {/* Card 2 */}
          <div className="text-left max-w-xs leading-[1.5] space-y-2">
            <img
              src="../../src/images/images-home/logo_idk.png"
              className="w-[80px] sm:w-[100px] mx-auto md:mx-0"
              alt="logo"
            />
            <h3 className="font-bold text-center md:text-left">
              Update Inventories
            </h3>
            <p className="text-gray-600 text-center md:text-left">
              Update your inventories whenever you want.
            </p>
          </div>

          {/* Card 3 */}
          <div className="text-left max-w-xs leading-[1.5] space-y-2">
            <img
              src="../../src/images/images-home/logo_idk.png"
              className="w-[80px] sm:w-[100px] mx-auto md:mx-0"
              alt="logo"
            />
            <h3 className="font-bold text-center md:text-left">Security</h3>
            <p className="text-gray-600 text-center md:text-left">
              You won't have to worry about your inventories being leaked.
            </p>
          </div>
        </div>
      </section>

      {/* Memberships */}
      <div>
        <Memberships />
      </div>

      {/* Section FAQ */}
      <section className="max-w-[900px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 text-center px-6 py-10">
        <h2 className="text-[24px] font-bold mb-5 col-span-1 md:col-span-2">
          Frequently Asked Questions
        </h2>

        {[
          {
            question: "Question I",
            answer:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aperiam alias odio dolores sequi cupiditate veritatis molestias consequuntur. Illum blanditiis praesentium ipsam, odit sed cum esse enim libero quis eligendi?",
          },
          {
            question: "Question II",
            answer:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aperiam alias odio dolores sequi cupiditate veritatis molestias consequuntur. Illum blanditiis praesentium ipsam, odit sed cum esse enim libero quis eligendi?",
          },
          {
            question: "Question III",
            answer:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aperiam alias odio dolores sequi cupiditate veritatis molestias consequuntur. Illum blanditiis praesentium ipsam, odit sed cum esse enim libero quis eligendi?",
          },
          {
            question: "Question IV",
            answer:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aperiam alias odio dolores sequi cupiditate veritatis molestias consequuntur. Illum blanditiis praesentium ipsam, odit sed cum esse enim libero quis eligendi?",
          },
        ].map((item, i) => (
          <details
            key={i}
            className="bg-white rounded-md p-4 shadow-md cursor-pointer transition ease-in-out border-l-4 border-transparent open:border-[#11214D]"
          >
            <summary className="font-bold flex items-center justify-between cursor-pointer before:content-['➕'] before:text-gray-500 before:mr-2 open:before:content-['➖'] open:before:text-[#11214D]">
              {item.question}
            </summary>
            <div className="mt-2 text-gray-500 text-sm">{item.answer}</div>
          </details>
        ))}
      </section>

      {/* Carrusel */}
      <div className="px-4 sm:px-10">
        <Carrusel />
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
