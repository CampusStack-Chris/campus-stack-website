import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consulting Services - Campus Stack",
  description: "Bespoke Salesforce consulting for large non-profit organizations. Strategic implementation, custom development, and people-centered technology solutions.",
};

export default function ConsultingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50/80 via-spiritual-50/60 to-accent-50/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-accent-100/80 text-accent-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
              </svg>
              Bespoke Non-Profit Technology Consulting
            </div>
            <h1 className="text-4xl font-extrabold text-neutral-900 sm:text-6xl">
              Strategic Salesforce{" "}
              <span className="bg-gradient-to-r from-accent-600 via-primary-600 to-spiritual-600 bg-clip-text text-transparent">Consulting</span>
            </h1>
            <p className="mt-6 text-xl text-neutral-700 max-w-4xl mx-auto">
              We partner with large non-profit organizations to design and implement 
              people-centered Salesforce solutions that scale with your mission. 
              From strategic planning to custom development, we deliver technology that strengthens human connections.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-accent-600 to-accent-700 text-white px-8 py-3 rounded-lg font-semibold hover:from-accent-700 hover:to-accent-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Schedule Strategy Session
              </Link>
              <Link
                href="/solutions"
                className="border-2 border-primary-500 text-primary-700 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 hover:border-primary-600 transition-all duration-300"
              >
                View Our Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-neutral-900 sm:text-4xl">
              Our Consulting Approach
            </h2>
            <p className="mt-4 text-xl text-neutral-600 max-w-3xl mx-auto">
              We combine deep non-profit sector expertise with advanced Salesforce capabilities 
              to create technology solutions that truly serve your mission and constituents.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* Discovery & Strategy */}
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">Discovery & Strategy</h3>
              <p className="text-neutral-600 mb-6">
                We begin by deeply understanding your organization's mission, stakeholder needs, 
                and current processes. Our strategic assessment identifies opportunities for 
                technology to amplify your impact.
              </p>
              <ul className="text-sm text-neutral-500 space-y-2">
                <li>• Stakeholder interviews and needs analysis</li>
                <li>• Current state technology assessment</li>
                <li>• Mission-aligned solution design</li>
                <li>• ROI and impact modeling</li>
              </ul>
            </div>

            {/* Implementation & Development */}
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-spiritual-100 to-spiritual-200 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-spiritual-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">Implementation & Development</h3>
              <p className="text-neutral-600 mb-6">
                Our certified Salesforce experts implement solutions using proven methodologies. 
                We leverage our managed packages where appropriate and create custom solutions 
                for unique organizational needs.
              </p>
              <ul className="text-sm text-neutral-500 space-y-2">
                <li>• Agile implementation methodology</li>
                <li>• Custom Salesforce development</li>
                <li>• Managed package deployment</li>
                <li>• Integration with existing systems</li>
              </ul>
            </div>

            {/* Training & Optimization */}
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-success-100 to-success-200 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-success-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">Training & Optimization</h3>
              <p className="text-neutral-600 mb-6">
                We ensure your team is empowered to maximize your technology investment. 
                Our training programs and ongoing optimization services help you continuously 
                improve and adapt to changing needs.
              </p>
              <ul className="text-sm text-neutral-500 space-y-2">
                <li>• Role-based user training programs</li>
                <li>• Administrator certification support</li>
                <li>• Performance monitoring and optimization</li>
                <li>• Ongoing strategic consultation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-neutral-900 sm:text-4xl">
              Consulting Service Areas
            </h2>
            <p className="mt-4 text-xl text-neutral-600">
              Comprehensive Salesforce expertise tailored for mission-driven organizations
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Strategic Planning */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-3">Strategic Technology Planning</h3>
                  <p className="text-neutral-600 mb-4">
                    Long-term technology roadmaps aligned with organizational growth and mission evolution.
                  </p>
                  <ul className="text-sm text-neutral-500 space-y-1">
                    <li>• Multi-year platform strategy</li>
                    <li>• Budget planning and ROI analysis</li>
                    <li>• Vendor evaluation and selection</li>
                    <li>• Change management planning</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Custom Development */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-spiritual-100 rounded-lg">
                    <svg className="w-6 h-6 text-spiritual-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-3">Custom Salesforce Development</h3>
                  <p className="text-neutral-600 mb-4">
                    Bespoke solutions built to address your organization's unique processes and requirements.
                  </p>
                  <ul className="text-sm text-neutral-500 space-y-1">
                    <li>• Custom objects and workflows</li>
                    <li>• Lightning component development</li>
                    <li>• API integrations and data migration</li>
                    <li>• Advanced automation and AI</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Data & Analytics */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-accent-100 rounded-lg">
                    <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"/>
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-3">Data Strategy & Analytics</h3>
                  <p className="text-neutral-600 mb-4">
                    Transform your data into actionable insights that drive better decision-making and impact measurement.
                  </p>
                  <ul className="text-sm text-neutral-500 space-y-1">
                    <li>• Data architecture and governance</li>
                    <li>• Advanced reporting and dashboards</li>
                    <li>• Impact measurement frameworks</li>
                    <li>• Predictive analytics and AI insights</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Change Management */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-success-100 rounded-lg">
                    <svg className="w-6 h-6 text-success-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"/>
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-3">Organizational Change Management</h3>
                  <p className="text-neutral-600 mb-4">
                    Ensure successful technology adoption through comprehensive change management and training programs.
                  </p>
                  <ul className="text-sm text-neutral-500 space-y-1">
                    <li>• Stakeholder engagement strategies</li>
                    <li>• Training program development</li>
                    <li>• User adoption measurement</li>
                    <li>• Continuous improvement processes</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-neutral-900 sm:text-4xl">
                Why Partner with Campus Stack?
              </h2>
              <p className="mt-4 text-lg text-neutral-600">
                We bring deep sector expertise, proven methodologies, and a commitment to 
                people-centered technology solutions that truly serve your mission.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="inline-flex items-center justify-center w-8 h-8 bg-primary-100 rounded-full">
                      <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-neutral-900">Non-Profit Sector Expertise</h3>
                    <p className="text-neutral-600">Deep understanding of non-profit operations, funding models, and stakeholder dynamics.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="inline-flex items-center justify-center w-8 h-8 bg-spiritual-100 rounded-full">
                      <svg className="w-4 h-4 text-spiritual-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-neutral-900">Certified Salesforce ISV</h3>
                    <p className="text-neutral-600">Proven track record with Salesforce-certified managed packages and custom solutions.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="inline-flex items-center justify-center w-8 h-8 bg-accent-100 rounded-full">
                      <svg className="w-4 h-4 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-neutral-900">People-Centered Approach</h3>
                    <p className="text-neutral-600">Technology solutions designed to strengthen human connections and community engagement.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="inline-flex items-center justify-center w-8 h-8 bg-success-100 rounded-full">
                      <svg className="w-4 h-4 text-success-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-neutral-900">Long-Term Partnership</h3>
                    <p className="text-neutral-600">Ongoing support and optimization to ensure your technology grows with your organization.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 lg:mt-0">
              <div className="bg-gradient-to-r from-primary-600 via-spiritual-600 to-accent-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="text-primary-100 mb-6">
                  Schedule a strategy session to discuss your organization's technology needs and 
                  explore how our consulting services can accelerate your mission impact.
                </p>
                <div className="space-y-4">
                  <Link
                    href="/contact"
                    className="block w-full bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold text-center hover:bg-neutral-50 transition-colors duration-300"
                  >
                    Schedule Strategy Session
                  </Link>
                  <Link
                    href="/solutions"
                    className="block w-full border-2 border-white text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-white/10 transition-colors duration-300"
                  >
                    Explore Our Solutions
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-neutral-900 sm:text-4xl">
              Our Engagement Process
            </h2>
            <p className="mt-4 text-xl text-neutral-600">
              A proven methodology for delivering transformational technology solutions
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 text-white rounded-full text-xl font-bold mb-4">1</div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">Discovery</h3>
              <p className="text-neutral-600">Deep dive into your organization's needs, goals, and current state.</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-spiritual-600 text-white rounded-full text-xl font-bold mb-4">2</div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">Strategy</h3>
              <p className="text-neutral-600">Develop comprehensive technology strategy and implementation roadmap.</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-600 text-white rounded-full text-xl font-bold mb-4">3</div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">Implementation</h3>
              <p className="text-neutral-600">Execute solution deployment with agile methodology and continuous feedback.</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-success-600 text-white rounded-full text-xl font-bold mb-4">4</div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">Optimization</h3>
              <p className="text-neutral-600">Ongoing support, training, and continuous improvement for maximum impact.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 