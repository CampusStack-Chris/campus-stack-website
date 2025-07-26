import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pastoral Care for Salesforce",
  description: "Comprehensive pastoral care management system built on Salesforce. Track member needs, coordinate support, and ensure holistic care for your community.",
};

export default function PastoralCarePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-spiritual-50/80 via-primary-50/60 to-accent-50/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-spiritual-100/80 text-spiritual-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              Certified Salesforce ISV Partner
            </div>
            <h1 className="text-4xl font-extrabold text-neutral-900 sm:text-6xl">
              Pastoral Care for{" "}
              <span className="bg-gradient-to-r from-spiritual-600 via-primary-600 to-accent-600 bg-clip-text text-transparent">Salesforce</span>
            </h1>
            <p className="mt-6 text-xl text-neutral-700 max-w-3xl mx-auto">
              Transform your pastoral care ministry with our certified Salesforce application. 
              Available on the AppExchange, our ISV solution helps religious organizations track member needs, 
              coordinate support, and ensure no one in your community goes without care.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <a
                href="https://appexchange.salesforce.com/appxListingDetail?listingId=PASTORAL_CARE_LISTING_ID"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-spiritual-600 to-spiritual-700 text-white px-8 py-3 rounded-lg font-semibold hover:from-spiritual-700 hover:to-spiritual-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Get on AppExchange
              </a>
              <Link
                href="/contact"
                className="border-2 border-accent-500 text-accent-700 px-8 py-3 rounded-lg font-semibold hover:bg-accent-50 hover:border-accent-600 transition-all duration-300"
              >
                Request Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ISV Partnership Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-spiritual-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Certified Salesforce ISV Partner</h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto mb-8">
              Campus Stack is a certified Independent Software Vendor (ISV) partner with Salesforce. 
              Our applications are rigorously tested, security-reviewed, and optimized for the Salesforce platform.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-lg mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Certified & Secure</h3>
                <p className="text-primary-100">Security reviewed and approved by Salesforce</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-lg mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">AppExchange Listed</h3>
                <p className="text-primary-100">Available in the official Salesforce marketplace</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-lg mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Native Integration</h3>
                <p className="text-primary-100">Built specifically for Salesforce platform</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Comprehensive Pastoral Care Management
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Every tool you need to provide compassionate, organized care to your community
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Member Care Tracking */}
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Member Care Tracking</h3>
                <p className="mt-2 text-base text-gray-500">
                  Maintain comprehensive records of member care needs, spiritual support requests, 
                  and pastoral interventions with complete confidentiality and security.
                </p>
              </div>
            </div>

            {/* Visit Coordination */}
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Hospital & Home Visits</h3>
                <p className="mt-2 text-base text-gray-500">
                  Schedule and coordinate hospital visits, home visits, and care appointments. 
                  Track visit history and ensure timely follow-up care.
                </p>
              </div>
            </div>

            {/* Crisis Response */}
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Crisis Response System</h3>
                <p className="mt-2 text-base text-gray-500">
                  Rapid response protocols for family emergencies, health crises, and bereavement. 
                  Coordinate immediate support and long-term care planning.
                </p>
              </div>
            </div>

            {/* Prayer Requests */}
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Prayer Request Management</h3>
                <p className="mt-2 text-base text-gray-500">
                  Centralize prayer requests with appropriate privacy controls. 
                  Coordinate prayer teams and track spiritual support initiatives.
                </p>
              </div>
            </div>

            {/* Care Team Coordination */}
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Care Team Coordination</h3>
                <p className="mt-2 text-base text-gray-500">
                  Coordinate volunteers, lay ministers, and professional counselors. 
                  Assign care responsibilities and track team member contributions.
                </p>
              </div>
            </div>

            {/* Confidential Notes */}
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Secure Documentation</h3>
                <p className="mt-2 text-base text-gray-500">
                  Maintain confidential pastoral notes with role-based access controls. 
                  Ensure sensitive information is protected while enabling effective care coordination.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Transform Your Pastoral Ministry
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-lg mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">No One Falls Through the Cracks</h3>
              <p className="text-gray-600">
                Systematic tracking ensures every member receives appropriate care and follow-up, 
                preventing pastoral oversights and missed opportunities for support.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-lg mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Enhanced Team Collaboration</h3>
              <p className="text-gray-600">
                Enable seamless coordination between pastors, volunteers, and professional counselors 
                while maintaining appropriate confidentiality boundaries.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-lg mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Insightful Reporting</h3>
              <p className="text-gray-600">
                Understand care patterns, identify trends, and measure the impact of your pastoral ministry 
                with comprehensive but confidential reporting tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pastoral Care Philosophy */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h3 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Holistic Care for Modern Communities
              </h3>
              <p className="mt-4 text-lg text-gray-500">
                Pastoral care in modern religious organizations requires balancing traditional compassion 
                with contemporary organizational needs. Our system supports this balance by providing:
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
                      <strong>Personalized care plans</strong> that address individual spiritual, emotional, and practical needs
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
                      <strong>Proactive outreach</strong> to identify and address member needs before they become crises
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
                      <strong>Community integration</strong> that connects members with appropriate support networks
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-10 lg:mt-0">
              <div className="bg-blue-50 rounded-lg p-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Essential Pastoral Functions</h4>
                <p className="text-gray-600 mb-4">
                  Our system supports all core pastoral care functions:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>Healing:</strong> Support during illness and recovery</li>
                  <li>• <strong>Sustaining:</strong> Ongoing spiritual and emotional support</li>
                  <li>• <strong>Guiding:</strong> Spiritual direction and counseling</li>
                  <li>• <strong>Reconciling:</strong> Conflict resolution and restoration</li>
                  <li>• <strong>Nurturing:</strong> Growth in faith and community</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Strengthen Your Pastoral Ministry Today
          </h2>
          <p className="mt-4 text-xl text-blue-100">
            Discover how Campus Stack can help you provide more effective, organized, and compassionate care
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Schedule a Demo
            </Link>
            <Link
              href="/"
              className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 