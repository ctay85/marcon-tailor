
export default [
  {
    name : 'A',
    type : '1 Bedroom + 1 Bath',
    image : `${process.env.BASE_PATH}/rel/plans/Plan-A.svg`,
    plate : `${process.env.BASE_PATH}/rel/plans/Key-Plan-A.svg`,
    pdf : `${process.env.BASE_PATH}/rel/plans/Tailor_Floorplans_Sheets_A.pdf`,
    area : {
      total : 670,
      interior : 538,
      outdoor : 132
    }
  },
  {
    name : 'A1',
    type : '1 Bedroom + 1 Bath',
    image : `${process.env.BASE_PATH}/rel/plans/Plan-A1.svg`,
    plate : `${process.env.BASE_PATH}/rel/plans/Key-Plan-A1.svg`,
    pdf : `${process.env.BASE_PATH}/rel/plans/Tailor_Floorplans_Sheets_A1.pdf`,
    area : {
      total : 659,
      interior : 538,
      outdoor : 121
    }
  },
  {
    name : 'B',
    type : '1 Bedroom + 1 Bath',
    image : `${process.env.BASE_PATH}/rel/plans/Plan-B.svg`,
    plate : `${process.env.BASE_PATH}/rel/plans/Key-Plan-B.svg`,
    pdf : `${process.env.BASE_PATH}/rel/plans/Tailor_Floorplans_Sheets_B.pdf`,
    area : {
      total : 723,
      interior : 646,
      outdoor : 77
    }
  },
  {
    name : 'C',
    type : '2 Bedroom + 2 Bath',
    image : `${process.env.BASE_PATH}/rel/plans/Plan-C.svg`,
    plate : `${process.env.BASE_PATH}/rel/plans/Key-Plan-C.svg`,
    pdf : `${process.env.BASE_PATH}/rel/plans/Tailor_Floorplans_Sheets_C.pdf`,
    area : {
      total : 991,
      interior : 764,
      outdoor : 227
    }
  },
  {
    name : 'C1',
    type : '2 Bedroom + 2 Bath',
    image : `${process.env.BASE_PATH}/rel/plans/Plan-C1.svg`,
    plate : `${process.env.BASE_PATH}/rel/plans/Key-Plan-C1.svg`,
    pdf : `${process.env.BASE_PATH}/rel/plans/Tailor_Floorplans_Sheets_C1.pdf`,
    area : {
      total : 960,
      interior : 786,
      outdoor : 174
    }
  },
  {
    name : 'D',
    type : '2 Bedroom + 2 Bath',
    image : `${process.env.BASE_PATH}/rel/plans/Plan-D1.svg`,
    plate : `${process.env.BASE_PATH}/rel/plans/Key-Plan-D.svg`,
    pdf : `${process.env.BASE_PATH}/rel/plans/Tailor_Floorplans_Sheets_D.pdf`,
    area : {
      total : 1116,
      interior : 893,
      outdoor : 223
    }
  },
  {
    name : 'D1',
    type : '2 Bedroom + 2 Bath',
    image : `${process.env.BASE_PATH}/rel/plans/Plan-D1.svg`,
    plate : `${process.env.BASE_PATH}/rel/plans/Key-Plan-D1.svg`,
    pdf : `${process.env.BASE_PATH}/rel/plans/Tailor_Floorplans_Sheets_D1.pdf`,
    area : {
      interior : 893,
      outdoor : 223,
      total : 1116
    }
  },
  {
    name : 'E',
    type : 'Jr 1 Bedroom + 1 Bath',
    image : `${process.env.BASE_PATH}/rel/plans/Plan-E.svg`,
    plate : `${process.env.BASE_PATH}/rel/plans/Key-Plan-E.svg`,
    pdf : `${process.env.BASE_PATH}/rel/plans/Tailor_Floorplans_Sheets_E.pdf`,
    area : {
      interior : 484,
      outdoor : 156,
      total : 640
    }
  },
  {
    name : 'F',
    type : 'Studio + 1 Bath',
    image : `${process.env.BASE_PATH}/rel/plans/Plan-F.svg`,
    plate : `${process.env.BASE_PATH}/rel/plans/Key-Plan-F.svg`,
    pdf : `${process.env.BASE_PATH}/rel/plans/Tailor_Floorplans_Sheets_F.pdf`,
    area : {
      interior : 366,
      outdoor : 163,
      total : 529
    }
  },
  {
    name : 'TH1',
    type : '2 Bedroom + 2 Bath + 2 Powder + Work',
    images : [
      { file : `${process.env.BASE_PATH}/rel/plans/Plan-TH1-Lower.svg`, caption : 'Lower' },
      { file : `${process.env.BASE_PATH}/rel/plans/Plan-TH1-Main.svg`, caption : 'Main' },
      { file : `${process.env.BASE_PATH}/rel/plans/Plan-TH1-Upper.svg`, caption : 'Upper' }
    ],
    plate : `${process.env.BASE_PATH}/rel/plans/Key-Plan-TH1.svg`,
    pdf : `${process.env.BASE_PATH}/rel/plans/Tailor_Floorplans_Sheets_TH1.pdf`,
    area : {
      interior : 1701,
      outdoor : 677,
      total : 2378
    }
  },
  {
    name : 'TH2',
    type : '2 Bedroom + 2 Bath + 2 Powder + Work',
    images : [
      { file : `${process.env.BASE_PATH}/rel/plans/Plan-TH2-Lower.svg`, caption : 'Lower' },
      { file : `${process.env.BASE_PATH}/rel/plans/Plan-TH2-Main.svg`, caption : 'Main' },
      { file : `${process.env.BASE_PATH}/rel/plans/Plan-TH2-Upper.svg`, caption : 'Upper' }
    ],
    plate : `${process.env.BASE_PATH}/rel/plans/Key-Plan-TH2.svg`,
    pdf : `${process.env.BASE_PATH}/rel/plans/Tailor_Floorplans_Sheets_TH2.pdf`,
    area : {
      interior : 1679,
      outdoor : 673,
      total : 2352
    }
  },
  {
    name : 'TH3/4',
    type : '2 Bedroom + 2 Bath + 2 Powder + Work',
    images : [
      { file : `${process.env.BASE_PATH}/rel/plans/Plan-TH3-4-Lower.svg`, caption : 'Lower' },
      { file : `${process.env.BASE_PATH}/rel/plans/Plan-TH3-4-Main.svg`, caption : 'Main' },
      { file : `${process.env.BASE_PATH}/rel/plans/Plan-TH3-4-Upper.svg`, caption : 'Upper' }
    ],
    plate : `${process.env.BASE_PATH}/rel/plans/Key-Plan-TH3-4.svg`,
    pdf : `${process.env.BASE_PATH}/rel/plans/Tailor_Floorplans_Sheets_TH3-4.pdf`,
    area : {
      interior : 1679,
      outdoor : 673,
      total : 2352
    }
  },
  {
    name : 'TH5',
    type : '2 Bedroom + 2 Bath + 2 Powder + Work',
    images : [
      { file : `${process.env.BASE_PATH}/rel/plans/Plan-TH5-Lower.svg`, caption : 'Lower' },
      { file : `${process.env.BASE_PATH}/rel/plans/Plan-TH5-Main.svg`, caption : 'Main' },
      { file : `${process.env.BASE_PATH}/rel/plans/Plan-TH5-Upper.svg`, caption : 'Upper' }
    ],
    plate : `${process.env.BASE_PATH}/rel/plans/Key-Plan-TH5.svg`,
    pdf : `${process.env.BASE_PATH}/rel/plans/Tailor_Floorplans_Sheets_TH5.pdf`,
    area : {
      interior : 1701,
      outdoor : 821,
      total : 2522
    }
  },
  {
    name : 'SPH1',
    type : '3 Bedroom + 2 Bath',
    image : `${process.env.BASE_PATH}/rel/plans/Plan-SPH1.svg`,
    plate : `${process.env.BASE_PATH}/rel/plans/Key-Plan-SPH1.svg`,
    pdf : `${process.env.BASE_PATH}/rel/plans/Tailor_Floorplans_Sheets_SPH1.pdf`,
    area : {
      interior : 1389,
      outdoor : 1326,
      total : 2715
    }
  },
  {
    name : 'SPH2',
    type : '3 Bedroom + 2 Bath',
    image : `${process.env.BASE_PATH}/rel/plans/Plan-SPH2.svg`,
    plate : `${process.env.BASE_PATH}/rel/plans/Key-Plan-SPH2.svg`,
    pdf : `${process.env.BASE_PATH}/rel/plans/Tailor_Floorplans_Sheets_SPH2.pdf`,
    area : {
      interior : 1378,
      outdoor : 1642,
      total : 3020
    }
  },
  {
    name : 'PH1',
    type : '3 Bedroom + 2 Bath',
    image : `${process.env.BASE_PATH}/rel/plans/Plan-PH1.svg`,
    plate : `${process.env.BASE_PATH}/rel/plans/Key-Plan-PH1.svg`,
    pdf : `${process.env.BASE_PATH}/rel/plans/Tailor_Floorplans_Sheets_PH1.pdf`,
    area : {
      interior : 1389,
      outdoor : 953,
      total : 2342
    }
  },
  {
    name : 'PH2',
    type : '3 Bedroom + 2 Bath',
    image : `${process.env.BASE_PATH}/rel/plans/Plan-PH2.svg`,
    plate : `${process.env.BASE_PATH}/rel/plans/Key-Plan-PH2.svg`,
    pdf : `${process.env.BASE_PATH}/rel/plans/Tailor_Floorplans_Sheets_PH2.pdf`,
    area : {
      interior : 1378,
      outdoor : 1114,
      total : 2492
    }
  },
]
