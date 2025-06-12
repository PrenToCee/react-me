const schema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sokpin",
  url: "https://sokpin.uk",
  image: "https://sokpin.uk/profile.jpg",
  jobTitle: "Web Designer & System Engineer",
  worksFor: {
    "@type": "Organization",
    name: "Freelance / Independent",
  },
  sameAs: ["https://github.com/sokpin", "https://linkedin.com/in/sokpin"],
};

const script = document.createElement("script");
script.type = "application/ld+json";
script.text = JSON.stringify(schema);
document.head.appendChild(script);
