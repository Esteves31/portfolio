const sectionStyle = {
  maxWidth: 1100,
  margin: "0 auto",
  padding: "120px 48px 100px",
  display: "grid",
  gridTemplateColumns: "1.1fr 0.9fr",
  gap: 64,
  alignItems: "center",
};

const tagStyle = {
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: 15,
  color: "oklch(78% 0.15 300)",
  marginBottom: 18,
};

const titleStyle = {
  fontSize: 56,
  fontWeight: 800,
  margin: "0 0 20px",
  letterSpacing: "-0.02em",
  color: "oklch(96% 0.005 260)",
};

const leadStyle = {
  fontSize: 19,
  color: "oklch(72% 0.01 260)",
  maxWidth: 480,
  margin: "0 0 36px",
};

const primaryBtnStyle = {
  background: "oklch(78% 0.15 300)",
  color: "oklch(18% 0.02 300)",
  fontWeight: 600,
  padding: "13px 26px",
  borderRadius: 8,
  fontSize: 15,
};

const secondaryBtnStyle = {
  border: "1px solid oklch(40% 0.01 260)",
  color: "oklch(92% 0.005 260)",
  fontWeight: 500,
  padding: "13px 26px",
  borderRadius: 8,
  fontSize: 15,
};

const cardStyle = {
  background: "oklch(22% 0.012 260)",
  border: "1px solid oklch(30% 0.01 260)",
  borderRadius: 12,
  overflow: "hidden",
  boxShadow: "0 20px 60px oklch(10% 0.01 260 / 0.5)",
};

const cardBarStyle = {
  display: "flex",
  gap: 8,
  padding: "14px 18px",
  background: "oklch(25% 0.012 260)",
  borderBottom: "1px solid oklch(30% 0.01 260)",
};

const dotStyle = (color) => ({
  width: 11,
  height: 11,
  borderRadius: "50%",
  background: color,
});

const codeStyle = {
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: 14,
  padding: "24px 22px",
  color: "oklch(75% 0.01 260)",
  lineHeight: 1.9,
};

const indent = { paddingLeft: 20 };
const keyword = { color: "oklch(70% 0.12 300)" };
const string = { color: "oklch(75% 0.13 145)" };

const cursorStyle = {
  display: "inline-block",
  width: 8,
  height: 16,
  background: "oklch(78% 0.15 300)",
  marginLeft: 4,
  verticalAlign: "middle",
  animation: "blink 1.1s step-end infinite",
};

function FirstSection() {
  return (
    <section style={sectionStyle}>
      <div>
        <div style={tagStyle}>&lt;DesenvolvedorDeSoftware /&gt;</div>
        <h1 style={titleStyle}>Matheus Ramos Esteves</h1>
        <p style={leadStyle}>
          Construo aplicações web robustas, do backend ao frontend — com foco em
          JavaScript, Node.js e React, e trânsito confortável por .NET, Java e
          bancos de dados relacionais.
        </p>
        <div style={{ display: "flex", gap: 16 }}>
          <a href="#projetos" style={primaryBtnStyle}>
            Ver projetos
          </a>
          <a href="#contato" style={secondaryBtnStyle}>
            Contato
          </a>
        </div>
      </div>

      <div style={cardStyle}>
        <div style={cardBarStyle}>
          <div style={dotStyle("oklch(65% 0.15 25)")}></div>
          <div style={dotStyle("oklch(75% 0.13 90)")}></div>
          <div style={dotStyle("oklch(70% 0.15 145)")}></div>
        </div>
        <div style={codeStyle}>
          <div>
            <span style={keyword}>const</span> dev = {"{"}
          </div>
          <div style={indent}>
            nome: <span style={string}>"Matheus Esteves"</span>,
          </div>
          <div style={indent}>
            cargo: <span style={string}>"Dev de Software"</span>,
          </div>
          <div style={indent}>
            stack: [<span style={string}>"JS", "Node", "React"</span>],
          </div>
          <div style={indent}>
            tambem: [<span style={string}>".NET", "Java"</span>],
          </div>
          <div>{"};"}</div>
          <div style={{ marginTop: 8 }}>
            <span style={keyword}>console</span>.log(dev)
            <span style={cursorStyle}></span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FirstSection;
