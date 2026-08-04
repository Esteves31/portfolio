const sectionStyle = {
  maxWidth: "900px",
  margin: "0 auto",
  padding: "40px 48px 140px",
};

const contactDivStyle = {
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: "13px",
  color: "okclh(78% 0.15 300)",
  marginBottom: "10px",
};

const letsTalkStyle = {
  fontSize: "32px",
  fontWeight: "700",
  margin: "0 0 16px",
  color: "oklch(96% 0.005 260)",
};

const textStyle = {
  fontSize: "17px",
  color: "oklch(72% 0.01 260)",
  margin: "0 0 36px",
  maxWidth: "600px",
};

const contactListDivStyle = {
  color: "oklch(55% 0.01 260);",
};

const socialMediasDivStyle = {
  background: "oklch(22% 0.012 260)",
  border: "1px solid oklch(30% 0.01 260)",
  borderRadius: "12px",
  padding: "26px 28px",
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: "14px",
  display: "flex",
  flexDirection: "column",
  gap: "18px",
};

const socialMediaDivStyle = {
  display: "flex",
  gap: "14px",
  alignItems: "center",
};

const socialMediaLinkDivStyle = {
  width: "34px",
  height: "34px",
  borderRadius: "8px",
  background: "oklch(28% 0.012 260)",
  border: "1px solid oklch(35% 0.01 260)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "13px",
  color: "oklch(85% 0.005 260)",
  flexShrink: 0,
};

function ContactSection() {
  return (
    <section id="contato" style={sectionStyle}>
      <div style={contactDivStyle}>// contato</div>
      <h2 style={letsTalkStyle}>Vamos conversar</h2>
      <p style={textStyle}>
        Aberto a novas oportunidades e projetos. Me chame em qualquer um dos
        canais abaixo.
      </p>
      <div style={socialMediasDivStyle}>
        <div style={contactListDivStyle}>$ contact --list</div>
        <div style={socialMediaDivStyle}>
          <div style={socialMediaLinkDivStyle}>gh</div>
          <a href="https://github.com/Esteves31" target="_blank" rel="noopener">
            github.com/Esteves31
          </a>
        </div>
        <div style={socialMediaDivStyle}>
          <div style={socialMediaLinkDivStyle}>in</div>
          <a
            href="https://www.linkedin.com/in/matheusesteves31/"
            target="_blank"
            rel="noopener"
          >
            linkedin.com/in/matheusesteves31
          </a>
        </div>
        <div style={socialMediaDivStyle}>
          <div style={socialMediaLinkDivStyle}>@</div>
          <a href="mailto:matheus.resteves@gmail.com">
            matheus.resteves@gmail.com
          </a>
        </div>
        <div style={socialMediaDivStyle}>
          <div style={socialMediaLinkDivStyle}>ig</div>
          <a href="https://instagram.com/" target="_blank" rel="noopener">
            instagram.com/seu_usuario
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
