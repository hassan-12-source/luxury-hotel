import React from 'react';
import './BlogCard.css';
import blogData from './data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function BlogCard() {
  return (
    <div className='blog-section'>
      <div className='header-blog'>
        <span>OUR BLOGS</span>
        <p>Check out our latest blogs by clicking on any blog card</p>
      </div>
      <div className='blog-container'>
        {blogData.map((blog) => (
          <div key={blog.id} className='blog-card'>
            <img src={blog.image} alt={blog.title} className='blog-image' />
            <div className='content-down-card'>
              <div className='blog-content'>
                <h2 className="blog-title">{blog.title}</h2>
                <p className="blog-paragraph">{blog.content}</p>
              </div>

              <div className='btn-blog'>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogCard;
