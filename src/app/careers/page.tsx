'use client';

import { useState } from 'react';
import Link from 'next/link';
import Footer from '@/app/homepage/components/Footer';

interface JobListing {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  responsibilities: string[];
  qualifications: string[];
}

const CareersPage = () => {
  const [selectedDepartment, setSelectedDepartment] = useState<string>('all');
  const [selectedJob, setSelectedJob] = useState<JobListing | null>(null);

  const departments = ['all', 'Editorial', 'Technical', 'Marketing', 'Operations'];

  const jobListings: JobListing[] = [
  {
    id: '1',
    title: 'Senior Tech Writer',
    department: 'Editorial',
    location: 'San Francisco, CA / Remote',
    type: 'Full-time',
    experience: '3-5 years',
    description: 'Join our editorial team to create compelling tech content, product reviews, and industry analysis.',
    responsibilities: [
    'Write in-depth product reviews and comparisons',
    'Research and analyze emerging tech trends',
    'Conduct interviews with industry experts',
    'Collaborate with video and social media teams',
    'Maintain editorial standards and voice'],

    qualifications: [
    'Bachelor\'s degree in Journalism, Communications, or related field',
    '3+ years of tech writing experience',
    'Strong understanding of consumer electronics',
    'Excellent research and analytical skills',
    'Portfolio of published tech articles']

  },
  {
    id: '2',
    title: 'Product Testing Specialist',
    department: 'Editorial',
    location: 'San Francisco, CA',
    type: 'Full-time',
    experience: '2-4 years',
    description: 'Hands-on role testing and evaluating the latest gadgets and technology products.',
    responsibilities: [
    'Conduct thorough product testing and benchmarking',
    'Document testing methodologies and results',
    'Collaborate with writers on review content',
    'Maintain testing lab equipment and procedures',
    'Stay current with industry testing standards'],

    qualifications: [
    'Technical background in engineering or related field',
    'Experience with product testing and quality assurance',
    'Strong attention to detail',
    'Familiarity with testing tools and software',
    'Excellent documentation skills']

  },
  {
    id: '3',
    title: 'Full Stack Developer',
    department: 'Technical',
    location: 'Remote',
    type: 'Full-time',
    experience: '4-6 years',
    description: 'Build and maintain our web platform, implementing new features and optimizing performance.',
    responsibilities: [
    'Develop and maintain web applications using Next.js and React',
    'Design and implement RESTful APIs',
    'Optimize website performance and SEO',
    'Collaborate with design and editorial teams',
    'Implement analytics and tracking solutions'],

    qualifications: [
    'Strong proficiency in JavaScript/TypeScript, React, and Next.js',
    '4+ years of full-stack development experience',
    'Experience with database design and optimization',
    'Knowledge of web performance optimization',
    'Familiarity with cloud platforms (AWS, Vercel)']

  },
  {
    id: '4',
    title: 'Social Media Manager',
    department: 'Marketing',
    location: 'San Francisco, CA / Remote',
    type: 'Full-time',
    experience: '3-5 years',
    description: 'Lead our social media strategy across multiple platforms to engage our tech-savvy audience.',
    responsibilities: [
    'Develop and execute social media content strategy',
    'Manage Twitter, TikTok, Pinterest, and emerging platforms',
    'Create engaging content and campaigns',
    'Analyze metrics and optimize performance',
    'Collaborate with editorial team on content distribution'],

    qualifications: [
    'Bachelor\'s degree in Marketing, Communications, or related field',
    '3+ years of social media management experience',
    'Strong understanding of tech and gadget audience',
    'Experience with social media analytics tools',
    'Creative content creation skills']

  }];


  const benefits = [
  {
    icon: '💰',
    title: 'Competitive Salary',
    description: 'Industry-leading compensation packages with performance bonuses'
  },
  {
    icon: '🏥',
    title: 'Health & Wellness',
    description: 'Comprehensive health, dental, and vision insurance'
  },
  {
    icon: '🏠',
    title: 'Remote Flexibility',
    description: 'Work from anywhere with flexible hours'
  },
  {
    icon: '📱',
    title: 'Latest Tech',
    description: 'Access to cutting-edge gadgets for testing and personal use'
  },
  {
    icon: '📚',
    title: 'Learning Budget',
    description: 'Annual budget for courses, conferences, and professional development'
  },
  {
    icon: '✈️',
    title: 'Paid Time Off',
    description: 'Generous PTO policy plus company holidays'
  }];


  const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Senior Tech Writer',
    quote: 'Working at Gadgets Finds has been incredible. I get to test the latest tech and share my insights with millions of readers.',
    avatar: '👩‍💻'
  },
  {
    name: 'Marcus Johnson',
    role: 'Lead Developer',
    quote: 'The team culture is amazing. We\'re constantly innovating and pushing the boundaries of tech journalism.',
    avatar: '👨‍💻'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Product Testing Lead',
    quote: 'Every day is different. From smartphones to smart home devices, I get hands-on with technology that shapes our future.',
    avatar: '👩‍🔬'
  }];


  const filteredJobs = selectedDepartment === 'all' ?
  jobListings :
  jobListings.filter((job) => job.department === selectedDepartment);

  return (
    <div className="min-h-screen bg-brand-dark">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-brand-primary to-purple-600 py-16">
        <div className="container mx-auto px-4">
          <Link href="/homepage" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Join Our Team</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Help shape the future of tech journalism. We're looking for passionate individuals who love technology and storytelling.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Mission & Values */}
        <div className="mb-12 bg-slate-800 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-brand-text-primary mb-6">Our Mission</h2>
          <p className="text-brand-text-secondary text-lg mb-6">
            At Gadgets Finds, we're committed to providing unbiased, comprehensive tech coverage that helps consumers make informed decisions. Our team of passionate tech enthusiasts works together to test, review, and analyze the latest gadgets and innovations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="font-bold text-brand-text-primary mb-2">Innovation</h3>
              <p className="text-sm text-brand-text-secondary">Pushing boundaries in tech journalism</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🤝</div>
              <h3 className="font-bold text-brand-text-primary mb-2">Integrity</h3>
              <p className="text-sm text-brand-text-secondary">Unbiased reviews and editorial independence</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🚀</div>
              <h3 className="font-bold text-brand-text-primary mb-2">Growth</h3>
              <p className="text-sm text-brand-text-secondary">Continuous learning and development</p>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-brand-text-primary mb-6">Why Join Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) =>
            <div key={benefit.title} className="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-colors">
                <div className="text-4xl mb-3">{benefit.icon}</div>
                <h3 className="font-bold text-brand-text-primary mb-2">{benefit.title}</h3>
                <p className="text-sm text-brand-text-secondary">{benefit.description}</p>
              </div>
            )}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-brand-text-primary mb-6">What Our Team Says</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) =>
            <div key={testimonial.name} className="bg-slate-800 rounded-lg p-6">
                <div className="text-5xl mb-4">{testimonial.avatar}</div>
                <p className="text-brand-text-secondary italic mb-4">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold text-brand-text-primary">{testimonial.name}</p>
                  <p className="text-sm text-brand-text-secondary">{testimonial.role}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Job Listings */}
        <div>
          <h2 className="text-3xl font-bold text-brand-text-primary mb-6">Open Positions</h2>
          
          {/* Department Filter */}
          <div className="mb-6 flex flex-wrap gap-3">
            {departments.map((dept) =>
            <button
              key={dept}
              onClick={() => setSelectedDepartment(dept)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              selectedDepartment === dept ?
              'bg-brand-primary text-white' : 'bg-slate-800 text-brand-text-secondary hover:bg-slate-700'}`
              }>
              
                {dept === 'all' ? 'All Departments' : dept}
              </button>
            )}
          </div>

          {/* Job Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredJobs.map((job) =>
            <div key={job.id} className="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-brand-text-primary mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-2 text-sm">
                      <span className="px-3 py-1 bg-brand-primary/20 text-brand-primary rounded-full">
                        {job.department}
                      </span>
                      <span className="px-3 py-1 bg-slate-700 text-brand-text-secondary rounded-full">
                        {job.type}
                      </span>
                      <span className="px-3 py-1 bg-slate-700 text-brand-text-secondary rounded-full">
                        {job.experience}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-brand-text-secondary mb-3">{job.description}</p>
                <div className="flex items-center text-sm text-brand-text-secondary mb-4">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {job.location}
                </div>
                <button
                onClick={() => setSelectedJob(job)}
                className="w-full px-4 py-2 bg-brand-primary hover:bg-purple-600 text-white font-semibold rounded-lg transition-colors">
                
                  View Details
                </button>
              </div>
            )}
          </div>

          {filteredJobs.length === 0 &&
          <div className="text-center py-12">
              <p className="text-brand-text-secondary text-lg">
                No open positions in this department at the moment. Check back soon!
              </p>
            </div>
          }
        </div>

        {/* Application Process */}
        <div className="mt-12 bg-gradient-to-br from-brand-primary/20 to-purple-600/20 rounded-lg p-8 border border-brand-primary/30">
          <h2 className="text-2xl font-bold text-brand-text-primary mb-6">Application Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">
                1
              </div>
              <h3 className="font-bold text-brand-text-primary mb-2">Apply</h3>
              <p className="text-sm text-brand-text-secondary">Submit your application and resume</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">
                2
              </div>
              <h3 className="font-bold text-brand-text-primary mb-2">Review</h3>
              <p className="text-sm text-brand-text-secondary">Our team reviews your application</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">
                3
              </div>
              <h3 className="font-bold text-brand-text-primary mb-2">Interview</h3>
              <p className="text-sm text-brand-text-secondary">Meet with the team</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">
                4
              </div>
              <h3 className="font-bold text-brand-text-primary mb-2">Offer</h3>
              <p className="text-sm text-brand-text-secondary">Join the team!</p>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-brand-text-secondary mb-4">
              Don't see a position that fits? Send us your resume at <a href="mailto:careers@gadgets-finds.com" className="text-brand-primary hover:text-purple-400">careers@gadgets-finds.com</a>
            </p>
          </div>
        </div>
      </div>

      {/* Job Detail Modal */}
      {selectedJob &&
      <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50" onClick={() => setSelectedJob(null)}>
          <div className="bg-slate-800 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="p-6 md:p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-brand-text-primary mb-2">{selectedJob.title}</h2>
                  <div className="flex flex-wrap gap-2 text-sm">
                    <span className="px-3 py-1 bg-brand-primary/20 text-brand-primary rounded-full">
                      {selectedJob.department}
                    </span>
                    <span className="px-3 py-1 bg-slate-700 text-brand-text-secondary rounded-full">
                      {selectedJob.type}
                    </span>
                    <span className="px-3 py-1 bg-slate-700 text-brand-text-secondary rounded-full">
                      {selectedJob.experience}
                    </span>
                  </div>
                </div>
                <button
                onClick={() => setSelectedJob(null)}
                className="text-brand-text-secondary hover:text-brand-text-primary">
                
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-brand-text-primary mb-3">About the Role</h3>
                  <p className="text-brand-text-secondary">{selectedJob.description}</p>
                </div>

                <div>
                  <h3 className="font-bold text-brand-text-primary mb-3">Responsibilities</h3>
                  <ul className="space-y-2">
                    {selectedJob.responsibilities.map((resp, index) =>
                  <li key={index} className="flex items-start text-brand-text-secondary">
                        <svg className="w-5 h-5 mr-2 text-brand-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {resp}
                      </li>
                  )}
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-brand-text-primary mb-3">Qualifications</h3>
                  <ul className="space-y-2">
                    {selectedJob.qualifications.map((qual, index) =>
                  <li key={index} className="flex items-start text-brand-text-secondary">
                        <svg className="w-5 h-5 mr-2 text-brand-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {qual}
                      </li>
                  )}
                  </ul>
                </div>

                <div className="flex items-center text-sm text-brand-text-secondary">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {selectedJob.location}
                </div>

                <div className="pt-4 border-t border-slate-700">
                  <a
                  href={`mailto:careers@gadgets-finds.com?subject=Application for ${selectedJob.title}`}
                  className="block w-full px-6 py-3 bg-brand-primary hover:bg-purple-600 text-white font-semibold rounded-lg transition-colors text-center">
                  
                    Apply for this Position
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
      <Footer />
    </div>);

};

export default CareersPage;