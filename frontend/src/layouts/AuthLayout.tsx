import { Outlet } from "react-router-dom";
import imagen from "../../src/images/FondoLogin.png";

export default function AuthLayout() {
  return (
    <>
      <div className="flex h-screen">
        {/* Sección izquierda (blanca) */}
        <div className="pt-5 w-1/2 bg-white items-center justify-center ">
          <div className="flex flex-col items-center">
            <a href="/">
            <div className="flex items-center">
              <p className="font-bold text-4xl">Inventory&nbsp;</p>
              <p className="text-blue-800 font-bold text-4xl">X</p>
            </div>
            </a>
            <Outlet />
          </div>
        </div>
        <div
          className="w-2/3 bg-cover bg-center"
          style={{ backgroundImage: `url(${imagen})` }}
        />{" "}
      </div>
    </>
  );
}
