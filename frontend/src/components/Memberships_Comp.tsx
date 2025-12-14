import { IoCheckmark, IoCloseSharp } from "react-icons/io5";

const plans = [
  {
    name: "Free",
    price: 0,
    features: [
      { text: "One inventory", included: true },
      { text: "Basic integrations", included: true },
      { text: "Standard Encryption", included: false },
      { text: "Email Support", included: false },
    ],
  },
  {
    name: "Premium",
    price: 20,
    features: [
      { text: "Multiple inventories", included: true },
      { text: "Basic integrations", included: true },
      { text: "Standard Encryption", included: true },
      { text: "Email Support", included: false },
    ],
  },
  {
    name: "Business",
    price: 50,
    features: [
      { text: "Multiple admins", included: true },
      { text: "Basic integrations", included: true },
      { text: "Standard Encryption", included: true },
      { text: "Email Support", included: true },
    ],
  },
];

const Memberships = () => {
  return (
    <section className="text-center leading-[1.5] p-10 bg-gray-100">
      <h2 className="font-bold text-2xl">
        Prices, simple and suited for all your needs
      </h2>
      <p className="font-bold text-2xl italic">
        Annual — Save 20% per month
      </p>

      <div className="flex flex-wrap justify-center gap-6 pt-6">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className="bg-white p-5 rounded-lg shadow-md w-[360px] hover:shadow-lg transition-shadow"
          >
            {/* Header */}
            <div className="text-white bg-gradient-to-b from-[#1E3A8A] to-[#11214D] h-[140px] rounded-lg px-6 py-4 text-left">
              <h3 className="font-semibold text-lg">{plan.name}</h3>
              <div className="flex items-baseline space-x-2">
                <p className="text-3xl font-bold">${plan.price}</p>
                <p className="italic text-sm">/ month</p>
              </div>
              <a href="/memberships">
                <button className="mt-3 font-semibold bg-white text-blue-700 border border-transparent py-1.5 text-[15px] rounded-full w-full hover:bg-[#11214D] hover:text-white hover:border-white transition-colors">
                  Choose this plan
                </button>
              </a>
            </div>

            {/* Features */}
            <ul className="mt-4 space-y-3 text-left pl-5">
              {plan.features.map((f, idx) => (
                <li key={idx} className="flex items-center space-x-3">
                  {f.included ? (
                    <IoCheckmark className="text-green-500 w-6 h-6" />
                  ) : (
                    <IoCloseSharp className="text-red-500 w-6 h-6" />
                  )}
                  <span className="text-blue-900">{f.text}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Memberships;
