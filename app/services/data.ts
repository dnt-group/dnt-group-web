export type Service = {
  number: string;
  title: string;
  type: string;
  desc: string;
  tags: string[];
};

export const services: Service[] = [
  {
    number: "01",
    title: "Strategic Management",
    type: "Core Service",
    desc: "DNT Group delivers hands-on hotel management across market positioning, operational optimization, and revenue growth. From concept to full-scale operations.",
    tags: ["Market Positioning", "Operational Optimization", "Revenue Growth"],
  },
  {
    number: "02",
    title: "Hotel Development & Planning",
    type: "Consulting",
    desc: "We support investors and developers from the early concept stage — market research, feasibility analysis, hotel positioning, financial planning, and operational strategy — ensuring every project is structured for long-term financial success.",
    tags: ["Feasibility Analysis", "Financial Planning", "Operational Strategy"],
  },
  {
    number: "03",
    title: "Hotel Pre-Opening",
    type: "Launch",
    desc: "Our team manages the entire pre-opening process: operational planning, recruitment and staff training, system implementation, supplier partnerships, and brand positioning. Every detail prepared for a successful opening.",
    tags: ["Staff Training", "System Implementation", "Brand Positioning"],
  },
  {
    number: "04",
    title: "Outsourced Sales & Marketing",
    type: "Growth",
    desc: "Professional outsourced services designed to maximize hotel visibility, occupancy, and revenue. OTA optimization, corporate partnerships, digital marketing, and brand positioning through a structured, data-driven strategy.",
    tags: ["OTA Optimization", "Digital Marketing", "Corporate Partnerships"],
  },
  {
    number: "05",
    title: "Revenue Management",
    type: "Performance",
    desc: "Advanced revenue strategies built on market demand analysis, competitor pricing, and booking trends. Dynamic pricing, demand forecasting, and continuous KPI monitoring — occupancy, ADR, and RevPAR — to reach each property's full potential.",
    tags: ["Dynamic Pricing", "Demand Forecasting", "RevPAR Optimization"],
  },
  {
    number: "06",
    title: "Full Hotel Management",
    type: "End-to-End",
    desc: "Complete property operations — daily management, financial oversight, revenue strategy, staff leadership, and guest experience. Professional systems with flexible leadership for sustainable growth and a strong competitive position.",
    tags: ["Daily Operations", "Financial Management", "Guest Experience"],
  },
];
