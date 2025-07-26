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
      <section className="gradient-hero py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50/80 via-accent-50/60 to-spiritual-50/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-primary-100/80 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              Certified Salesforce ISV Partner
            </div>
            <h1 className="text-4xl font-extrabold text-neutral-900 sm:text-6xl">
              Contact <span className="bg-gradient-to-r from-primary-600 via-spiritual-600 to-accent-600 bg-clip-text text-transparent">Campus Stack</span>
            </h1>
            <p className="mt-6 text-xl text-neutral-700 max-w-3xl mx-auto">
              Ready to transform your religious organization with our certified Salesforce ISV solutions? 
              Available on the AppExchange, we're here to help you get started and answer any questions you may have.
            </p>
          </div>
        </div>
      </section>

      {/* ISV Partnership & AppExchange Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 via-spiritual-600 to-accent-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white mb-12">
            <h2 className="text-3xl font-bold mb-4">Certified Salesforce ISV Solutions</h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto mb-8">
              Campus Stack is a certified Independent Software Vendor (ISV) partner with Salesforce. 
              All our applications are available on the official AppExchange marketplace.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pastoral Care AppExchange */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-spiritual-500/20 rounded-lg mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-3">Pastoral Care</h3>
              <p className="text-primary-100 mb-4">Comprehensive care management system</p>
              <a
                href="https://appexchange.salesforce.com/appxListingDetail?listingId=PASTORAL_CARE_LISTING_ID"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-white bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg font-medium transition-all duration-300"
              >
                View on AppExchange
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* B'nai Mitzvah AppExchange */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-500/20 rounded-lg mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-3">B'nai Mitzvah</h3>
              <p className="text-primary-100 mb-4">Complete celebration management</p>
              <a
                href="https://appexchange.salesforce.com/appxListingDetail?listingId=BNAI_MITZVAH_LISTING_ID"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-white bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg font-medium transition-all duration-300"
              >
                View on AppExchange
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* Membership AppExchange */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-success-500/20 rounded-lg mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-3">Membership Management</h3>
              <p className="text-primary-100 mb-4">Complete lifecycle management</p>
              <a
                href="https://appexchange.salesforce.com/appxListingDetail?listingId=MEMBERSHIP_LISTING_ID"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-white bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg font-medium transition-all duration-300"
              >
                View on AppExchange
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
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