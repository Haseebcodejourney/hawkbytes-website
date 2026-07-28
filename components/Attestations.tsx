import "./Attestations.css";

const ARROW_ICON =
  "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67d0103df322d59181373f53_arrow-c.svg";

const CHEVRON = (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 18 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M8.1083 14.5302L7.05005 13.4697L11.0168 9.49998L7.05005 5.53023L8.1113 4.46973L12.075 8.43948C12.3562 8.72077 12.5142 9.10223 12.5142 9.49998C12.5142 9.89772 12.3562 10.2792 12.075 10.5605L8.1083 14.5302Z"
      fill="currentColor"
    />
  </svg>
);

const CERTS = [
  {
    name: "PCI DSS",
    text: "CyberCrest’s PCI 4.0.1 experts help you meet the latest DSS requirements for handling payment card data.",
    href: "https://www.cybercrestcompliance.com/services/pci-dss-compliance",
    logo: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67cff193fe81907282c17e19_Logo-1.avif",
    logoAlt: "PCI DSS compliance logo with text.",
  },
  {
    name: "CMMC",
    text: "Our certified experts support defense contractors in meeting Cybersecurity Maturity Model Certification requirements.",
    href: "https://www.cybercrestcompliance.com/services/cmmc-compliance",
    logo: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67dd7ed98ebf2dd2121c7524_Logo%20Container-3-new.avif",
    logoAlt:
      "Emblem-shaped badge with the letters 'CMMC' inside the upper part of the shield.",
  },
  {
    name: "NIST 800-171",
    text: "CyberCrest helps US government contractors and suppliers enable controls to protect CUI data.",
    href: "https://www.cybercrestcompliance.com/services/nist-800-171-compliance",
    logo: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67d02e2f45056d1d00ea92df_Logo-3.avif",
    logoAlt: "NIST 800-171 text logo in white on black background.",
  },
  {
    name: "NIST CSF",
    text: "CyberCrest helps organizations in adopting the various NIST Cybersecurity Frameworks and Standards.",
    href: "https://www.cybercrestcompliance.com/services/nist-csf-assessment",
    logo: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67d02e229614013a057c85d3_Logo-4.avif",
    logoAlt:
      "NIST Cybersecurity Framework logo with text in white on a black background.",
  },
  {
    name: "HIPAA",
    text: "CyberCrest works with healthcare organizations to improve and attest to PHI data environment security.",
    href: "https://www.cybercrestcompliance.com/services/hipaa-compliance",
    logo: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67d02e22c48af42dc2383423_Logo-5.avif",
    logoAlt:
      "Caduceus medical symbol followed by the text HIPAA Compliant in white on a transparent background.",
  },
  {
    name: "HITRUST",
    text: "We evaluate your compliance maturity and help organizations achieve HITRUST CSF certification.",
    href: "https://www.cybercrestcompliance.com/services/hitrust-compliance",
    logo: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67d02eb9cdabdf85580aadd9_Logo-6.avif",
    logoAlt:
      "Logo text reading 'HITRUST' in bold, stylized white font on a black background.",
  },
  {
    name: "GDPR",
    text: "CyberCrest supports EU businesses comply with GDPR requirements.",
    href: "https://www.cybercrestcompliance.com/services/gdpr-compliance",
    logo: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67d02e229a276642ebe302c2_Logo-7.avif",
    logoAlt: "Circular badge with the text 'GDPR Ready' and a checkmark below.",
  },
  {
    name: "CCPA",
    text: "As a qualified assessor, CyberCrest helps secure and certify customer information management controls.",
    href: "https://www.cybercrestcompliance.com/services/ccpa-compliance",
    logo: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67d02e21066d5ae009806a20_Logo-8.avif",
    logoAlt: "California Consumer Privacy Act logo.",
  },
  {
    name: "FedRAMP",
    text: "We help cloud service providers enter the federal marketplace with a FedRAMP ATO.",
    href: "https://www.cybercrestcompliance.com/services/fedramp-compliance",
    logo: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67d02e21b391b4bb70199b12_Logo-9.avif",
    logoAlt:
      "FedRAMP logo with stylized globe and text 'FedRAMP' and tagline 'Federal Risk and Authorization Management Program'.",
  },
  {
    name: "ISO 9001",
    text: "CyberCrest enables businesses to implement ISO-adhering quality management systems.",
    href: "https://www.cybercrestcompliance.com/services/iso-9001-compliance",
    logo: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67d02e22308cedf735da29be_Logo-10.avif",
    logoAlt: "ISO 9001:2015 certification logo with a globe design.",
  },
  {
    name: "SOC 2",
    text: "CyberCrest validates and attests to security controls in line with industry standards for sensitive data environments.",
    href: "https://www.cybercrestcompliance.com/services/soc2-compliance",
    logo: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67d02e228d1c45c4ba1d6fd8_Logo-11.avif",
    logoAlt:
      "AICPA SOC 2 certification badge with three stars in a circular design.",
  },
  {
    name: "ISO 27001",
    text: "CyberCrest helps drive robust Information Security Management System (ISMS) implementations.",
    href: "https://www.cybercrestcompliance.com/services/iso-27001-compliance",
    logo: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67d02e222b2681be091dec9c_Logo-12.avif",
    logoAlt: "ISO 27001 certification logo with a globe design.",
  },
];

export default function Attestations() {
  return (
    <section id="attestations" className="section attestations-section">
      <div className="section-padding top-0">
        <div className="container anim-appear-on-scroll">
          <div className="left-padding">
            <div className="align-left">
              <div className="home_cert-grid">
                <div className="home_cert-title-wr">
                  <p className="tagline-text-blue-gradient">
                    ATTESTATIONS &amp; CERTIFICATIONS
                  </p>
                  <h2 className="heading-style-32">
                    Facilitating Information Security Compliance Across Multiple
                    Frameworks, Regulations &amp; Standards
                  </h2>
                </div>

                {CERTS.map((cert) => (
                  <div key={cert.name} className="home_cert-card">
                    <div className="home_cert-card-stroke">
                      <div className="home_cert-card-gradient" />
                    </div>
                    <div className="home_cert-card-content">
                      <div className="home_cert-card-content-top">
                        <p>{cert.name}</p>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={ARROW_ICON}
                          loading="lazy"
                          alt=""
                          className="home_cert-card-content-top-icon"
                        />
                      </div>

                      <div className="home_cert-card-content-bottom">
                        <div className="spacer-xxsmall-4" />
                        <p className="paragraph">{cert.text}</p>
                        <div className="home_cert-card-content-btn">
                          <div>learn more</div>
                          <div className="btn-text-icon">{CHEVRON}</div>
                          <a
                            href={cert.href}
                            className="home_cert-card-link"
                            aria-label={`Learn more about ${cert.name}`}
                          />
                        </div>
                      </div>

                      <div className="home_cert-card-content-bg" />

                      <div className="home_cert-card-content-logo-wr">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={cert.logo}
                          loading="lazy"
                          width={100}
                          alt={cert.logoAlt}
                          className="home_cert-card-content-logo-img"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
