import { Check } from 'lucide-react'

const includedFeatures = [
  'Private forum access',
  'Member resources',
  'Entry to annual conference',
  'Official member t-shirt',
]

export default function Upgrade() {
  return (
    <div className="bg-slate-950 p-28 text-white h-screen">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
        <div className="mx-auto max-w-2xl sm:text-center ">
          <h2 className="text-3xl font-bold tracking-tight  sm:text-4xl">
            <br />Simple no-tricks pricing</h2>
          <p className="mt-6 text-lg leading-8 ">
            Get started with our all-in-one plan and unlock the full experience today!
          </p>
        </div>
        <div className="mx-auto max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight ">Lifetime membership</h3>
            <p className="mt-6 text-base leading-7 ">
              Unlock the full potential of our platform with our simple, all-in-one plan. Designed to provide you with everything you need, this plan gives you access to all features, premium support, and regular updates. No surprises, no hidden costs—just a seamless experience built to help you achieve your goals. Get started today and experience the best we have to offer at a transparent price.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-lg font-semibold leading-6 text-indigo-600">What’s included</h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6  sm:grid-cols-2 sm:gap-6"
            >
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <Check aria-hidden="true" className="h-6 w-5 flex-none text-indigo-600" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-black py-10 text-center ring-1 ring-inset  lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold ">Pay once, own it forever</p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight ">$349</span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-green-500 ">USD</span>
                </p>
                <a
                  href="#"
                  className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get access
                </a>
                <p className="mt-6 text-xs leading-5 text-white">
                  Invoices and receipts available for easy company reimbursement
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
