const sectionStyle = {
  maxWidth: "900px",
  margin: "0 auto",
  padding: "40px 48px 100px",
};

const divStyle = {
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: "13px",
  color: "oklch(78% 0.15 300)",
  marginBottom: "10px",
};

const secondDivStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "28px",
};

const sectionTitleStyle = {
  fontSize: "32px",
  fontWeight: "700",
  margin: "0 0 32px",
  color: "oklch(96% 0.005 260)",
};

const skillCategoryStyle = {
  fontSize: "14px",
  fontWeight: "600",
  color: "oklch(80% 0.01 260)",
  marginBottom: "14px",
};

const skillListStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: "10px",
};

const spanStyle = {
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: "13px",
  padding: "7px 14px",
  borderRadius: "6px",
  background: "oklch(25% 0.02 300)",
  color: "oklch(85% 0.1 300)",
  border: "1px solid oklch(35% 0.03 300)",
};

function MySkillsSection() {
  return (
    <section id="skills" style={sectionStyle}>
      <div style={divStyle}>// skills</div>
      <h2 style={sectionTitleStyle}>Stack técnica</h2>
      <div style={secondDivStyle}>
        <div>
          <div style={skillCategoryStyle}>Frontend & Backend</div>
          <div style={skillListStyle}>
            <span style={spanStyle}>JavaScript</span>
            <span style={spanStyle}>Node.js</span>
            <span style={spanStyle}>React</span>
            <span style={spanStyle}>.NET</span>
            <span style={spanStyle}>Java</span>
          </div>
        </div>
        <div>
          <div style={skillCategoryStyle}>Infra & Dados</div>
          <div style={skillListStyle}>
            <span style={spanStyle}>Linux</span>
            <span style={spanStyle}>MySQL</span>
            <span style={spanStyle}>PostgreSQL</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MySkillsSection;
