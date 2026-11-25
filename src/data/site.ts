// Everything the site says lives here: the studio, projects with their
// galleries and materials, services, process, fees and press. Change it and rebuild.

export const site = {
  name: "Calloway Reyes",
  fullName: "Calloway Reyes Interiors",
  tagline: "Residential interiors in the Hudson Valley and New York",
  description:
    "Calloway Reyes is a small interior design studio in Hudson, New York, designing calm, hard-wearing homes with natural materials, local makers and a lot of daylight.",
  email: "studio@callowayreyes.example",
  phone: "(518) 555-0119",
  phoneHref: "+15185550119",
  address: { street: "61 Warren Street, Second Floor", city: "Hudson", region: "NY", postal: "12534", country: "US" },
  nav: [
    { href: "/projects", label: "Projects" },
    { href: "/services", label: "Services" },
    { href: "/press", label: "Press" },
  ],
};

export const intro = {
  title: "Rooms that get better the longer you live in them",
  text: "Calloway Reyes is Nadia Calloway and Tomas Reyes, designing homes in the Hudson Valley and New York City since 2015. Limewash, oak, linen and stone, chosen to wear in rather than wear out.",
};

// Drawn room views. `kind` picks the drawing; the palette colors the planes.
export type Palette = { wall: string; floor: string; trim: string; fabric: string; wood: string; accent: string; light: string };
export type View = { kind: "living" | "kitchen" | "bedroom" | "bath" | "dining" | "hall"; caption: string; palette: Palette };
export type Material = { name: string; color: string };
export type Project = {
  slug: string;
  name: string;
  location: string;
  year: number;
  type: string;
  summary: string;
  brief: string[];
  scope: string[];
  materials: Material[];
  credits: { role: string; name: string }[];
  gallery: View[];
  // Which gallery view stands for the project on the home and projects pages
  cover: number;
};

const limewash: Palette = { wall: "#e6dfd2", floor: "#b99a74", trim: "#d8cfbf", fabric: "#d9d2c3", wood: "#8f6b47", accent: "#4f5a2e", light: "#f6f0e2" };
const clay: Palette = { wall: "#d9c2ad", floor: "#a8855f", trim: "#cdb39b", fabric: "#ede6da", wood: "#6e4f35", accent: "#8a4a32", light: "#f7eadb" };
const stone: Palette = { wall: "#dcdad3", floor: "#c4beb2", trim: "#cfccc3", fabric: "#a9ae9a", wood: "#7d6a55", accent: "#3e4a3a", light: "#f1f0ea" };
const ink: Palette = { wall: "#3c4446", floor: "#8d7458", trim: "#4a5355", fabric: "#c9bfae", wood: "#5e4632", accent: "#b38b4d", light: "#d9d2c0" };
const sage: Palette = { wall: "#cfd3c2", floor: "#b8a07f", trim: "#c4c9b5", fabric: "#efe9dc", wood: "#7a5c3e", accent: "#5b6340", light: "#eef0e4" };

