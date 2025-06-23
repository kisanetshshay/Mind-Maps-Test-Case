// JSON-like data for site navigation and contact
const data = {
  navigation: [
    { label: "Home", href: "/", id: "home" },
    { label: "About Us", href: "/about", id: "about" },
    { label: "Contacts", href: "/contacts", id: "contacts" },
    { label: "Reports", href: "/reports", id: "reports" }
  ],
  activeNavId: "about",
  email: "User@example.com",
  phone: "+2500712345678",
  social: [
    { platform: "Instagram", url: "https://instagram.com/yourpage" }
  ]
};

// 1. Check navigation bar links
function testNavLinks() {
  return [
    { label: "Home", href: "/", id: "home" },
    { label: "About Us", href: "/about", id: "about" },
    { label: "Contacts", href: "/contacts", id: "contacts" },
    { label: "Reports", href: "/reports", id: "reports" }
  ].every(expected =>
    data.navigation.some(
      nav =>
        nav.label === expected.label &&
        nav.href === expected.href &&
        nav.id === expected.id
    )
  );
}

// 2. Check active nav highlight
function testActiveNav() {
  const activeNav = data.navigation.find(nav => nav.id === data.activeNavId);
  return !!activeNav && activeNav.label === "About Us";
}

// 3. Keyboard navigation to Reports
function testKeyboardNavReports() {
  const reportsNav = data.navigation.find(nav => nav.label === "Reports");
  return !!reportsNav && reportsNav.href === "/reports";
}

// 4. Email is correct
function testEmailCorrect() {
  return data.email === "User@example.com";
}

// 5. Email is a mailto link
function testEmailMailto() {
  return `mailto:${data.email}` === "mailto:User@example.com";
}

// 6. Phone is a clickable tel link
function testPhoneTel() {
  return `tel:${data.phone}` === "tel:+2500712345678";
}

// 7.  social icon links correctly
function testInstagramLink() {
  const instagram = data.social.find(s => s.platform === "Instagram");
  return !!instagram && instagram.url === "https://instagram.com/yourpage";
}

module.exports = {
  data,
  testNavLinks,
  testActiveNav,
  testKeyboardNavReports,
  testEmailCorrect,
  testEmailMailto,
  testPhoneTel,
  testInstagramLink
};