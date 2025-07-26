import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solutions - Campus Stack",
  description: "Comprehensive Salesforce solutions designed for large non-profit organizations. Specialized managed packages for pastoral care, event management, and membership lifecycle.",
};

export default function SolutionsPage() {
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
              People-Centered{" "}
              <span className="bg-gradient-to-r from-primary-600 via-spiritual-600 to-accent-600 bg-clip-text text-transparent">Salesforce Solutions</span>
            </h1>
            <p className="mt-6 text-xl text-neutral-700 max-w-4xl mx-auto">
              Specialized managed packages designed for large non-profit organizations that prioritize 
              human connections and community engagement. Our certified ISV solutions transform how 
              you manage relationships, events, and organizational growth.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-3 rounded-lg font-semibold hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Schedule Consultation
              </Link>
              <Link
                href="/consulting"
                className="border-2 border-accent-500 text-accent-700 px-8 py-3 rounded-lg font-semibold hover:bg-accent-50 hover:border-accent-600 transition-all duration-300"
              >
                Learn About Consulting
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-neutral-900 sm:text-4xl">
              Managed Package Solutions
            </h2>
            <p className="mt-4 text-xl text-neutral-600 max-w-3xl mx-auto">
              Purpose-built applications available on the Salesforce AppExchange, 
              designed to scale with organizations from hundreds to thousands of constituents.
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
                  Pastoral Care Management
                </h3>
                <p className="text-neutral-600 mb-6">
                  Comprehensive care coordination system for tracking member needs, organizing support networks, 
                  and ensuring systematic care delivery across your community.
                </p>
                <div className="flex flex-col gap-3">
                  <Link
                    href="/solutions/pastoral-care"
                    className="inline-flex items-center justify-center text-spiritual-600 hover:text-spiritual-700 font-semibold group-hover:gap-2 transition-all duration-300"
                  >
                    Learn More
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <a
                    href="https://appexchange.salesforce.com/appxListingDetail?listingId=7fd6b78f-83ec-4602-9515-cf98bc631593"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center text-xs text-neutral-500 hover:text-spiritual-600 transition-colors duration-300"
                  >
                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"/>
                      <path d="M5 5a2 2 0 00-2 2v6a2 2 0 002 2h6a2 2 0 002-2v-1a1 1 0 10-2 0v1H5V7h1a1 1 0 000-2H5z"/>
                    </svg>
                    View on AppExchange
                  </a>
                </div>
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
                  Coordinate scheduling, family engagement, honors, and community participation.
                </p>
                <div className="flex flex-col gap-3">
                  <Link
                    href="/solutions/bnai-mitzvah"
                    className="inline-flex items-center justify-center text-accent-600 hover:text-accent-700 font-semibold group-hover:gap-2 transition-all duration-300"
                  >
                    Learn More
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <a
                    href="https://appexchange.salesforce.com/appxListingDetail?listingId=48aaf335-7340-495a-ae9a-996fd58b3a15"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center text-xs text-neutral-500 hover:text-accent-600 transition-colors duration-300"
                  >
                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"/>
                      <path d="M5 5a2 2 0 00-2 2v6a2 2 0 002 2h6a2 2 0 002-2v-1a1 1 0 10-2 0v1H5V7h1a1 1 0 000-2H5z"/>
                    </svg>
                    View on AppExchange
                  </a>
                </div>
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
                  communications, giving patterns, and community involvement analytics.
                </p>
                <div className="flex flex-col gap-3">
                  <Link
                    href="/solutions/membership"
                    className="inline-flex items-center justify-center text-success-600 hover:text-success-700 font-semibold group-hover:gap-2 transition-all duration-300"
                  >
                    Learn More
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <div className="inline-flex items-center justify-center text-xs text-neutral-400">
                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Coming Q2 2025
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Solutions */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-neutral-900 sm:text-4xl">
              Why Choose Campus Stack Solutions?
            </h2>
            <p className="mt-4 text-xl text-neutral-600">
              Purpose-built for organizations that prioritize human connections and community impact
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-xl mb-6">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">Certified & Secure</h3>
              <p className="text-neutral-600">
                All solutions are Salesforce ISV certified, security-reviewed, and continuously updated 
                to meet enterprise standards.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-100 rounded-xl mb-6">
                <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">Rapid Implementation</h3>
              <p className="text-neutral-600">
                Pre-built managed packages mean faster deployment with proven workflows 
                and best practices built-in from day one.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-success-100 rounded-xl mb-6">
                <svg className="w-8 h-8 text-success-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">People-Centered Design</h3>
              <p className="text-neutral-600">
                Built specifically for organizations focused on human relationships, 
                community building, and meaningful engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 via-spiritual-600 to-accent-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Ready to Transform Your Organization?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Schedule a consultation to discuss how our solutions can scale with your mission and impact.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-neutral-50 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Schedule Consultation
            </Link>
            <Link
              href="/consulting"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Learn About Our Process
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 