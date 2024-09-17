import React from 'react';

const SideBar = () => {
  return (
    <div className="sidebar">
      {/* News Feed Section */}
      <section>
        <h2>News Feed</h2>
        <ul>
          <li><a href="#" style={{ color: 'white' }}>Tech News</a></li>
          <li><a href="#" style={{ color: 'white' }}>Latest in AI</a></li>
          <li><a href="#" style={{ color: 'white' }}>Programming Tips</a></li>
        </ul>
      </section>

      {/* Search Engine Section */}
      <section>
        <h2>Search</h2>
        <input type="text" placeholder="Search posts..." />
        <button>Search</button>
      </section>

      {/* Advertisement Section */}
      <section className="advert">
        <h2>Advertisement</h2>
        <img src="../blog_image.jpg" alt="Advert" />
        <p>Ad content goes here. Promote your tech-related products.</p>
      </section>
    </div>
  );
};

export default SideBar;
