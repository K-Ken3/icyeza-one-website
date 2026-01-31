import React from 'react';
import FadeInSection from './FadeInSection';

const blogPosts = [
  {
    title: 'Barista Tips: Perfect Home Brew',
    excerpt: 'Discover how to recreate our signature lattes at home with Rwandan beans...',
    img: 'https://texascoffeeschool.com/wp-content/uploads/2024/08/1418-e1723733846245.jpg',
  },
  {
    title: 'Why We Love Pizza Nights',
    excerpt: 'Stories from our Tuesday & Thursday gatherings in the cafe...',
    img: 'https://images.ctfassets.net/rric2f17v78a/4t8LfItU4tpB7pZOvJcpP9/b4582c9f1baa6af515ef0623db6ac2b2/coffee-shop-decor.jpg',
  },
];

const Blog = () => (
  <section id="blog" className="py-28 md:py-32 px-6 md:px-8 bg-white dark:bg-gray-800">
    <FadeInSection>
      <h2 className="text-4xl md:text-5xl font-serif text-coffee-dark dark:text-coffee-light mb-12 md:mb-16 text-center">
        Our Blog
      </h2>
    </FadeInSection>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 max-w-5xl mx-auto">
      {blogPosts.map((post, index) => (
        <FadeInSection key={post.title} delay={index * 0.15}>
          <article className="group bg-latte-light dark:bg-gray-700 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.03] hover:-translate-y-1">
            <img
              src={post.img}
              alt={post.title}
              className="w-full h-60 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="p-7 md:p-9">
              <h3 className="text-xl md:text-2xl font-serif mb-4 text-coffee-dark dark:text-coffee-light group-hover:text-coffee-medium dark:group-hover:text-white transition-colors">
                {post.title}
              </h3>
              <p className="mb-5 text-gray-700 dark:text-gray-300">{post.excerpt}</p>
              <a href="#" className="text-coffee-medium dark:text-coffee-light hover:underline font-medium">
                Read More →
              </a>
            </div>
          </article>
        </FadeInSection>
      ))}
    </div>
  </section>
);

export default Blog;