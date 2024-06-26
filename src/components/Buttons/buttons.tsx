import Link from "next/link";

export function Buttons() {
  return (
    <div className="bg-sky-700 pb-10">
      <h1 className="text-center font-Exo py-10 text-5xl text-slate-300">APORTE ÚNICO</h1>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center overflow-hidden">
          <div className="px-6">
            <Link href="https://mpago.la/2boa9FF ">
              <button className="w-full relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
                <span className="relative px-10 py-5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0 text-3xl md:text-5xl text-center w-full text-white">
                  $500
                </span>
              </button>
            </Link>
          </div>
          <div className="px-6">
            <Link href="https://mpago.la/2Y22R3j">
              <button className="w-full relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
                <span className="relative px-10 py-5 transition-all ease-in duration-7 bg-gray-900 rounded-md group-hover:bg-opacity-0 text-3xl md:text-5xl w-full text-white">
                  $1000
                </span>
              </button>
            </Link>
          </div>
          <div className="px-6">
            <Link href="https://mpago.la/1dQpGCj">
              <button className="w-full relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
                <span className="w-full relative px-10 py-5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0 text-3xl md:text-5xl text-white">
                  $2000
                </span>
              </button>
            </Link>
          </div>
          <div className="px-6">
            <Link href="https://mpago.la/1dQpGCj">
              <button className="w-full relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
                <span className="w-full relative px-10 py-5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0 text-3xl md:text-5xl text-white">
                  $5000
                </span>
              </button>
            </Link>
          </div>
          <div className="col-span-1 md:col-span-2 px-5">
            <Link href="https://mpago.la/2xxzFqb ">
              <button className="w-full relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
                <span className="w-full relative px-10 py-5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0 text-3xl md:text-5xl text-white">
                  $10000
                </span>
                </button>
              </Link>
          </div>
          <div className="col-span-1 md:col-span-2 px-5">
            <button className="w-full relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-800 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
              <span className="w-full relative px-10 py-5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0 text-2xl font-Exo text-white">
                Alias: Competenciamexico
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Buttons;
