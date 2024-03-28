
import mobileClasses from './css/contact.mobile.module.css';
import deskClasses from './css/contact.desk.module.css';
import mail from './img/mail.png';
import whatsApp from './img/whatsapp.png';
import linkedin from './img/linkedin.png';
import map from './img/map.png';

function Contact() {
  function sendMail() {
    window.open('mailto:guimaraesabner@gmail.com');
  }

  function openWhats() {
    window.open('https://wa.me/5511998200240', '_blank');
  }

  function openLinkedIn() {
    window.open('https://www.linkedin.com/in/abnerguimaraes', '_blank');
  }

  function openMaps() {
    let url = "https://www.google.com/maps/place/23%C2%B032'17.2%22S+46%C2%B045'44.0%22W/@-23.5387625,-46.7618582,18z/data=!4m4!3m3!8m2!3d-23.5381111!4d-46.7622222?entry=ttu";
    window.open(url, '_blank');
  }

  return (
    <section className={`${mobileClasses.main} ${deskClasses.main}`}>
      <div className={`${mobileClasses.content} ${deskClasses.content}`}>
        <span className={`${mobileClasses.title} ${deskClasses.title}`}>Contato</span>
        <div className={`${mobileClasses.contactItem} ${deskClasses.contactItem}`} onClick={sendMail}>
          <img className={`${mobileClasses.contactItemImg} ${deskClasses.contactItemImg}`} src={mail} />
          <span>guimaraesabner@gmail.com</span>
        </div>
        <div className={`${mobileClasses.contactItem} ${deskClasses.contactItem}`} onClick={openWhats}>
          <img className={`${mobileClasses.contactItemImg} ${deskClasses.contactItemImg}`} src={whatsApp} />
          <span>11 - 998 - 200 - 240</span>
        </div>
        <div className={`${mobileClasses.contactItem} ${deskClasses.contactItem}`} onClick={openLinkedIn}>
          <img className={`${mobileClasses.contactItemImg} ${deskClasses.contactItemImg}`} src={linkedin} />
          <span>linkedin.com/in/abnerguimaraes</span>
        </div>
        <div className={`${mobileClasses.contactItem} ${deskClasses.contactItem}`} onClick={openMaps}>
          <img className={`${mobileClasses.contactItemImg} ${deskClasses.contactItemImg}`} src={map} />
          <span>Av. Franz Voegeli, 900</span>
        </div>
      </div>
    </section>
  )
}

export default Contact;