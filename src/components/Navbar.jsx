const navStyle = {
  position: "sticky",
  top: 0,
  zIndex: 50,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "18px 48px",
  background: "oklch(18% 0.012 260 / 0.85)",
  backdropFilter: "blur(10px)",
  borderBottom: "1px solid oklch(30% 0.01 260)",
};

const logoStyle = {
  fontFamily: "'JetBrains Mono', monospace",
  fontWeight: 700,
  fontSize: 18,
  color: "oklch(92% 0.005 260)",
};

const linksStyle = {
  display: "flex",
  gap: 32,
  fontSize: 14,
  color: "oklch(70% 0.01 260)",
};

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#skills", label: "Skills" },
  { href: "#projetos", label: "Projetos" },
  { href: "#blog", label: "Blog" },
  { href: "#contato", label: "Contato" },
];

function Navbar() {
  return (
    <nav style={navStyle}>
      <div style={logoStyle}>
        matheus<span style={{ color: "oklch(78% 0.15 300)" }}>.</span>dev
      </div>
      <div style={linksStyle}>
        {links.map(({ href, label }) => (
          <a key={href} href={href} style={{ color: "inherit" }}>
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
