import React from "react";
import { BiAnchor } from "react-icons/bi";


function AllInOne() {
  return (
    <>
      <div className="my-16 w-[90%] mx-auto">
        <h1 className="text-center capitalize font-slant font-extrabold text-black mb-6 text-2xl tracking-wider md:text-4xl">
          All-in-one platform
        </h1>
        <p className="w-[90%] mx-auto tracking-wide leading-7">
          Detailed information about cloud costs may not be easily accessible. A
          customer might search across regions, accounts and numerous attached
          cloud services to calculate the total cost for just one individual
          service, such as backup snapshots.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 mt-16 gap-2">
          <section className="mb-6">
            <div className="flex space-between">
              {/* icon */}
              <div className="mr-4 text-white bg-purple-500 w-12 px-3 py-5  h-4 flex items-center rounded-full">
                <BiAnchor />
              </div>
              {/* message */}
              <div>
                <h1 className="text-lg">Notification</h1>
                <p className="text-sm">
                  Tools can help identify a more efficient meaning less
                  expensive VM instance for the workload you want to run.
                </p>
              </div>
            </div>
          </section>
          <section className="mb-6">
            <div className="flex space-between">
              {/* icon */}
              <div className="mr-4 text-white bg-purple-500 w-12 px-3 py-5  h-4 flex items-center rounded-full">
                <BiAnchor />
              </div>
              {/* message */}
              <div>
                <h1 className="text-lg">Weight</h1>
                <p className="text-sm">
                  Tools can help identify a more efficient meaning less
                  expensive VM instance for the workload you want to run.
                </p>
              </div>
            </div>
          </section>
          <section className="mb-6">
            <div className="flex space-between">
              {/* icon */}
              <div className="mr-4 text-white bg-purple-500 w-12 px-3 py-5  h-4 flex items-center rounded-full">
                <BiAnchor />
              </div>
              {/* message */}
              <div>
                <h1 className="text-lg">Kinetic</h1>
                <p className="text-sm">
                  Tools can help identify a more efficient meaning less
                  expensive VM instance for the workload you want to run.
                </p>
              </div>
            </div>
          </section>
          <section className="mb-6">
            <div className="flex space-between">
              {/* icon */}
              <div className="mr-4 text-white bg-purple-500 w-12 px-3 py-5  h-4 flex items-center rounded-full">
                <BiAnchor />
              </div>
              {/* message */}
              <div>
                <h1 className="text-lg">Shipping</h1>
                <p className="text-sm">
                  Tools can help identify a more efficient meaning less
                  expensive VM instance for the workload you want to run.
                </p>
              </div>
            </div>
          </section>
          <section className="mb-6">
            <div className="flex space-between">
              {/* icon */}
              <div className="mr-4 text-white bg-purple-500 w-12 px-3 py-5  h-4 flex items-center rounded-full">
                <BiAnchor />
              </div>
              {/* message */}
              <div>
                <h1 className="text-lg">Measurement</h1>
                <p className="text-sm">
                  Tools can help identify a more efficient meaning less
                  expensive VM instance for the workload you want to run.
                </p>
              </div>
            </div>
          </section>
          <section className="mb-6">
            <div className="flex space-between">
              {/* icon */}
              <div className="mr-4 text-white bg-purple-500 w-12 px-3 py-5  h-4 flex items-center rounded-full">
                <BiAnchor />
              </div>
              {/* message */}
              <div>
                <h1 className="text-lg">English Rose</h1>
                <p className="text-sm">
                  Tools can help identify a more efficient meaning less
                  expensive VM instance for the workload you want to run.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default AllInOne;
