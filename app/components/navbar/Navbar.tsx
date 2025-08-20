import NavPart1 from "./NavPart1"
import NavPart2 from "./NavPart2"

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black backdrop-blur-md border-b border-gray-200/20 dark:border-gray-800/20">
      <div className="flex items-center px-4 sm:px-6 lg:px-5 justify-between py-2 max-w-8xl mx-auto">
        <NavPart1 />
        <NavPart2 />
      </div>
    </div>
  )
}

export default Navbar
