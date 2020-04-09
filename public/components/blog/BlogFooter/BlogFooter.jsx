import React from 'react';
// import GithubImg from '../../../shared/img/github.png';
import './BlogFooter.scss';

const BlogFooter = () => (
  <footer className="blog-footer">
    <div className="blog-footer__content">
      <section className="blog-footer__support">
        <a
          href="https://ko-fi.com/fenricage"
          className="blog-footer__support-link"
        >
            Ko-Fi
        </a>
        <a
          href="https://patreon.com/fenricage"
          className="blog-footer__support-link"
        >
            Patreon
        </a>
      </section>
      <section className="blog-footer__links-icons">
        <a href="https://github.com/Fenricage" target="__blank">
          <img
            src="/static/default/github.png"
            width="30"
            height="30"
            alt="GitHub"
          />
        </a>

      </section>
    </div>
  </footer>
);

export default BlogFooter;
