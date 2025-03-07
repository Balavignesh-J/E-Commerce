import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full py-4 bg-blue-800 text-white text-center mt-10">
      <p className="text-lg">&copy; {new Date().getFullYear()} Snap Shop</p>
      <p className="text-sm mt-1">Built with ❤️ using React & Tailwind CSS</p>
      <div className="flex justify-center gap-4 mt-2">
        <a href="#" className="hover:text-blue-300">Privacy Policy</a>
        <a href="#" className="hover:text-blue-300">Terms of Service</a>
      </div>
    </footer>
  )
}
 
export default Footer
