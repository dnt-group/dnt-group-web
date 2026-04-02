export interface Service {
  number: string;
  title: string;
  summary: string;
  body: string;
  tags: string[];
}

export const services: Service[] = [
  {
    number: "01",
    title: "Hotel Development & Planning",
    summary: "Strategic consulting and planning for new hospitality projects.",
    body: "DNT Group provides strategic consulting and planning for new hospitality projects. We support investors and developers from the early concept stage by conducting market research, feasibility analysis, hotel positioning, financial planning, and operational strategy development. Our goal is to ensure that every project is properly structured, competitively positioned in the market, and prepared for long-term financial success.",
    tags: ["Market Research", "Feasibility Analysis", "Financial Planning", "Positioning"],
  },
  {
    number: "02",
    title: "Hotel Pre-Opening",
    summary: "Careful preparation and precise coordination for a successful launch.",
    body: "Launching a hotel requires careful preparation and precise coordination. Our team manages the entire pre-opening process, including operational planning, recruitment and staff training, system implementation, supplier partnerships, and brand positioning. We ensure that every operational aspect is prepared for a successful opening and smooth transition into full operations.",
    tags: ["Operational Planning", "Staff Training", "Brand Positioning", "System Setup"],
  },
  {
    number: "03",
    title: "Outsourced Sales & Marketing",
    summary: "Maximize hotel visibility, occupancy, and revenue through a structured sales approach.",
    body: "DNT Group offers professional outsourced sales and marketing services designed to maximize hotel visibility, occupancy, and revenue. Our services include revenue management, online distribution strategy, OTA optimization, corporate partnerships, digital marketing, and brand positioning. Through a structured sales approach and data-driven strategy, we help hotels strengthen their market presence and improve financial performance.",
    tags: ["OTA Optimization", "Digital Marketing", "Corporate Partnerships", "Distribution"],
  },
  {
    number: "04",
    title: "Revenue Management",
    summary: "Advanced strategies to maximize hotel profitability through data-driven decisions.",
    body: "DNT Group provides advanced revenue management strategies designed to maximize hotel profitability. By analyzing market demand, competitor pricing, booking trends, and seasonal fluctuations, we optimize room rates and distribution channels to achieve the highest possible revenue performance. Our approach includes dynamic pricing strategies, demand forecasting, market benchmarking, and continuous performance analysis through close monitoring of occupancy, ADR, and RevPAR.",
    tags: ["Dynamic Pricing", "Demand Forecasting", "ADR & RevPAR", "Benchmarking"],
  },
  {
    number: "05",
    title: "Full Hotel Management",
    summary: "Complete operation of the property from daily management to long-term growth.",
    body: "Our full hotel management service covers the complete operation of the property. DNT Group oversees daily operations, financial management, revenue strategy, staff leadership, guest experience, and operational efficiency. By combining professional management systems with flexible leadership, we ensure sustainable growth, improved profitability, and a strong competitive position in the hospitality market.",
    tags: ["Daily Operations", "Financial Management", "Guest Experience", "Staff Leadership"],
  },
];
