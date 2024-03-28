import mobileClasses from './css/about.mobile.module.css';
import deskClasses from './css/about.desk.module.css';

function About() {
  return (
    <section className={`${mobileClasses.main} ${deskClasses.main}`}>
      <div className={`${mobileClasses.areaOne} ${deskClasses.areaOne}`}>
        <span className={`${mobileClasses.title} ${deskClasses.title}`}>Perfil Profissional</span>
        <div className={`${mobileClasses.content} ${deskClasses.content}`}>
          Sou analista desenvolvedor de sistemas full stack desde 2018,
          com formação em Ciência da Computação e Pós-Graduação em
          Gestão de Projetos.
        </div>
        <div className={`${mobileClasses.content} ${deskClasses.content}`}>
          Tenho experiência no desenvolvimento de aplicações WEB utilizando
          as principais tecnologias e frameworks do mercado como VUE-JS, React-JS,
          HTML, CSS3, Java Script, Node-JS, Postegres-SQL, Git, TypeScript, Python,
          Apache Cordova.
        </div>
        <div className={`${mobileClasses.content} ${deskClasses.content}`}>
          Já trabalhei em ambientes com a metodologia cascata e em outros que utilizam o ágil.
          Também possuo alguma experiência no desenho de arquitetura de soluções e na liderança
          de pessoas além de excelentes habilidades de comunicação.
        </div>
      </div>
      <div className={`${mobileClasses.areaTwo} ${deskClasses.areaTwo}`}>
      <span className={`${mobileClasses.title} ${deskClasses.title}`}>Informações Pessoais</span>
      <div className={`${mobileClasses.content} ${deskClasses.content}`}>
        <span>Abner Thiago S. Guimarães</span>
        <span>19/03/1983</span>
        <span>abnerguimaraes1983@gmail.com</span>
      </div>
      </div>
    </section>
  );
}

export default About;