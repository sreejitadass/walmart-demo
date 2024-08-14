import React from "react";
import "./Footer.css"; // Import the CSS file

const Footer = () => {
  return (
    <div className="footer-container">
      <footer>
        <ul className="footer-links" data-testid="responsive-footer-list">
          <li>
            <a href="/all-departments">All Departments</a>
          </li>
          <li>
            <a
              aria-label="Store Directory - opens in a new window"
              target="_blank"
              rel="noopener noreferrer"
              href="/store/directory"
            >
              Store Directory
            </a>
          </li>
          <li>
            <a
              aria-label="Careers - opens in a new window"
              target="_blank"
              rel="noopener noreferrer"
              href="https://careers.walmart.com/"
            >
              Careers
            </a>
          </li>
          <li>
            <a
              aria-label="Our Company - opens in a new window"
              target="_blank"
              rel="noopener noreferrer"
              href="https://corporate.walmart.com/"
            >
              Our Company
            </a>
          </li>
          <li>
            <a
              aria-label="Sell on Walmart.com - opens in a new window"
              target="_blank"
              rel="noopener noreferrer"
              href="https://marketplace.walmart.com/?utm_source=Walmart.com&amp;utm_medium=link&amp;utm_campaign=footer"
            >
              Sell on Walmart.com
            </a>
          </li>
          <li>
            <a href="/help">Help</a>
          </li>
          <li>
            <a
              aria-label="Product Recalls - opens in a new window"
              target="_blank"
              rel="noopener noreferrer"
              href="https://corporate.walmart.com/recalls"
            >
              Product Recalls
            </a>
          </li>
          <li>
            <a
              aria-label="Accessibility - opens in a new window"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.walmart.com/help/article/responsible-disclosure-and-accessibility-policies/0f173dab8bd942da84b1cd7ab5ffc3cb"
            >
              Accessibility
            </a>
          </li>
          <li>
            <a href="https://www.walmart.com/cp/tax-exemption-program/8480422">
              Tax Exempt Program
            </a>
          </li>
          <li>
            <a href="https://walmart.onelink.me/UIev?pid=walmart.com&amp;af_web_dp=https%3A%2F%2Fwww.walmart.com%2Fcp%2Fwalmart-mobile-app%2F1087865&amp;c=Walmart.com%20Site%20Footer&amp;af_dp=walmart%3A%2F%2F">
              Get the Walmart App
            </a>
          </li>
          <li>
            <a href="https://www.walmart.com/cp/email-opt-in/8196352?gbo=1">
              Sign-up for Email
            </a>
          </li>
          <li>
            <a href="http://msds.walmartstores.com/">Safety Data Sheet</a>
          </li>
          <li>
            <a href="/help/article/walmart-com-terms-of-use/3b75080af40340d6bbd596f116fae5a0">
              Terms of Use
            </a>
          </li>
          <li>
            <a
              aria-label="Privacy & Security - opens in a new window"
              target="_blank"
              rel="noopener noreferrer"
              href="https://corporate.walmart.com/privacy-security"
            >
              Privacy & Security
            </a>
          </li>
          <li>
            <a
              aria-label="California Supply Chain Act - opens in a new window"
              target="_blank"
              rel="noopener noreferrer"
              href="https://corporate.walmart.com/california-transparency"
            >
              California Supply Chain Act
            </a>
          </li>
          <li>
            <a
              aria-label="Your Privacy Choices - opens in a new window"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.walmart.com/account/api/ccpa-intake?native=false&amp;app=gm&amp;type=sod"
            >
              <img
                loading="lazy"
                width="29"
                height="14"
                src="//i5.walmartimages.com/dfwrs/76316474-d730/k2-_3c5ba298-4f19-46be-9fc3-ac49225d19bd.v1.png"
                alt="Privacy choices icon"
              />
              Your Privacy Choices
            </a>
          </li>
          <li>
            <a
              aria-label="Notice at Collection - opens in a new window"
              target="_blank"
              rel="noopener noreferrer"
              href="https://corporate.walmart.com/privacy-security/california-privacy-rights#what-are-the-categories-of-personal-information-collected"
            >
              Notice at Collection
            </a>
          </li>
          <li>
            <a href="https://corporate.walmart.com/privacy-security/walmart-consumer-health-data-privacy-notices/walmart-nevada-consumer-health-data-privacy-notice">
              NV Consumer Health Data Privacy Notice
            </a>
          </li>
          <li>
            <a href="https://corporate.walmart.com/privacy-security/walmart-consumer-health-data-privacy-notices/walmart-washington-consumer-health-data-privacy-notice">
              WA Consumer Health Data Privacy Notice
            </a>
          </li>
          <li>
            <a
              aria-label="Request My Personal Information - opens in a new window"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.walmart.com/account/api/ccpa-intake?native=false&amp;app=gm&amp;type=access"
            >
              Request My Personal Information
            </a>
          </li>
          <li>
            <a href="https://www.walmart.com/brand/branddirectory">
              Brand Shop Directory
            </a>
          </li>
          <li>
            <a href="https://www.walmart.com/cp/pharmacy/5431?povid=HWS_GlobalFooter_Pharmacy">
              Pharmacy
            </a>
          </li>
          <li>
            <a href="https://business.walmart.com/account/logout?vid=b2b&amp;tid=0&amp;returnUrl=%3Fpovid%3D5008973_homepage_WMTFOOTER">
              Walmart Business
            </a>
          </li>
          <li>
            <a href="https://www.walmart.com/cp/walmart-in-the-know/7781927">
              #IYWYK
            </a>
          </li>
          <li>
            <a href="https://www.walmart.com/account/login?vid=oaoh&amp;tid=0&amp;returnUrl=%2Faccount%2Fdelete-account">
              Delete Account
            </a>
          </li>
        </ul>
        <div className="footer-copyright">
          © 2024 Walmart. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
