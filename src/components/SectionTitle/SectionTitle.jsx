import React from 'react';

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className='mx-auto text-center mt-16 mb-12 md:w-4/12'>
      <p className='text-yellow-500 mb-3'>{subHeading}</p>
      <h2 className='text-4xl border-y-4 py-4'>{heading}</h2>
    </div>
  );
};

export default SectionTitle;
