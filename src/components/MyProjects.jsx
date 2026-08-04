const sectionStyle = {
  maxWidth: "1100px",
  margin: "0 auto",
  padding: "40px 48px 100px",
};

const divStyle = {
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: "13px",
  color: "oklch(78% 0.15 300)",
  marginBottom: "10px",
};

const h2Style = {
  fontSize: "32px",
  fontWeight: "700",
  margin: "0 0 32px",
  color: "oklch(96% 0.005 260)",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "24px",
};

function MyProjects() {
  return (
    <section id="projetos" style={sectionStyle}>
      <div style={divStyle}>// projetos</div>
      <h2 style={h2Style}>Projetos</h2>
      <div id="projetos-grid" style={gridStyle}></div>
    </section>
  );
}

export default MyProjects;
