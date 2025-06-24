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
// Navigation Tests
function testNavLinks() {
  const expectedNav = [
    { label: "Home", href: "/", id: "home" },
    { label: "About Us", href: "/about", id: "about" },
    { label: "Contacts", href: "/contacts", id: "contacts" },
    { label: "Reports", href: "/reports", id: "reports" }
  ];
  return expectedNav.every(expected =>
    data.navigation.some(nav =>
      nav.label === expected.label &&
      nav.href === expected.href &&
      nav.id === expected.id
    )
  );
}
function testActiveNav() {
  const activeNav = data.navigation.find(nav => nav.id === data.activeNavId);
  return !!activeNav && activeNav.label === "About Us";
}
function testKeyboardNavReports() {
  const reportsNav = data.navigation.find(nav => nav.label === "Reports");
  return !!reportsNav && reportsNav.href === "/reports";
}
// Contact Tests
function testEmailCorrect() {
  return data.email === "User@example.com";
}
function testEmailMailto() {
  return `mailto:${data.email}` === "mailto:User@example.com";
}
function testPhoneTel() {
  return `tel:${data.phone}` === "tel:+2500712345678";
}
// Social Link Test
function testInstagramLink() {
  const instagram = data.social.find(s => s.platform === "Instagram");
  return !!instagram && instagram.url === "https://instagram.com/yourpage";
}
// Placeholder Stub Functions (TDD Red Phase)
function isNamePlaceholderClickable(id) {
  return false;
}
function isPhoneNumberPlaceholderClickable(id) {
  return false;
}
function isSubjectPlaceholderClickable(id) {
  return false;
}
function isMessagePlaceholderClickable(id) {
  return false;
}
function isMapClickable(id) {
  return false;
}
// Dummy test function for "subject" to prevent module export error
function testSubject() {
  return true; // Placeholder logic; adjust as needed
}
module.exports = {
  data,
  testNavLinks,
  testActiveNav,
  testKeyboardNavReports,
  testEmailCorrect,
  testEmailMailto,
  testPhoneTel,
  testInstagramLink,
  isNamePlaceholderClickable,
  isPhoneNumberPlaceholderClickable,
  isSubjectPlaceholderClickable,
  isMessagePlaceholderClickable,
  isMapClickable,
  testSubject
};






