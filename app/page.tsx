import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50/80 via-accent-50/60 to-spiritual-50/80"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-neutral-900 sm:text-6xl">
              People-Centered Salesforce for{" "}
              <span className="bg-gradient-to-r from-primary-600 via-spiritual-600 to-accent-600 bg-clip-text text-transparent">Large Non-Profits</span>
            </h1>
            <p className="mt-6 text-xl text-neutral-700 max-w-3xl mx-auto">
              Campus Stack delivers bespoke Salesforce solutions for mission-driven organizations that prioritize 
              human connections and community impact. From care coordination to celebration management, 
              our ISV solutions scale with your organization's growth and values.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-3 rounded-lg font-semibold hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Get Started
              </Link>
              <Link
                href="/solutions"
                className="border-2 border-accent-500 text-accent-700 px-8 py-3 rounded-lg font-semibold hover:bg-accent-50 hover:border-accent-600 transition-all duration-300"
              >
                View Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-neutral-900 sm:text-4xl">
              Managed Package Solutions
            </h2>
            <p className="mt-4 text-xl text-neutral-600">
              Certified ISV applications designed for large non-profit organizations focused on people-centered community engagement
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Pastoral Care Card */}
            <div className="bg-white rounded-xl shadow-lg border border-neutral-200 p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-spiritual-100 to-spiritual-200 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-spiritual-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                  Care Coordination Management
                </h3>
                <p className="text-neutral-600 mb-6">
                  Comprehensive system for tracking constituent needs, organizing support networks, 
                  and ensuring systematic care delivery across your community. Popular with faith-based organizations.
                </p>
                <Link
                  href="/solutions/pastoral-care"
                  className="inline-flex items-center text-spiritual-600 hover:text-spiritual-700 font-semibold group-hover:gap-2 transition-all duration-300"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* B'nai Mitzvah Card */}
            <div className="bg-white rounded-xl shadow-lg border border-neutral-200 p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-accent-100 to-accent-200 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                  Celebration & Event Management
                </h3>
                <p className="text-neutral-600 mb-6">
                  End-to-end management for complex celebrations and lifecycle events. 
                  Coordinate scheduling, family engagement, honors, and community participation. Originally designed for Jewish communities.
                </p>
                <Link
                  href="/solutions/bnai-mitzvah"
                  className="inline-flex items-center text-accent-600 hover:text-accent-700 font-semibold group-hover:gap-2 transition-all duration-300"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Membership Management Card */}
            <div className="bg-white rounded-xl shadow-lg border border-neutral-200 p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-success-100 to-success-200 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-success-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                  Membership Lifecycle Management
                </h3>
                <p className="text-neutral-600 mb-6">
                  Complete member journey management including engagement tracking, 
                  communications, giving patterns, and community involvement analytics. Perfect for any mission-driven organization.
                </p>
                <Link
                  href="/solutions/membership"
                  className="inline-flex items-center text-success-600 hover:text-success-700 font-semibold group-hover:gap-2 transition-all duration-300"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Campus Stack Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Why Choose Campus Stack?
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h4m0 0v-5a2 2 0 012-2h2a2 2 0 012 2v5m-6 0V9a2 2 0 012-2h2a2 2 0 012 2v14" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Purpose-Built for Religious Organizations</h3>
              <p className="text-gray-600">
                Our solutions are designed specifically for the unique needs of religious communities,
                not generic CRM tools adapted for your use case.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Built on Salesforce</h3>
              <p className="text-gray-600">
                Leverage the world's #1 CRM platform with enterprise-grade security, 
                reliability, and scalability that your organization can trust.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Expert Support</h3>
              <p className="text-gray-600">
                Our team understands both Salesforce technology and religious organization needs,
                providing expert guidance every step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Ready to Transform Your Organization?
          </h2>
          <p className="mt-4 text-xl text-blue-100">
            Let's discuss how Campus Stack can help streamline your operations and strengthen your community.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 