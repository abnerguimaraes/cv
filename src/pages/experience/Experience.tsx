import mobileClasses from './css/experience.mobile.module.css';
import deskClasses from './css/experience.desk.module.css';

function Experience() {
  return (
    <section className={`${mobileClasses.main} ${deskClasses.main}`}>
      <div className={`${mobileClasses.content} ${deskClasses.content}`}>
        <span className={`${mobileClasses.jobName} ${deskClasses.jobName}`}>Software Engineer</span>
        <span className={`${mobileClasses.companyName} ${deskClasses.companyName}`}>OLX Brasil | jan/2022 - atual</span>
      </div>
      <div className={`${mobileClasses.content} ${deskClasses.content}`}>
        <span className={`${mobileClasses.item} ${deskClasses.item}`}> ● Atuação no time DataZap como Software Engineer;</span>
        <span className={`${mobileClasses.item} ${deskClasses.item}`}> ● Construção do Front-End da plataforma Geoimóvel - VUE-JS / GoogleMaps;</span>
        <span className={`${mobileClasses.item} ${deskClasses.item}`}> ● Construção de APIs para a Geoimóvel - Node-JS / Python;</span>
        <span className={`${mobileClasses.item} ${deskClasses.item}`}> ● Construção do backoffice do Geoimóvel - React-JS;</span>
        <span className={`${mobileClasses.item} ${deskClasses.item}`}> ● Queries para atendimento a Geoimóvel - Postgres;</span>
        <span className={`${mobileClasses.item} ${deskClasses.item}`}> ● Atuação no ambiente - AWS / S3 / RDS / K8S;</span>
        <span className={`${mobileClasses.item} ${deskClasses.item}`}> ● Controle de versão de código - Git.</span>
      </div>
      <div className={`${mobileClasses.content} ${deskClasses.content}`}>
        <span className={`${mobileClasses.jobName} ${deskClasses.jobName}`}>Analista de Sistemas</span>
        <span className={`${mobileClasses.companyName} ${deskClasses.companyName}`}>Bradesco | jan 2017 - jan 2022</span>
      </div>
      <div className={`${mobileClasses.content} ${deskClasses.content}`}>
        <span className={`${mobileClasses.item} ${deskClasses.item}`}> ● Construção de serviços estruturais para o canal em Node-JS;</span>
        <span className={`${mobileClasses.item} ${deskClasses.item}`}> ● Desenvolvimento front-end, aprimoramento e disponibilização de novas funcionalidades (HTML5, CSS3 e Javascript), acompanhamento na homologação e implantação dos projetos;</span>
        <span className={`${mobileClasses.item} ${deskClasses.item}`}> ● Integração com dispositivos móveis: Desenvolvimento de aplicações embarcadas para iOS e Android através do Cordova;</span>
        <span className={`${mobileClasses.item} ${deskClasses.item}`}> ● Integração entre os gestores de canal e produto, analistas de outros sistemas;</span>
        <span className={`${mobileClasses.item} ${deskClasses.item}`}> ● Gestão de projetos: Acompanhamento do desenvolvimento por empresas parceiras, garantindo a qualidade, o prazo das entregas.</span>
      </div>
      <div className={`${mobileClasses.content} ${deskClasses.content}`}>
        <span className={`${mobileClasses.jobName} ${deskClasses.jobName}`}>Analista de Negócio</span>
        <span className={`${mobileClasses.companyName} ${deskClasses.companyName}`}>Bradesco | ago 2012 - dez 2016</span>
      </div>
      <div className={`${mobileClasses.content} ${deskClasses.content}`}>
        <span className={`${mobileClasses.item} ${deskClasses.item}`}> ● Gerenciamento de projetos de sistemas, envolvendo a compreensão do negócio, mapeamento de necessidades e a especificação dos requisitos de negócios e técnicos para soluções;</span>
        <span className={`${mobileClasses.item} ${deskClasses.item}`}> ● Elaboração do orçamento: Assessoria às Unidades de Negócios no planejamento e gestão do orçamento para o desenvolvimento de sistemas nas áreas.</span>
      </div>
      <div className={`${mobileClasses.content} ${deskClasses.content}`}>
        <span className={`${mobileClasses.jobName} ${deskClasses.jobName}`}>Técnico / Líder de Equipe de Manutenção</span>
        <span className={`${mobileClasses.companyName} ${deskClasses.companyName}`}>Scopus Tecnologia | dez 2002 - jul 2012</span>
      </div>
      <div className={`${mobileClasses.content} ${deskClasses.content}`}>
        <span className={`${mobileClasses.item} ${deskClasses.item}`}> ● Manutenção de equipamentos de microinformática (hardware e software).</span>
        <span className={`${mobileClasses.item} ${deskClasses.item}`}> ● Líder de equipe técnica, atuando na resoluções de conflitos, negociação de prioridades junto aos steakholders, distribuição estratégica das atividades considerando a complexidade logística, insumos e SLAs.</span>
      </div>
      <div className={`${mobileClasses.content} ${deskClasses.content}`}>
        <span className={`${mobileClasses.jobName} ${deskClasses.jobName}`}>Programador Trainee</span>
        <span className={`${mobileClasses.companyName} ${deskClasses.companyName}`}>Tradição Consultoria | jun 2001 - dez 2002</span>
      </div>
      <div className={`${mobileClasses.content} ${deskClasses.content}`}>
        <span className={`${mobileClasses.item} ${deskClasses.item}`}> ● Implantação, suporte em sistemas de fluxo de caixa corporativos (cobrança, pagamento a fornecedores, folha de pagamento e pagamento de tributos) e treinamento aos usuários dos sistemas.</span>
      </div>
      <div className={`${mobileClasses.content} ${deskClasses.content}`}>
        <span className={`${mobileClasses.jobName} ${deskClasses.jobName}`}>Estagiário</span>
        <span className={`${mobileClasses.companyName} ${deskClasses.companyName}`}>Editora Três | fev 2000 - mar 2001</span>
      </div>
      <div className={`${mobileClasses.content} ${deskClasses.content}`}>
        <span className={`${mobileClasses.item} ${deskClasses.item}`}> ● Manutenção aos equipamentos de informática e suporte aos usuários da rede administrativa a Editora.</span> 
      </div>
    </section>
  );
}

export default Experience;
