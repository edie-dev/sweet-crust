import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../components/ui/Input";
import { BsCake } from "react-icons/bs";

const ORDER_TYPES = ["Cake", "Pastry Box", "Bread Order", "Special Event Order"];

const INITIAL_FORM = {
  name: "",
  email: "",
  phone: "",
  orderType: "",
  details: "",
  eventDate: "",
};

export default function CustomOrder() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Wire up to a real backend/email service later
    console.log("Custom order submitted:", form);
    setSubmitted(true);
    setForm(INITIAL_FORM);
  };

  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-14 lg:py-20">
        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="font-display text-4xl text-brown-900">
            <BsCake className="inline-block text-3xl text-gold" />Custom Order
          </h1>
          <p className="font-body text-brown-900/70 mt-2">
            Have something special in mind? We'd love to bake it for you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <Input
              label="Your Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
            <Input
              label="Email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
            <Input
              label="Phone Number"
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
            />
            <Input
              label="Order Type"
              type="select"
              name="orderType"
              value={form.orderType}
              onChange={handleChange}
              placeholder="Select order type"
              options={ORDER_TYPES}
              required
            />
            <Input
              label="Details"
              type="textarea"
              name="details"
              value={form.details}
              onChange={handleChange}
              placeholder="Tell us about your order (flavor, size, design, message, etc.)"
              required
            />
            <Input
              label="Event Date"
              type="date"
              name="eventDate"
              value={form.eventDate}
              onChange={handleChange}
              required
            />

            <button
              type="submit"
              className="mt-2 rounded-lg bg-brown-700 hover:bg-brown-900 text-cream font-body font-semibold text-sm py-3 px-7 transition-colors"
            >
              Submit Order
            </button>

            {submitted && (
              <p className="font-body text-sm text-green-700 mt-1">
                Thanks! Your custom order request has been received.
              </p>
            )}
          </form>

          {/* Inspiration image + gallery callout */}
          <div className="flex flex-col gap-6">
            <img
              src="/images/gallery/custom floral cake.jfif"
              alt="Floral custom cake"
              className="w-full aspect-[4/5] object-cover rounded-3xl shadow-2xl shadow-brown-900/20"
            />

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="font-display text-lg font-semibold text-brown-900">
                Need inspiration?
              </h3>
              <p className="font-body text-sm text-brown-900/70 mt-1">
                Check out our gallery of custom cakes we've made for our
                lovely customers.
              </p>
              <Link
                to="/shop"
                className="inline-block mt-4 rounded-lg border border-brown-700 text-brown-700 hover:bg-brown-700 hover:text-cream font-body font-semibold text-sm py-2.5 px-6 transition-colors"
              >
                View Gallery
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}