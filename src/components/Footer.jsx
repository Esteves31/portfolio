const footerStyle = {
  borderTop: "1px solid oklch(30% 0.01 260)",
  padding: "28px 48px",
  textAlign: "center",
  fontSize: "13px",
  color: "oklch(50% 0.01 260)",
  fontFamily: "'JetBrains Mono', monospace",
};

function Footer() {
  return <footer style={footerStyle}>© 2026 Matheus Ramos Esteves</footer>;
}

export default Footer;
