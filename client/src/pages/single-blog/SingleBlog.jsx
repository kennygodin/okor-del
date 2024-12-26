import { Link } from 'react-router-dom';
import BlogHero from '../../components/hero/blog/BlogHero';
import './singleBlog.scss';
import { IoMdShare } from 'react-icons/io';
import BlogSidebar from '../../components/blog-sidebar/BlogSidebar';

const SingleBlog = () => {
  return (
    <div className="single-blog">
      <BlogHero
        title="Essential Advice on Choosing a Top Class Consultant"
        desc="It makes sense to seek counsel, but who is the right fit?"
        date="September 25, 2018"
        img="https://images.pexels.com/photos/6929153/pexels-photo-6929153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <div className="single-breadcrumbs-wrapper">
        <div className="single-breadcrumbs">
          <Link to="/">
            <span>Home</span>
          </Link>
          <Link to="/blog">
            <span>Blog</span>
          </Link>
          <span>Essential Advice on Choosing a Top Class Consultant</span>
        </div>
        <div className="single-share">
          <IoMdShare />
          <span>Share</span>
        </div>
      </div>
      <div className="single-blog-content">
        <div className="single-blog-main">
          <p className="drop-cap">
            Too many small-business people aren’t willing to ask for help when
            they need it. Entrepreneurs by nature tend to be independent
            risk-takers. They started the company and it is their baby.
            Obviously, they should know how to raise it.
          </p>
          <p>
            However, none of us knows everything about growing and managing a
            business. Sometimes it makes sense to seek the counsel of others,
            but who is right for you and your business? When selecting a
            consultant, follow these five simple, but important, guidelines:
            <h1>1. Unimpeachable character</h1>
            <p>
              First and foremost, an effective consultant must be a person of
              the highest character. He or she must be the consummate
              professional. The consultant must be willing to put the best
              interest of the client ahead of their own.
            </p>
            <p>
              For example, the consultant must be willing to tell clients things
              that they need to hear, but may not want to — even if doing so
              means that the consultant loses business. The consultant must care
              deeply about her or his clients.
            </p>
            <h1>2. Solid experience</h1>
            <p>
              A good consultant should have experience with the challenges or
              opportunities you and your company are facing. She or he may not
              know your specific company or industry, but you and your people
              know your company and your industry quite well, don’t you? What
              the consultant brings to the table is experience in addressing the
              types of issues you face.
            </p>
          </p>
        </div>
        <div className="single-blog-sidebar">
          <BlogSidebar />
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
