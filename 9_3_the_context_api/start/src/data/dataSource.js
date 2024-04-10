const dataSet = [
  {
    resId: "RD01D02",
    resName: "Rustic Door",
    resCategories: ["Italian", "North Indian", "Continental", "Cafe"],
    resLocation: "Sector 10, Chandigarh",
    resOpen: true,
    resOffer: "10% off on beverages",
    resScore: 4.2,
  },
  {
    resId: "BPC01D03",
    resName: "Backpackers Cafe",
    resCategories: ["Italian", "Cafe", "Salad"],
    resLocation: "Inner market, Sector 9-D, Chandigarh",
    resOpen: true,
    resOffer: null,
    resScore: 4.5,
  },
  {
    resId: "RDC0502",
    resName: "Rider Cafe",
    resCategories: ["Cafe", "Salad"],
    resLocation: "Sector 35, Chandigarh",
    resOpen: false,
    resOffer: "20% off total food bill",
    resScore: 3.2,
  },
  {
    resId: "RFC0910",
    resName: "Royal Feast",
    resCategories: ["North Indian", "Mughlai"],
    resLocation: "Sector 38, Chandigarh",
    resOpen: true,
    resOffer: "25% off total food bill",
    resScore: 2.0,
  },
];
const exportData = () => Promise.resolve(dataSet);

export default exportData;
