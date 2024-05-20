import Link from "next/link";

export function Buttons() {
  return(
    <div>
      <h1 className="text-center font-mono py-20 text-5xl text-slate-300">APORTE ÚNICO</h1>
      <div className="grid grid-cols-2 md:grid-cols-2 gap-4 text-center overflow-hidden">
        <div className="px-6">
          <Link href="https://mpago.la/1fzGYty">
            <button className="w-full relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
              <span className="relative px-10 py-5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 lg:text-5xl  text-center w-full">
                500$
              </span>
            </button>
          </Link>
        </div>
        <div className="px-6">
          <Link href="https://mpago.la/1ihvrff">
            <button className="w-full relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
              <span className="relative px-10 py-5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 lg:text-5xl w-full">
                1000$
              </span>
            </button>
          </Link>
        </div>
        <div className="px-6">
          <Link href="https://mpago.la/31TnSRt">
            <button className="w-full relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
              <span className="w-full relative px-10 py-5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 lg:text-5xl">
                2000$
              </span>
            </button>
          </Link>
        </div>
        <div className="px-6">
          <Link href="https://mpago.la/32xBDHn">
            <button className="w-full relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
              <span className="w-full relative px-10 py-5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 lg:text-5xl">
                3000$
              </span>
            </button>
          </Link>
        </div>
        <div className="col-span-2 md:col-span-2 px-5">
          <button className="w-70 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
            <span className="w-70 relative px-10 py-5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 text-2xl font-mono">
              Alias: Competenciamexico
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Buttons;
