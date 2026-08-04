const sectionStyle = {
  maxWidth: "900px",
  margin: "0 auto",
  padding: "40px 48px 100px",
  display: "grid",
  gridTemplateColumns: "auto 1fr",
  gap: "40px",
  alignItems: "center",
};

const myPhotoDivStyle = {
  width: "160px",
  height: "160px",
  borderRadius: "50%",
  border: "3px solid oklch(30% 0.01 260)",
  boxShadow: "0 20px 60px oklch(10% 0.01 260 / 0.5)",
  background: "oklch(25% 0.012 260)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: "12px",
  color: "oklch(55% 0.01 260)",
  textAlign: "center",
};

const aboutMeDivStyle = {
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: "13px",
  color: "okclh(78% 0.15 300)",
  marginBottom: "10px",
};

const aboutMeTitleStyle = {
  fontSize: "32px",
  fontWeight: "700",
  margin: "0 0 16px",
  color: "oklch(96% 0.005 260)",
};

const paragraphStyle = {
  fontSize: "17px",
  color: "oklch(72% 0.01 260)",
  margin: "0 0 36px",
  maxWidth: "700px",
};

function AboutMeSection() {
  return (
    <section id="sobre" style={sectionStyle}>
      <div style={myPhotoDivStyle}>Sua foto</div>
      <div>
        <div style={aboutMeDivStyle}>// sobre</div>
        <h2 style={aboutMeTitleStyle}>Sobre mim</h2>
        <p style={paragraphStyle}>
          Sou desenvolvedor de software com foco no ecossistema JavaScript —
          Node.js e React no dia a dia — e boa transição para .NET e Java quando
          o projeto pede. Tenho familiaridade com Linux e trabalho
          confortavelmente com bancos de dados relacionais como MySQL e
          PostgreSQL, cuidando tanto da modelagem quanto da performance das
          consultas.
        </p>
      </div>
    </section>
  );
}

export default AboutMeSection;
