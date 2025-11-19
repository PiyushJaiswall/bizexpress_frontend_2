// src/components/sections/Services.jsx
import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { 
  IconBuilding, 
  IconFileInvoice, 
  IconShieldCheck, 
  IconBrandPatreon,
  IconTrademark,
  IconFileAnalytics,
  IconUsers,
  IconCoins,
  IconCertificate,
  IconBriefcase,
  IconRocket,
  IconFileDescription
} from "@tabler/icons-react";

export default function Services() {
  const services = [
    {
      title: "Private Limited Company",
      description: "Complete Private Limited Company registration with Company Name Approval (RUN), e-MoA and e-AoA, Certificate of Incorporation, and Share Certificate.",
      header: <IconBuilding className="w-16 h-16 text-blue-500" />,
      className: "md:col-span-2",
      features: ["Name Approval", "e-MoA & e-AoA", "Incorporation Certificate", "Share Certificate"],
    },
    {
      title: "GST Registration & Filing",
      description: "Complete GST registration and monthly/quarterly return filing services. We handle all compliance requirements.",
      header: <IconFileInvoice className="w-16 h-16 text-green-500" />,
      className: "md:col-span-1",
      features: ["GST Registration", "Monthly Filing", "Quarterly Returns"],
    },
    {
      title: "Trademark Registration",
      description: "Protect your brand with our comprehensive trademark registration services. Complete trademark search and filing.",
      header: <IconTrademark className="w-16 h-16 text-purple-500" />,
      className: "md:col-span-1",
      features: ["Trademark Search", "Application Filing", "Monitoring"],
    },
    {
      title: "Start-up India Registration",
      description: "Registration on Start-up India Portal, DPIIT Registration/Recognition, and Application for Angel Tax Exemption.",
      header: <IconRocket className="w-16 h-16 text-pink-500" />,
      className: "md:col-span-2",
      features: ["Portal Registration", "DPIIT Recognition", "Tax Exemption"],
    },
    {
      title: "Company Annual Filings",
      description: "Annual compliances made easy. We file documents for statutory compliance and annual returns for your company.",
      header: <IconFileDescription className="w-16 h-16 text-cyan-500" />,
      className: "md:col-span-1",
      features: ["Annual Returns", "Financial Statements", "Compliance Filing"],
    },
    {
      title: "ISO Certification",
      description: "ISO 9001, 14001, 27001 and other certifications for your business. Complete certification support.",
      header: <IconBrandPatreon className="w-16 h-16 text-red-500" />,
      className: "md:col-span-1",
      features: ["ISO 9001", "ISO 14001", "ISO 27001"],
    },
    {
      title: "FSSAI License",
      description: "Get your food business license quickly and hassle-free. Complete FSSAI registration and renewal services.",
      header: <IconShieldCheck className="w-16 h-16 text-orange-500" />,
      className: "md:col-span-1",
      features: ["Basic License", "State License", "Central License"],
    },
    {
      title: "Accounting & Taxation",
      description: "Complete accounting, bookkeeping, and tax filing services. Expert handling of all your financial needs.",
      header: <IconCoins className="w-16 h-16 text-yellow-500" />,
      className: "md:col-span-2",
      features: ["Bookkeeping", "Tax Filing", "Financial Statements"],
    },
    {
      title: "LLP Registration",
      description: "Limited Liability Partnership registration with complete documentation and compliance support.",
      header: <IconBriefcase className="w-16 h-16 text-indigo-500" />,
      className: "md:col-span-1",
      features: ["LLP Formation", "Partnership Deed", "Compliance"],
    },
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-black via-neutral-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive business solutions tailored to your needs
          </p>
        </div>
        
        <BentoGrid className="max-w-7xl mx-auto">
          {services.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={
                <div className="flex flex-col items-center justify-center p-6">
                  {item.header}
                  <div className="mt-4 flex flex-wrap gap-2 justify-center">
                    {item.features.map((feature, idx) => (
                      <span key={idx} className="text-xs px-2 py-1 bg-neutral-800 rounded-full text-gray-400">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              }
              className={item.className}
            />
          ))}
        </BentoGrid>

        {/* Service Note */}
        <div className="mt-16 max-w-4xl mx-auto text-center bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-8 rounded-2xl border border-blue-500/20">
          <p className="text-lg text-gray-300 mb-4">
            <span className="font-semibold text-white">What you see is what you pay.</span> No hidden charges. Period.
          </p>
          <p className="text-gray-400">
            If there are additional requirements apart from Base Package, we will first share the revised quote and then we can move ahead.
          </p>
        </div>
      </div>
    </div>
  );
}
