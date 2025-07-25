import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us & About Campus Stack",
  description: "Get in touch with Campus Stack to learn more about our Salesforce solutions for religious organizations. See customer testimonials and schedule a demo.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-6xl">
              Contact <span className="text-blue-600">Campus Stack</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your religious organization with specialized Salesforce solutions? 
              We're here to help you get started and answer any questions you may have.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Get Started Today</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-gray-700">
                    Organization Name *
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    required
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                    Your Role
                  </label>
                  <select
                    id="role"
                    name="role"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select your role</option>
                    <option value="pastor">Pastor/Rabbi/Religious Leader</option>
                    <option value="administrator">Administrator</option>
                    <option value="it">IT Director</option>
                    <option value="volunteer">Volunteer</option>
                    <option value="board">Board Member</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-gray-700">
                    Primary Interest
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select primary interest</option>
                    <option value="pastoral-care">Pastoral Care for Salesforce</option>
                    <option value="bnai-mitzvah">B'nai Mitzvah for Salesforce</option>
                    <option value="membership">Membership Management</option>
                    <option value="all">All Products</option>
                    <option value="consultation">General Consultation</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    How can we help you?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Tell us about your organization's needs and goals..."
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Information */}
            <div className="mt-12 lg:mt-0">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Get in Touch</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Schedule a Demo</h3>
                  <p className="text-gray-600 mb-4">
                    See our solutions in action with a personalized demo tailored to your organization's needs.
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Book a Demo Call
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Email Support</h3>
                  <p className="text-gray-600 mb-2">For general inquiries:</p>
                  <a href="mailto:info@campus-stack.com" className="text-blue-600 hover:text-blue-700">
                    info@campus-stack.com
                  </a>
                  <p className="text-gray-600 mb-2 mt-4">For technical support:</p>
                  <a href="mailto:support@campus-stack.com" className="text-blue-600 hover:text-blue-700">
                    support@campus-stack.com
                  </a>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Business Hours</h3>
                  <div className="text-gray-600">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                    <p>Saturday - Sunday: Closed</p>
                    <p className="mt-2 text-sm">Emergency support available for critical issues</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              What Our Customers Say
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Religious organizations worldwide trust Campus Stack for their Salesforce solutions
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  TBE
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Temple Beth El</h4>
                  <p className="text-gray-600 text-sm">Reformed Synagogue</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "Campus Stack's B'nai Mitzvah solution has transformed how we manage our students' journeys. 
                The automation and family coordination features have saved us countless hours while improving 
                the experience for our families."
              </p>
              <p className="text-sm text-gray-500">- Rabbi Sarah Cohen, Senior Rabbi</p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                  STC
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">St. Thomas Church</h4>
                  <p className="text-gray-600 text-sm">Episcopal Parish</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "The Pastoral Care module has revolutionized how we support our congregation. 
                We can now ensure no member goes without care, and our volunteer coordination 
                has never been more efficient."
              </p>
              <p className="text-sm text-gray-500">- Rev. Michael Johnson, Rector</p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                  MC
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Masjid Community</h4>
                  <p className="text-gray-600 text-sm">Islamic Center</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "The Membership Management system has streamlined our operations dramatically. 
                Automated billing, donation tracking, and member communications have improved 
                our financial management and community engagement."
              </p>
              <p className="text-sm text-gray-500">- Imam Abdullah Rahman, Director</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                About Campus Stack
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Campus Stack was founded with a simple mission: to help religious organizations 
                leverage the power of modern technology to strengthen their communities and 
                fulfill their spiritual missions more effectively.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-base text-gray-700">
                      <strong>Purpose-built solutions</strong> designed specifically for religious organizations
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-base text-gray-700">
                      <strong>Expert support</strong> from teams who understand both technology and ministry
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-base text-gray-700">
                      <strong>Proven track record</strong> serving diverse religious communities worldwide
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-10 lg:mt-0">
              <div className="bg-blue-50 rounded-lg p-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Our Commitment</h3>
                <p className="text-gray-600 mb-4">
                  We believe technology should serve your mission, not complicate it. That's why 
                  every solution we build is:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>Intuitive:</strong> Easy to learn and use for staff and volunteers</li>
                  <li>• <strong>Secure:</strong> Enterprise-grade security for sensitive member data</li>
                  <li>• <strong>Scalable:</strong> Grows with your organization's needs</li>
                  <li>• <strong>Supported:</strong> Comprehensive training and ongoing support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-xl text-blue-100">
            Join religious organizations worldwide who trust Campus Stack for their Salesforce solutions
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="#"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Schedule Demo
            </Link>
            <Link
              href="/"
              className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              View Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 