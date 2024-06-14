export default function Footer() {
  return (
    <footer className="py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <h4 className="font-bold text-lg text-green-600">Jobify</h4>
            <p className="mt-2 text-gray-500">© 2024 Jobify. All rights reserved.</p>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#home" className="text-gray-500 hover:text-green-600">
              Home
            </a>
            <a href="#about" className="text-gray-500 hover:text-green-600">
              About
            </a>
            <a href="#contact" className="text-gray-500 hover:text-green-600">
              Contact
            </a>
            <a href="#privacy" className="text-gray-500 hover:text-green-600">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
