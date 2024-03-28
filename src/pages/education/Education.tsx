import mobileClasses from './css/education.mobile.module.css';
import deskClasses from './css/education.desk.module.css';

function Education() {
  return (
    <section className={`${mobileClasses.main} ${deskClasses.main}`}>
      <div className={`${mobileClasses.content} ${deskClasses.content}`}>
        <span className={`${mobileClasses.jobName} ${deskClasses.jobName}`}>Idioma</span>
        <span className={`${mobileClasses.companyName} ${deskClasses.companyName}`}>Inglês - Wizzard Avançado 2019</span>
      </div>
      <div className={`${mobileClasses.content} ${deskClasses.content}`}>
        <span className={`${mobileClasses.jobName} ${deskClasses.jobName}`}>Certicação</span>
        <span className={`${mobileClasses.companyName} ${deskClasses.companyName}`}>PSM I - Professional Scrum Master I 2018</span>
      </div>
      <div className={`${mobileClasses.content} ${deskClasses.content}`}>
        <span className={`${mobileClasses.jobName} ${deskClasses.jobName}`}>Pós Graduação</span>
        <span className={`${mobileClasses.companyName} ${deskClasses.companyName}`}>IBTA - Gerenciamento de Projetos PMI 2009</span>
      </div>
      <div className={`${mobileClasses.content} ${deskClasses.content}`}>
        <span className={`${mobileClasses.jobName} ${deskClasses.jobName}`}>Bacharel</span>
        <span className={`${mobileClasses.companyName} ${deskClasses.companyName}`}>Ciência da Computação - Uni Nove 2005</span>
      </div>
      <div className={`${mobileClasses.content} ${deskClasses.content}`}>
        <span className={`${mobileClasses.jobName} ${deskClasses.jobName}`}>Técnico</span>
        <span className={`${mobileClasses.companyName} ${deskClasses.companyName}`}>Processamento de Dados - Colégio Anhanguera 2000</span>
      </div>
    </section>
  );
}

export default Education;