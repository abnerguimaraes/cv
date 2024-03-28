import mobileClasses from './css/pageheader.mobile.module.css';
import deskClasses from './css/pageheader.desk.module.css';
import avatar from './img/avatar.png';

function PageHeader() {
  return (
    <div className={deskClasses.pageHeader}>
      <div className={`${mobileClasses.avatarContainer} ${deskClasses.avatarContainer}`}>
        <img className={mobileClasses.avatar} src={avatar}/>
      </div>
      <div className={deskClasses.titlePositionContainer}>
        <div className={`${mobileClasses.title} ${deskClasses.title}`}>
          ABNER T GUIMARÃES
        </div>
        <div className={`${mobileClasses.positionName} ${deskClasses.positionName}`}>
          full stack developer
        </div>
      </div>
    </div>
  );
}

export default PageHeader;