export const projects: Project[] = [
  {
    slug: "orchard-lane-farmhouse",
    cover: 0,
    name: "Orchard Lane Farmhouse",
    location: "Ghent, New York",
    year: 2026,
    type: "Whole house",
    summary: "An 1840s farmhouse opened up for a family of five, keeping its wide pine floors and low ceilings.",
    brief: [
      "The house had been divided into small rooms over a century of additions. The family wanted one place to cook and eat together, and a quiet room for each of them.",
      "We took down two later partitions, moved the kitchen into the old summer kitchen, and kept every original floorboard, re-laid where it had been patched.",
    ],
    scope: ["Space planning", "Kitchen and bath design", "Joinery", "Furniture and lighting", "Art installation"],
    materials: [
      { name: "Limewash, Hayloft", color: "#e6dfd2" },
      { name: "Reclaimed white pine", color: "#b99a74" },
      { name: "Honed soapstone", color: "#55595a" },
      { name: "Unlacquered brass", color: "#b79650" },
      { name: "Olive wool boucle", color: "#6d7445" },
    ],
    credits: [
      { role: "Builder", name: "Kinderhook Restoration Co." },
      { role: "Joinery", name: "Ashfield Woodworks" },
      { role: "Architect", name: "Studio Brennan Hale" },
    ],
    gallery: [
      { kind: "living", caption: "The front room, with the original fireplace and a sofa made locally to fit the low window", palette: limewash },
      { kind: "kitchen", caption: "The kitchen in the old summer kitchen, soapstone counters and open oak shelves", palette: { ...limewash, accent: "#55595a" } },
      { kind: "dining", caption: "A long table for seven under a pair of linen pendants", palette: limewash },
      { kind: "bedroom", caption: "The main bedroom under the eaves", palette: { ...limewash, fabric: "#c8cdb6" } },
    ],
  },
  {
    slug: "perry-street-apartment",
    cover: 1,
    name: "Perry Street Apartment",
    location: "West Village, New York",
    year: 2025,
    type: "Apartment",
    summary: "A dark two-bedroom made warm with clay plaster, walnut and a lot of lamp light.",
    brief: [
      "North-facing and on the second floor, the apartment would never be bright, so we stopped trying. Clay plaster, walnut and low lamps make it feel lit from inside.",
      "Storage was built into every wall that could take it, so the rooms could stay nearly empty.",
    ],
    scope: ["Renovation", "Joinery", "Furniture and lighting", "Styling"],
    materials: [
      { name: "Clay plaster, Terracotta", color: "#d9c2ad" },
      { name: "Oiled black walnut", color: "#6e4f35" },
      { name: "Rust linen", color: "#8a4a32" },
      { name: "Patinated bronze", color: "#7a6646" },
    ],
    credits: [
      { role: "Contractor", name: "Lowell and Park Builders" },
      { role: "Plaster", name: "Mira Santos Finishes" },
    ],
    gallery: [
      { kind: "living", caption: "The living room after dark, lit by three lamps and nothing overhead", palette: clay },
      { kind: "hall", caption: "The entry, with walnut storage running the length of the hall", palette: clay },
      { kind: "bedroom", caption: "The bedroom, clay plaster from floor to ceiling", palette: { ...clay, fabric: "#e9dccb" } },
    ],
  },
  {
    slug: "river-road-house",
    cover: 1,
    name: "River Road House",
    location: "Tivoli, New York",
    year: 2025,
    type: "New build",
    summary: "A new house above the Hudson, where every room is planned around a view of the water.",
    brief: [
      "The architects gave the house long windows on the river side; our job was to make the rooms sit quietly behind them and not compete.",
      "Floors, walls and joinery are all close in tone, so the view is the only strong color in the house.",
    ],
    scope: ["Interior architecture", "Kitchen and bath design", "Furniture", "Landscape coordination"],
    materials: [
      { name: "Limestone, Pietra Serena", color: "#c4beb2" },
      { name: "White oak, fumed", color: "#7d6a55" },
      { name: "Moss linen", color: "#a9ae9a" },
      { name: "Blackened steel", color: "#3b3d3c" },
    ],
    credits: [
      { role: "Architect", name: "Vale and Ostrom Architects" },
      { role: "Builder", name: "Red Hook Building Company" },
    ],
    gallery: [
      { kind: "living", caption: "The river room, with low furniture under a long window", palette: stone },
      { kind: "bath", caption: "A limestone bath with a window at tub height", palette: stone },
      { kind: "kitchen", caption: "The kitchen, steel and fumed oak", palette: { ...stone, accent: "#3b3d3c" } },
    ],
  },
  {
    slug: "carroll-gardens-parlor",
    cover: 0,
    name: "Carroll Gardens Parlor",
    location: "Brooklyn, New York",
    year: 2024,
    type: "Room refresh",
    summary: "A brownstone parlor floor in deep green-gray, for a couple who read in the evenings.",
    brief: [
      "The parlor had good bones and tired paint. The couple wanted a room for long evenings, so we went dark on the walls and warm everywhere else.",
      "The work took eleven weeks and no walls moved.",
    ],
    scope: ["Color and finishes", "Furniture", "Lighting", "Art and objects"],
    materials: [
      { name: "Paint, Slate Harbor", color: "#3c4446" },
      { name: "Tobacco velvet", color: "#8d6a45" },
      { name: "Aged brass", color: "#b38b4d" },
      { name: "Oatmeal wool", color: "#c9bfae" },
    ],
    credits: [{ role: "Painter", name: "Bergen Street Decorating" }],
    gallery: [
      { kind: "living", caption: "The parlor in Slate Harbor, with the original plaster ceiling", palette: ink },
      { kind: "dining", caption: "The back parlor, now a reading table", palette: ink },
    ],
  },
  {
    slug: "millbrook-guest-cottage",
    cover: 0,
    name: "Millbrook Guest Cottage",
    location: "Millbrook, New York",
    year: 2024,
    type: "Whole house",
    summary: "A one-room cottage for visiting family, with a sleeping loft and a kitchen in a single cabinet.",
    brief: [
      "Four hundred square feet for guests who stay a week at a time. Everything folds, slides or does two jobs, and nothing looks like it does.",
    ],
    scope: ["Space planning", "Joinery", "Furniture", "Linens and styling"],
    materials: [
      { name: "Limewash, Sage", color: "#cfd3c2" },
      { name: "Ash plywood", color: "#b8a07f" },
      { name: "Undyed linen", color: "#efe9dc" },
      { name: "Waxed cotton, Olive", color: "#5b6340" },
    ],
    credits: [{ role: "Joinery", name: "Ashfield Woodworks" }],
    gallery: [
      { kind: "kitchen", caption: "The kitchen, folded into one long cabinet", palette: sage },
      { kind: "bedroom", caption: "The sleeping loft, under the roof window", palette: sage },
    ],
  },
];

