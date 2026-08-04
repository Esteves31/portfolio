const sectionStyle = {
  maxWidth: "900px",
  margin: "0 auto",
  padding: "40px 48px 100px",
};

const firstDivStyle = {
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: "13px",
  color: "okclh(78% 0.15 300)",
  marginBottom: "10px",
};

const generalDivStyle = {
  background: "oklch(22% 0.012 260)",
  border: "1px solid oklch(30% 0.01 260)",
  borderRadius: "12px",
  padding: "28px",
  gap: "24px",
  display: "flex",
};

const experienceDivStyle = {
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: "13px",
  color: "okclh(78% 0.15 300)",
  marginBottom: "10px",
};

const titleH2Style = {
  fontSize: "32px",
  fontWeight: "700",
  margin: "0 0 32px",
  color: "oklch(96% 0.005 260)",
};

const titleH3Style = {
  margin: "0 0 6px",
  fontSize: "19px",
  color: "oklch(96% 0.005 260)",
};

const paragraphStyle = {
  margin: "0",
  color: "oklch(66% 0.01 260)",
  fontSize: "15px",
};

function ExperienceSection() {
  return (
    <section id="experiencia" style={sectionStyle}>
      <div style={firstDivStyle}>// experiencia</div>
      <h2 style={titleH2Style}>Experiência profissional</h2>
      <div style={generalDivStyle}>
        <div style={experienceDivStyle}>atual</div>
        <div>
          <h3 style={titleH3Style}>Desenvolvedor de Software</h3>
          <p style={paragraphStyle}>
            Adicione aqui a empresa e um breve resumo das suas responsabilidades
            e conquistas.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
