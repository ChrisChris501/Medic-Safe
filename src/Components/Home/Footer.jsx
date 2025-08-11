import WhiteLogo from '../../assets/WhiteLogo.png';
import FooterFacebookLogo from '../../assets/FooterFacebookLogo.png';
import FooterInstaLogo from '../../assets/FooterInstaLogo.png';
import FooterTwitterLogo from '../../assets/FooterTwitterLogo.png';
import FooterWhatsAppLogo from '../../assets/FooterWhatsAppLogo.png';

const Footer = () => {
  return (
    <div
      className="
        bg-[#007D79] 
        grid 
        grid-cols-4 
        gap-[30px] 
        h-[40vh] 
        pt-[80px] 
        px-[30px] 
        mt-[50px]

        max-w-full
        md:grid-cols-4 
        md:gap-[40px] 
        md:pt-[40px] 
        md:px-[40px] 
        md:h-auto 
        md:text-center

        sm:grid-cols-1 
        sm:gap-[30px] 
        sm:text-center
      "
    >
      {/* Container1 */}
      <div className="flex flex-col items-start md:items-center">
        <div
          className="
            w-[80%] 
            m-[10px] 
            md:w-[60%] 
            md:m-0
          "
        >
          <img src={WhiteLogo} alt="Smiling patient and doctor" className="w-full" />
        </div>

        <div className="flex space-x-4 px-[10px]">
          {/* SocialIcons img width: 10% desktop, 7% mobile */}
          <img src={FooterFacebookLogo} alt="FacebookLogo" className="w-[10%] md:w-[7%] p-[5px_5px_5px_10px]" />
          <img src={FooterInstaLogo} alt="InstaLogo" className="w-[10%] md:w-[7%] p-[5px_5px_5px_10px]" />
          <img src={FooterTwitterLogo} alt="TwitterLogo" className="w-[10%] md:w-[7%] p-[5px_5px_5px_10px]" />
          <img src={FooterWhatsAppLogo} alt="WhatsAppLogo" className="w-[10%] md:w-[7%] p-[5px_5px_5px_10px]" />
        </div>

        <div className="font-[100] m-[10px] text-white">
          <h5 className="font-[100] text-[17px] font-light leading-[25px]">&copy; 2023 Medi-safe, Inc.</h5>
        </div>
      </div>

      {/* Container2 */}
      <div className="text-white">
        <h5>
          <a
            href=""
            className="
              font-[300] 
              text-[17px] 
              leading-[25px] 
              cursor-pointer 
              transition 
              duration-200 
              ease-linear 
              p-[5px] 
              hover:bg-white 
              hover:text-black 
              rounded-[3px] 
              no-underline
            "
          >
            Home
          </a>
        </h5>
        <h5>
          <a
            href=""
            className="
              font-[300] 
              text-[17px] 
              leading-[25px] 
              cursor-pointer 
              transition 
              duration-200 
              ease-linear 
              p-[5px] 
              hover:bg-white 
              hover:text-black 
              rounded-[3px] 
              no-underline
            "
          >
            Blog
          </a>
        </h5>
        <h5>
          <a
            href=""
            className="
              font-[300] 
              text-[17px] 
              leading-[25px] 
              cursor-pointer 
              transition 
              duration-200 
              ease-linear 
              p-[5px] 
              hover:bg-white 
              hover:text-black 
              rounded-[3px] 
              no-underline
            "
          >
            About us
          </a>
        </h5>
        <h5>
          <a
            href=""
            className="
              font-[300] 
              text-[17px] 
              leading-[25px] 
              cursor-pointer 
              transition 
              duration-200 
              ease-linear 
              p-[5px] 
              hover:bg-white 
              hover:text-black 
              rounded-[3px] 
              no-underline
            "
          >
            Contact us
          </a>
        </h5>
        <h5>
          <a
            href=""
            className="
              font-[300] 
              text-[17px] 
              leading-[25px] 
              cursor-pointer 
              transition 
              duration-200 
              ease-linear 
              p-[5px] 
              hover:bg-white 
              hover:text-black 
              rounded-[3px] 
              no-underline
            "
          >
            Profile info
          </a>
        </h5>
      </div>

      {/* Container3 */}
      <div className="text-white font-[300] text-[17px] leading-[25px]">
        <h5>Services</h5>
        <h5>Personal Health Profile</h5>
        <h5>Medical History Documentation</h5>
        <h5>Integration with Healthcare Providers</h5>
        <h5>Health Metrics Tracking</h5>
        <h5>Contact Information</h5>
        <h5>Access to Health</h5>
      </div>

      {/* Container4 */}
      <div className="text-white font-[300] text-[17px] leading-[25px]">
        <h5>+234 808 000 0000</h5>
        <h5>
          <a
            href=""
            className="
              cursor-pointer 
              transition 
              duration-200 
              ease-linear 
              p-[5px] 
              hover:bg-white 
              hover:text-black 
              rounded-[3px] 
              no-underline
            "
          >
            medi-safe@gmail.com
          </a>
        </h5>
        <h5>
          <a
            href=""
            className="
              cursor-pointer 
              transition 
              duration-200 
              ease-linear 
              p-[5px] 
              hover:bg-white 
              hover:text-black 
              rounded-[3px] 
              no-underline
            "
          >
            Advertise with us
          </a>
        </h5>
        <h5>
          <a
            href=""
            className="
              cursor-pointer 
              transition 
              duration-200 
              ease-linear 
              p-[5px] 
              hover:bg-white 
              hover:text-black 
              rounded-[3px] 
              no-underline
            "
          >
            Privacy policy
          </a>
        </h5>
      </div>
    </div>
  );
};

export default Footer;
