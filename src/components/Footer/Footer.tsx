import mobileClasses from './css/footer.mobile.module.css';
import deskClasses from './css/footer.desk.module.css';
import cvImg from '../../assets/img/email.png';
import linkedin from '../../assets/img/linkedin.png';
import github from '../../assets/img/github.png';
import insta from '../../assets/img/insta.png';
import face from '../../assets/img/facebook.png';

function Footer() {
  function handleDownload() {
    // window.location.href = 'static/abner.pdf';
  }

  function handleSocial(social: string) {
    switch (social) {
      case 'linkedin':
        window.open('https://www.linkedin.com/in/abnerguimaraes/');
        break;
      case 'face':
        window.open('https://www.facebook.com/abner.guimaraes.1');
        break;
      case 'insta':
        window.open('https://www.instagram.com/guimaraesabner/');
        break;
      case 'github':
        window.open('https://github.com/abnerguimaraes/');
        break;
    }
  }

  return (
    <footer className={`${mobileClasses.main} ${deskClasses.main}`}>
      <div className={` ${mobileClasses.footerItem} ${deskClasses.footerItem}`}>
        DOWNLOAD CV
        <a href="https://drive.google.com/file/d/1URQLYX4kpgAstkDXkF5aAz8O9lDpiO6B/view" target="_blank" download="abner.pdf">
          <div className={`${mobileClasses.cvImgContainer} ${deskClasses.cvImgContainer}`} onClick={handleDownload}>
            <img src={cvImg} alt="cv" />
          </div>
        </a>
      </div>
      <div className={` ${mobileClasses.footerItem} ${deskClasses.footerItem}`}>
        FOLLOW ME
        <div className={`${mobileClasses.socialMediaContainer} ${deskClasses.socialMediaContainer}`}>
          <div className={`${mobileClasses.cvImgContainer} ${deskClasses.cvImgContainer}`} onClick={() => { handleSocial('linkedin')}}>
            <img src={linkedin}/>
          </div>
          <div className={`${mobileClasses.cvImgContainer} ${deskClasses.cvImgContainer}`} onClick={() => { handleSocial('github')}}>
            <img src={github}/>
          </div>
          <div className={`${mobileClasses.cvImgContainer} ${deskClasses.cvImgContainer}`} onClick={() => { handleSocial('insta')}}>
            <img src={insta} alt="cv" />
          </div>
          <div className={`${mobileClasses.cvImgContainer} ${deskClasses.cvImgContainer}`} onClick={() => { handleSocial('face')}}>
            <img src={face} alt="cv" />
          </div>
        </div>
      </div>
      <div className={`${mobileClasses.copyRight} ${deskClasses.copyRight}`}>&copy; 2024 Abner Thiago S. Guimarães</div>
    </footer>
  );
}

export default Footer;