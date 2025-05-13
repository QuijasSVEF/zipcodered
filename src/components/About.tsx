import React from 'react';

export function About() {
  return (
    <div className="bg-gradient-to-b from-white to-primary/5 py-20 sm:py-28 lg:py-32" id="about">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary-dark to-accent-dark text-stroke-1 text-stroke-white" itemProp="name">
            About Our Initiative
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-xl sm:leading-9">
            SB743 is committed to eliminating the funding disparities between California's school districts. Our mission is to guarantee that every student, regardless of their ZIP Code, has access to the essential resources required to succeed and thrive in their education.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-2xl sm:mt-16 lg:mt-20 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-8 sm:gap-y-12 lg:max-w-none lg:grid-cols-2">
            <div className="flex flex-col bg-primary-light/30 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-primary">
              <dt className="text-xl font-bold leading-7 text-primary-dark mb-4" itemProp="description">
                Our Mission
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  To secure sufficient and consistent funding for all California school districts through legislation, ensuring every student has access to the resources necessary for a high-quality education.
                </p>
              </dd>
            </div>
            <div className="flex flex-col bg-primary-light/30 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-primary">
              <dt className="text-xl font-bold leading-7 text-secondary-dark mb-4" itemProp="description">
                Our Vision
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  A thriving California, where every student has the resources to achieve their full potential, driving economic mobility, building generational wealth, and ensuring prosperity for all its citizens.
                </p>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}