// Anirudh's school data: timetable and lunch menus.
// Timetable from "Anirudh's Week" (Grade 4C). Lunches from the school's order overview, translated.
// To add a new month of lunches, add a "YYYY-MM" entry to MD_MEALS with the same shape.

window.MD_TIMETABLE = {
  className: "Grade 4C",
  schoolHours: "08:30 – 15:30",
  // slots in order; lessons have a period number, breaks have a label
  slots: [
    { p: 1, start: "08:30", end: "09:15" },
    { p: 2, start: "09:15", end: "10:00" },
    { p: 3, start: "10:00", end: "10:45" },
    { label: "Morning break", start: "10:45", end: "11:30" },
    { p: 4, start: "11:30", end: "12:15" },
    { p: 5, start: "12:15", end: "13:00" },
    { label: "Lunch", start: "13:00", end: "13:30" },
    { label: "Lunch break", start: "13:30", end: "14:00" },
    { p: 6, start: "14:00", end: "14:45" },
    { p: 7, start: "14:45", end: "15:30" }
  ],
  // periods 1–7 for each school day (1 = Monday … 5 = Friday)
  days: {
    1: ["Math", "Math", "Ethik", "Topic", "Topic", "English", "English"],
    2: ["Math", "English", "Library", "Deutsch", "Deutsch", "Topic", "Music"],
    3: ["Deutsch", "Deutsch", "English", "Art", "Art", "Math", "Ethik"],
    4: ["Topic", "Music", "Sport", "Sport", "Sport", "Deutsch", "Deutsch"],
    5: ["English", "English", "Math", "Deutsch", "Deutsch", "Math", "SEALMt"]
  },
  // background / text colour per subject (light theme)
  colors: {
    Math: ["#DCEBFF", "#1D4E89"],
    English: ["#FBDDE6", "#8C1F45"],
    Deutsch: ["#FFE7C2", "#7F4A00"],
    Topic: ["#DDF2E3", "#1E6B3A"],
    Ethik: ["#ECE3FA", "#5B2C8F"],
    Library: ["#EFE7D8", "#5E4B2A"],
    Music: ["#D6F0F0", "#11605F"],
    Art: ["#FFD9D3", "#9A2A1F"],
    Sport: ["#E3F2C6", "#436410"],
    SEALMt: ["#E6E9EF", "#3B4557"]
  }
};

window.MD_MEALS = {
  "2026-11": {
    note: "All meals organic. Mon 30 Nov: not ordered yet.",
    days: {
      2: { dish: "No lunch", sides: "cancelled (travelling)", tag: "" },
      3: { dish: "Rice pudding", sides: "with apple sauce & cinnamon sugar · starter: cream of pea soup", tag: "Sweet" },
      4: { dish: "Spätzle with mushroom cream", sides: "with kohlrabi vegetables", tag: "Veggie" },
      5: { dish: "Baked fish cake (pollock)", sides: "with peas and chives", tag: "Fish" },
      6: { dish: "Spaghetti with tomato sauce", sides: "topped with grated Gouda", tag: "Veggie" },
      9: { dish: "Pumpkin & chickpea curry", sides: "with wholegrain rice", tag: "Veggie" },
      10: { dish: "Fried polenta", sides: "with tomato-pepper vegetables, baked with Gouda", tag: "Veggie" },
      11: { dish: "Turkey ragout", sides: "with carrot-apple vegetables · St. Martin's Day special", tag: "Chicken" },
      12: { dish: "Salmon in mustard sauce", sides: "with peas and rice", tag: "Fish" },
      13: { dish: "Farfalle with spinach sauce", sides: "topped with Gouda", tag: "Veggie" },
      16: { dish: "Chili sin carne", sides: "corn, kidney beans, peppers, sour cream, rice", tag: "Veggie" },
      17: { dish: "Kaiserschmarrn", sides: "fluffy shredded pancake, apple sauce, warm vanilla sauce · with a starter soup", tag: "Sweet" },
      18: { dish: "Pollock in tempura batter", sides: "with pepper-tomato vegetables (lecsó) and potatoes", tag: "Fish" },
      19: { dish: "Chicken soup", sides: "with carrots, peas, noodles & parsley", tag: "Chicken" },
      20: { dish: "No school", sides: "teacher inset day", tag: "" },
      23: { dish: "Chicken strips", sides: "in courgette cream-cheese sauce, wholegrain spaghetti", tag: "Chicken" },
      24: { dish: "Vegetable tortellini", sides: "in a cheese-cream sauce", tag: "Veggie" },
      25: { dish: "Salmon in broccoli cream sauce", sides: "with penne", tag: "Fish" },
      26: { dish: "Vegetable pan", sides: "tomatoes, lentils & broccoli in tomato sauce", tag: "Veggie" },
      27: { dish: "Potato-pumpkin cream soup", sides: "with baguette", tag: "Veggie" }
    }
  }
};
