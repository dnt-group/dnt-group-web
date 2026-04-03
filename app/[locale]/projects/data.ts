export type Filter = "all" | "ongoing" | "completed";

export type Project = {
  img: string;
  title: string;
  location: string;
  type: string;
  status: "ongoing" | "completed";
  desc: string;
};

export const projects: Project[] = [
  {
    img: "https://dnt-group-sq0469ba.durable.site/_next/image?url=https%3A%2F%2Frjdavx8ozyznxeyh.public.blob.vercel-storage.com%2Fproduction%2Fwebsites%2Fuploaded-media%2F3Q6A7105-fZfUA7vFkYtszP1NqFrmpc19udXGL0.jpg&w=750&q=75",
    title: "Restaurant TAGHI",
    location: "Tbilisi, Georgia",
    type: "Restaurant",
    status: "completed",
    desc: "A refined dining concept in the heart of Tbilisi, blending Georgian culinary traditions with modern hospitality standards.",
  },
  {
    img: "https://dnt-group-sq0469ba.durable.site/_next/image?url=https%3A%2F%2Frjdavx8ozyznxeyh.public.blob.vercel-storage.com%2Fproduction%2Fwebsites%2Fuploaded-media%2FDSC00156%2520%25D0%25BA%25D0%25BE%25D0%25BF%25D0%25B8%25D1%258F%2520copy-6NjvAfh0EnXbYLlHhCTVrgVScXzWZI.jpg&w=750&q=75",
    title: "Makmani Boutique Hotel",
    location: "Tbilisi, Georgia",
    type: "Hotel",
    status: "completed",
    desc: "A boutique property in Old Tbilisi offering an intimate guest experience rooted in local culture and design.",
  },
  {
    img: "https://dnt-group-sq0469ba.durable.site/_next/image?url=https%3A%2F%2Frjdavx8ozyznxeyh.public.blob.vercel-storage.com%2Fproduction%2Fwebsites%2Fuploaded-media%2FNK209674-Xi8iSitpSMDWrufTOs4qm6v2Opvddb.jpg&w=750&q=75",
    title: "Hotel Memoir Kazbegi",
    location: "Kazbegi, Georgia",
    type: "Hotel",
    status: "ongoing",
    desc: "A mountain retreat in Kazbegi positioned to capture the growing demand for premium nature-based tourism in Georgia.",
  },
  {
    img: "https://dnt-group-sq0469ba.durable.site/_next/image?url=https%3A%2F%2Frjdavx8ozyznxeyh.public.blob.vercel-storage.com%2Fproduction%2Fwebsites%2Fuploaded-media%2F3Q6A7105-fZfUA7vFkYtszP1NqFrmpc19udXGL0.jpg&w=750&q=75",
    title: "Batumi Seafront Resort",
    location: "Batumi, Georgia",
    type: "Resort",
    status: "ongoing",
    desc: "A full-scale resort development on Batumi's seafront, combining leisure, dining, and conference facilities.",
  },
  {
    img: "https://dnt-group-sq0469ba.durable.site/_next/image?url=https%3A%2F%2Frjdavx8ozyznxeyh.public.blob.vercel-storage.com%2Fproduction%2Fwebsites%2Fuploaded-media%2FDSC00156%2520%25D0%25BA%25D0%25BE%25D0%25BF%25D0%25B8%25D1%258F%2520copy-6NjvAfh0EnXbYLlHhCTVrgVScXzWZI.jpg&w=750&q=75",
    title: "Kutaisi Heritage Inn",
    location: "Kutaisi, Georgia",
    type: "Hotel",
    status: "completed",
    desc: "A heritage property restored and repositioned as a premium stay near the UNESCO-listed Bagrati Cathedral.",
  },
  {
    img: "https://dnt-group-sq0469ba.durable.site/_next/image?url=https%3A%2F%2Frjdavx8ozyznxeyh.public.blob.vercel-storage.com%2Fproduction%2Fwebsites%2Fuploaded-media%2FNK209674-Xi8iSitpSMDWrufTOs4qm6v2Opvddb.jpg&w=750&q=75",
    title: "Sighnaghi Wine Hotel",
    location: "Sighnaghi, Georgia",
    type: "Hotel",
    status: "ongoing",
    desc: "An upscale wine tourism destination in Georgia's Kakheti region, designed around the local winemaking culture.",
  },
];

export const filters: { label: string; value: Filter }[] = [
  { label: "All Projects", value: "all" },
  { label: "Ongoing", value: "ongoing" },
  { label: "Completed", value: "completed" },
];
