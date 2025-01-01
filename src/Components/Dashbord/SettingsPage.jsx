import { useState } from "react";

function SettingsPage() {
  const [settings, setSettings] = useState({
    name: "",
    email: "",
    secondaryEmail: "",
    phoneNumber: "",
    secondaryPhoneNumber: "",
    billingAddress: "",
    shippingAddress: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSettings((prevSettings) => ({
      ...prevSettings,
      [name]: value,
    }));
  };

  return (
    <div className="flex flex-col space-y-6 p-6">
      <h1 className="text-2xl font-thin">Settings</h1>
      <div>
        <div className="flex flex-col space-y-4">
          <label className="block">
            Name:
            <input
              type="text"
              name="name"
              value={settings.name}
              onChange={handleChange}
              className="input input-bordered w-full mt-2"
              placeholder="Enter your name"
            />
          </label>

          <label className="block">
            Email:
            <input
              type="email"
              name="email"
              value={settings.email}
              onChange={handleChange}
              className="input input-bordered w-full mt-2"
              placeholder="Enter your email"
            />
          </label>

          <label className="block">
            Secondary Email:
            <input
              type="email"
              name="secondaryEmail"
              value={settings.secondaryEmail}
              onChange={handleChange}
              className="input input-bordered w-full mt-2"
              placeholder="Enter your secondary email"
            />
          </label>
          <label className="block">
            Phone Number:
            <input
              type="tel"
              name="phoneNumber"
              value={settings.phoneNumber}
              onChange={handleChange}
              className="input input-bordered w-full mt-2"
              placeholder="Phone Number With country code"
            />
          </label>
          <label className="block">
            Secondary Phone Number:
            <input
              type="tel"
              name="secondaryPhoneNumber"
              value={settings.secondaryPhoneNumber}
              onChange={handleChange}
              className="input input-bordered w-full mt-2"
              placeholder="Secondary Phone number with country code"
            />
          </label>
        </div>
      </div>
      <div>
        <div className="flex flex-col space-y-4">
          <label className="block">
            Billing Address:
            <textarea
              name="billingAddress"
              value={settings.billingAddress}
              onChange={handleChange}
              className="textarea textarea-bordered w-full mt-2"
              placeholder="Enter your billing address"
            />
          </label>
          <label className="block">
            Shipping Address:
            <textarea
              name="shippingAddress"
              value={settings.shippingAddress}
              onChange={handleChange}
              className="textarea textarea-bordered w-full mt-2"
              placeholder="Enter your shipping address"
            />
          </label>
        </div>
      </div>
      <div className="flex justify-end mt-6">
        <button className="btn btn-primary">Save Changes</button>
      </div>
    </div>
  );
}

export default SettingsPage;
