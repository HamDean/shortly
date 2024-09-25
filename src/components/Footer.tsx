import logo from "../assets/logo.svg";
import facebook from "../assets/icon-facebook.svg";
import ig from "../assets/icon-instagram.svg";
import pinterest from "../assets/icon-pinterest.svg";
import x from "../assets/icon-twitter.svg";

const Footer = () => {
  return (
    <footer className=" bg-[#232127]">
        
      <div className="footer text-base-content p-10 flex flex-col md:flex-row flex-wrap  items-center md:items-start justify-center md:justify-between md:max-w-[1108px] mx-5 md:mx-20 lg:mx-32">
      <img src={logo} alt="Logo" className="filter invert" />
      <nav>
        <h4 className="footer-title">Features</h4>
        <a className="link link-hover">Link Shortening</a>
        <a className="link link-hover">Branded Links</a>
        <a className="link link-hover">Analyticts</a>
      </nav>
      <nav>
        <h4 className="footer-title">Resources</h4>
        <a className="link link-hover">Blog</a>
        <a className="link link-hover">Developers</a>
        <a className="link link-hover">Support</a>
      </nav>
      <nav>
        <h4 className="footer-title">Company</h4>
        <a className="link link-hover">About</a>
        <a className="link link-hover">Our Team</a>
        <a className="link link-hover">Careers</a>
        <a className="link link-hover">Contact</a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <img src={facebook} alt="" />
          <img src={x} alt="" />
          <img src={pinterest} alt="" />
          <img src={ig} alt="" />
        </div>
      </nav>
      </div>
    </footer>
  );
};
export default Footer;