export const services = [
  {
    name: "Full-service design",
    text: "Renovations and new builds, from the first plan to the last lamp. We work alongside your architect and builder, design the joinery, kitchens and baths, and buy and install every piece.",
    fee: "A fixed design fee agreed after the first visit, usually 10 to 15% of the project budget",
  },
  {
    name: "Room refresh",
    text: "One or two rooms, no building work. Color, furniture, lighting and the right rug, with a plan you can follow yourself or that we install for you.",
    fee: "From $6,500 a room",
  },
  {
    name: "Consultation",
    text: "Two hours at your home, a written list of what we'd change and where to find it. Good before buying a house or starting a renovation.",
    fee: "$650, taken off the fee if you go ahead",
  },
];

export const process = [
  { title: "First visit", text: "We walk the house with you, listen, measure and take photos. A short proposal follows within a week." },
  { title: "Concept", text: "Plans, a material board you can touch, and the first furniture ideas. We revise until it's right." },
  { title: "Design and drawings", text: "Joinery and kitchen drawings, lighting plans, and a full schedule of finishes for your builder." },
  { title: "Buying and building", text: "We order everything, check the work on site every week and handle what goes wrong." },
  { title: "Install", text: "Furniture, art, linens and lamps go in over two or three days, usually while you're away." },
];

export const feesNote = "Sample fees for this template. Replace them with your own.";

// Fictional publications and quotes for this template.
export const press = [
  { outlet: "Valley House Journal", title: "A farmhouse that kept its floors", date: "Spring 2026", quote: "Calloway Reyes treat old houses like good furniture: cleaned, mended, never sanded smooth.", project: "orchard-lane-farmhouse" },
  { outlet: "The Interior Ledger", title: "Ten studios to know in the Hudson Valley", date: "January 2026", quote: "Rooms that look like they were always this way, which is the hardest trick in the business.", project: "" },
  { outlet: "City Rooms Quarterly", title: "Dark by design", date: "Fall 2025", quote: "A north-facing apartment that gave up on brightness and found something better.", project: "perry-street-apartment" },
  { outlet: "Northeast Home Review", title: "Small rooms, long stays", date: "Summer 2024", quote: "Four hundred square feet that never feel like a compromise.", project: "millbrook-guest-cottage" },
];
export const pressNote = "Publications and quotes are fictional, written for this template.";

export const enquiry = {
  types: ["Whole house", "Renovation", "New build", "Apartment", "One or two rooms", "Consultation"],
  budgets: ["Under $50,000", "$50,000 to $150,000", "$150,000 to $400,000", "Over $400,000", "Not sure yet"],
  timelines: ["As soon as possible", "In the next 6 months", "6 to 12 months", "Next year or later"],
};
