
import { Link } from 'react-router-dom'; 
const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header Section */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-indigo-600">SafePay</h1>
          <nav className="space-x-6">
            <a href="#features" className="text-gray-600 hover:text-indigo-500">Features</a>
            <a href="#security" className="text-gray-600 hover:text-indigo-500">Security</a>
            <a href="#splitwise" className="text-gray-600 hover:text-indigo-500">Splitwise</a>
            <a href="#contact" className="text-gray-600 hover:text-indigo-500">Contact</a>
          </nav>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
            <Link to={"/signup"} >
                Get Started
            </Link>
          </button>
        </div>
      </header>

      
      <section className="container mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl font-bold text-gray-800 leading-tight">
          Your Trusted Payment Partner
        </h2>
        <p className="text-gray-600 text-lg mt-4">
          Experience secure, fast, and reliable transactions with features like Splitwise for managing group expenses.
        </p>
        <button className="mt-6 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700">
          <Link to={"/dashboard"}>
            Explore SafePay
          </Link>
        </button>
        <img 
            src="/moneySafe.jpg" 
            alt="SafePay Dashboard" 
            className="mt-10 mx-auto max-w-xl h-auto rounded-lg shadow-lg"
        />

      </section>

      {/* Features Section */}
      <section id="features" className="bg-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Choose SafePay?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg shadow">
              <span className="material-icons text-indigo-600 text-4xl mb-4">payments</span>
              <h3 className="text-xl font-bold text-gray-700">Seamless Transactions</h3>
              <p className="text-gray-600 mt-2">
                Make secure payments with ACID compliance and real-time updates.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow">
              <span className="material-icons text-indigo-600 text-4xl mb-4">group</span>
              <h3 className="text-xl font-bold text-gray-700">Splitwise Integration</h3>
              <p className="text-gray-600 mt-2">
                Manage group expenses with ease and settle debts effortlessly.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow">
              <span className="material-icons text-indigo-600 text-4xl mb-4">verified</span>
              <h3 className="text-xl font-bold text-gray-700">Unmatched Security</h3>
              <p className="text-gray-600 mt-2">
                Enjoy advanced security with JWT authentication and Zod validation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section id="security" className="bg-gray-50 py-16">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <img 
              src="/security.jpg" 
              alt="Security Features" 
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0">
            <h2 className="text-3xl font-bold text-gray-800">Advanced Security</h2>
            <p className="text-gray-600 mt-4">
              SafePay ensures your data and transactions are protected with state-of-the-art technologies like JWT authentication and Zod validation.
            </p>
            <ul className="list-disc list-inside mt-4 text-gray-600">
              <li>End-to-End Encryption</li>
              <li>Real-Time Fraud Detection</li>
              <li>Secure Payment Gateways</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Splitwise Section */}
      <section id="splitwise" className="bg-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Split Expenses with Ease</h2>
          <p className="text-gray-600 mb-6">
            Add friends and family to groups, track shared expenses, and settle debts in just a few clicks.
          </p>
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700">
            Try Splitwise Now
          </button>
        </div>
      </section>

      {/* Footer Section */}
      <footer id="contact" className="bg-indigo-600 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-lg font-bold">Contact Us</h2>
          <p className="mt-4">Have questions? Email us at <a href="mailto:support@safepay.com" className="underline">support@safepay.com</a></p>
          <p className="mt-2">Follow us on:
            <a href="#" className="underline">Twitter</a>, 
            <a href="#" className="underline">Facebook</a>, 
            <a href="#" className="underline">LinkedIn</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
