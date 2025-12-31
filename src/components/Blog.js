import React from 'react';

const Blog = () => (
  <section id="blog" className="py-32 px-8 bg-latte-light">
    <h2 className="text-4xl md:text-5xl font-serif text-coffee-dark mb-16 text-center">Our Blog</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
      <article className="bg-white rounded-2xl shadow-xl p-10">
        <h3 className="text-2xl font-serif mb-4">Coffee Tips from Our Baristas</h3>
        <p className="mb-6">Learn how to brew the perfect cup at home with Rwandan beans...</p>
        <a href="#" className="text-coffee-medium hover:underline">Read More →</a>
      </article>
      <article className="bg-white rounded-2xl shadow-xl p-10">
        <h3 className="text-2xl font-serif mb-4">Behind the Pizza Deals</h3>
        <p className="mb-6">Why Tuesdays & Thursdays are the best days to gather and share...</p>
        <a href="#" className="text-coffee-medium hover:underline">Read More →</a>
      </article>
    </div>
  </section>
);

export default Blog;    