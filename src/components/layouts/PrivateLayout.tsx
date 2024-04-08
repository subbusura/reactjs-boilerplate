import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Outlet } from "react-router-dom";
import ErrorFallback from "./common/ErrorFallback";
const PrivateLayout = React.memo(() => {
  return (
    <div className="min-h-full bg-[#fafbfd]">
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl max-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <img
                  className="block lg:hidden h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                  alt="Workflow"
                />
                <img
                  className="hidden lg:block h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
                  alt="Workflow"
                />
              </div>
              <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                <a
                  href="#"
                  className="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  aria-current="page"
                >
                  Dashboard{" "}
                </a>

                <a
                  href="#"
                  className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  Team{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="py-10">
        <Outlet />
      </div>
      <ErrorBoundary fallback={<ErrorFallback />}></ErrorBoundary>
    </div>
  );
});

export default PrivateLayout;
