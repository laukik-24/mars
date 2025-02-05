import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { RainbowButton } from "./rainbow-button";
import { useRouter } from "next/navigation";

const navigation = [
  { name: "Team", href: "#", current: true },
  { name: "Projects", href: "#", current: true },
  { name: "Calendar", href: "#", current: true },
];

function classNames(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/login");
  };

  return (
    <Disclosure as="nav" className="bg-transparent sticky top-0 z-50">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="size-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="size-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="shrink-0 items-center hidden lg:block">
                  <Image
                    alt="Your Company"
                    src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                    width={32}
                    height={32}
                    className="h-8 w-auto"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        aria-current={item.current ? "page" : undefined}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              {/* Right Section: Login/Sign Up Buttons */}
              <div className="absolute inset-y-0 right-0 flex items-center gap-4 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <RainbowButton onClick={handleLogin}>
                  Login/SignUp
                </RainbowButton>
              </div>
            </div>
          </div>

          <DisclosurePanel className="sm:hidden">
            {({ close }) => (
              <div
                className={`fixed inset-y-0 left-0 w-full bg-black p-4 transform transition-transform duration-300 ease-in-out ${
                  open ? "translate-x-0" : "-translate-x-full"
                }`}
              >
                <div className="flex justify-end">
                  <button
                    onClick={() => close()}
                    className="text-gray-400 hover:text-white"
                  >
                    <XMarkIcon className="size-6" aria-hidden="true" />
                  </button>
                </div>
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white flex justify-center mt-8 text-center"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            )}
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}

// import { Disclosure, DisclosureButton } from "@headlessui/react";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
// import Image from "next/image";
// import { RainbowButton } from "./rainbow-button";
// import { useRouter } from "next/navigation";

// const navigation = [
//   { name: "Team", href: "#", current: true },
//   { name: "Projects", href: "#", current: true },
//   { name: "Calendar", href: "#", current: true },
// ];

// function classNames(...classes: (string | undefined | null | false)[]) {
//   return classes.filter(Boolean).join(" ");
// }

// export default function Navbar() {
//   const router = useRouter();

//   const handleLogin = () => {
//     router.push("/login");
//   };
//   return (
//     <Disclosure as="nav" className="bg-transparent sticky top-0 z-50">
//       <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//         <div className="relative flex h-16 items-center justify-between">
//           <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//             {/* Mobile menu button */}
//             <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
//               <span className="absolute -inset-0.5" />
//               <span className="sr-only">Open main menu</span>
//               <Bars3Icon
//                 aria-hidden="true"
//                 className="block size-6 group-data-open:hidden"
//               />
//               <XMarkIcon
//                 aria-hidden="true"
//                 className="hidden size-6 group-data-open:block"
//               />
//             </DisclosureButton>
//           </div>
//           <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
//             <div className="shrink-0 items-center hidden lg:block">
//               <Image
//                 alt="Your Company"
//                 src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
//                 width={32}
//                 height={32}
//                 className="h-8 w-auto"
//               />
//             </div>
//             <div className="hidden sm:ml-6 sm:block">
//               <div className="flex space-x-4">
//                 {navigation.map((item) => (
//                   <a
//                     key={item.name}
//                     href={item.href}
//                     aria-current={item.current ? "page" : undefined}
//                     className={classNames(
//                       item.current
//                         ? "bg-gray-900 text-white"
//                         : "text-gray-300 hover:bg-gray-700 hover:text-white",
//                       "rounded-md px-3 py-2 text-sm font-medium"
//                     )}
//                   >
//                     {item.name}
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>
//           {/* Right Section: Login/Sign Up Buttons */}
//           <div className="absolute inset-y-0 right-0 flex items-center gap-4 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
//                 <RainbowButton onClick={handleLogin}>Login/SignUp</RainbowButton>
//           </div>
//         </div>
//       </div>

//       <Disclosure.Panel className="sm:hidden">
//         <div className="space-y-1 px-2 pt-2 pb-3">
//           {navigation.map((item) => (
//             <DisclosureButton
//               key={item.name}
//               as="a"
//               href={item.href}
//               aria-current={item.current ? "page" : undefined}
//               className={classNames(
//                 item.current
//                   ? "bg-gray-900 text-white"
//                   : "text-gray-300 hover:bg-gray-700 hover:text-white",
//                 "block rounded-md px-3 py-2 text-base font-medium"
//               )}
//             >
//               {item.name}
//             </DisclosureButton>
//           ))}
//         </div>
//       </Disclosure.Panel>
//     </Disclosure>
//   );
// }
