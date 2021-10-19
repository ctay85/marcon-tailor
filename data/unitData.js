export default [
	{
		name: 'A',
		type: '1 Bedroom + 1 Bath',
		image: `${process.env.BASE_PATH}/rel/plans/Plan-A.svg`,
		plate: `${process.env.BASE_PATH}/rel/plans/Key-Plan-A.svg`,
		pdf: `${process.env.BASE_PATH}/rel/plans/Tailor_Floorplans_Sheets_A.pdf`,
		area: {
			total: 670,
			interior: 538,
			outdoor: 132
		}
	},
	{
		name: 'A1',
		type: '1 Bedroom + 1 Bath',
		image: `${process.env.BASE_PATH}/rel/plans/Plan-A1.svg`,
		plate: `${process.env.BASE_PATH}/rel/plans/Key-Plan-A1.svg`,
		pdf: `${process.env.BASE_PATH}/rel/plans/Tailor_Floorplans_Sheets_A1.pdf`,
		area: {
			total: 659,
			interior: 538,
			outdoor: 121
		}
	},
	{
		name: 'B',
		type: '1 Bedroom + 1 Bath',
		image: `${process.env.BASE_PATH}/rel/plans/Plan-B.svg`,
		plate: `${process.env.BASE_PATH}/rel/plans/Key-Plan-B.svg`,
		pdf: `${process.env.BASE_PATH}/rel/plans/Tailor_Floorplans_Sheets_B.pdf`,
		area: {
			total: 723,
			interior: 646,
			outdoor: 77
		}
	},
	{
		name: 'C',
		type: '2 Bedroom + 2 Bath',
		image: `${process.env.BASE_PATH}/rel/plans/Plan-C.svg`,
		plate: `${process.env.BASE_PATH}/rel/plans/Key-Plan-C.svg`,
		pdf: `${process.env.BASE_PATH}/rel/plans/Tailor_Floorplans_Sheets_C.pdf`,
		area: {
			total: 982,
			interior: 755,
			outdoor: 227
		}
	},
	{
		name: 'C1',
		type: '2 Bedroom + 2 Bath',
		image: `${process.env.BASE_PATH}/rel/plans/Plan-C1.svg`,
		plate: `${process.env.BASE_PATH}/rel/plans/Key-Plan-C1.svg`,
		pdf: `${process.env.BASE_PATH}/rel/plans/Tailor_Floorplans_Sheets_C1.pdf`,
		area: {
			total: 960,
			interior: 786,
			outdoor: 174
		}
	},
	{
		name: 'D',
		type: '2 Bedroom + 2 Bath',
		image: `${process.env.BASE_PATH}/rel/plans/Plan-D1.svg`,
		plate: `${process.env.BASE_PATH}/rel/plans/Key-Plan-D.svg`,
		pdf: `${process.env.BASE_PATH}/rel/plans/Tailor_Floorplans_Sheets_D.pdf`,
		area: {
			total: 1116,
			interior: 893,
			outdoor: 223
		}
	},
	{
		name: 'D1',
		type: '2 Bedroom + 2 Bath',
		image: `${process.env.BASE_PATH}/rel/plans/Plan-D1.svg`,
		plate: `${process.env.BASE_PATH}/rel/plans/Key-Plan-D1.svg`,
		pdf: `${process.env.BASE_PATH}/rel/plans/Tailor_Floorplans_Sheets_D1.pdf`,
		area: {
			interior: 893,
			outdoor: 223,
			total: 1116
		}
	},
	{
		name: 'E',
		type: 'Jr 1 Bedroom + 1 Bath',
		image: `${process.env.BASE_PATH}/rel/plans/Plan-E.svg`,
		plate: `${process.env.BASE_PATH}/rel/plans/Key-Plan-E.svg`,
		pdf: `${process.env.BASE_PATH}/rel/plans/Tailor_Floorplans_Sheets_E.pdf`,
		area: {
			interior: 484,
			outdoor: 156,
			total: 640
		}
	},
	{
		name: 'F',
		type: 'Studio + 1 Bath',
		image: `${process.env.BASE_PATH}/rel/plans/Plan-F.svg`,
		plate: `${process.env.BASE_PATH}/rel/plans/Key-Plan-F.svg`,
		pdf: `${process.env.BASE_PATH}/rel/plans/Tailor_Floorplans_Sheets_F.pdf`,
		area: {
			interior: 366,
			outdoor: 163,
			total: 529
		}
	},
	{
		name: 'TH1',
		type: '2 Bedroom + 2 Bath + 2 Powder + Work',
		images: [
			{ file: `${process.env.BASE_PATH}/rel/plans/Plan_TH1_Access.svg`, caption: 'Access' },
			{ file: `${process.env.BASE_PATH}/rel/plans/Plan_TH1_Main.svg`, caption: 'Main' },
			{ file: `${process.env.BASE_PATH}/rel/plans/Plan_TH1_Upper.svg`, caption: 'Upper' }
		],
		plate: `${process.env.BASE_PATH}/rel/plans/Key-Plan-TH1.svg`,
		pdf: `${process.env.BASE_PATH}/rel/plans/Tailor_Floorplans_Sheets_TH1.pdf`,
		area: {
			interior: 1699,
			outdoor: 677,
			total: 2376
		}
	},
	{
		name: 'TH2/3',
		type: '2 Bedroom + 2 Bath + 2 Powder + Work',
		images: [
			{ file: `${process.env.BASE_PATH}/rel/plans/Plan_TH2_Access.svg`, caption: 'Access' },
			{ file: `${process.env.BASE_PATH}/rel/plans/Plan_TH2_Main.svg`, caption: 'Main' },
			{ file: `${process.env.BASE_PATH}/rel/plans/Plan_TH2_Upper.svg`, caption: 'Upper' }
		],
		plate: `${process.env.BASE_PATH}/rel/plans/Key-Plan-TH2.svg`,
		pdf: `${process.env.BASE_PATH}/rel/plans/Tailor_Floorplans_Sheets_TH2-3.pdf`,
		area: {
			interior: 1699,
			outdoor: 673,
			total: 2372
		}
	},
	{
		name: 'TH4',
		type: '2 Bedroom + 2 Bath + 2 Powder + Work',
		images: [
			{ file: `${process.env.BASE_PATH}/rel/plans/Plan_TH4_Access.svg`, caption: 'Access' },
			{ file: `${process.env.BASE_PATH}/rel/plans/Plan_TH4_Main.svg`, caption: 'Main' },
			{ file: `${process.env.BASE_PATH}/rel/plans/Plan_TH4_Upper.svg`, caption: 'Upper' }
		],
		plate: `${process.env.BASE_PATH}/rel/plans/Key-Plan-TH4.svg`,
		pdf: `${process.env.BASE_PATH}/rel/plans/Tailor_Floorplans_Sheets_TH4.pdf`,
		area: {
			interior: 1699,
			outdoor: 673,
			total: 2372
		}
	},
	{
		name: 'TH5',
		type: '2 Bedroom + 2 Bath + 2 Powder + Work',
		images: [
			{ file: `${process.env.BASE_PATH}/rel/plans/Plan_TH5_Access.svg`, caption: 'Access' },
			{ file: `${process.env.BASE_PATH}/rel/plans/Plan_TH5_Main.svg`, caption: 'Main' },
			{ file: `${process.env.BASE_PATH}/rel/plans/Plan_TH5_Upper.svg`, caption: 'Upper' }
		],
		plate: `${process.env.BASE_PATH}/rel/plans/Key-Plan-TH5.svg`,
		pdf: `${process.env.BASE_PATH}/rel/plans/Tailor_Floorplans_Sheets_TH5.pdf`,
		area: {
			interior: 1699,
			outdoor: 821,
			total: 2520
		}
	},
	{
		name: 'SPH1',
		type: '3 Bedroom + 2 Bath',
		image: `${process.env.BASE_PATH}/rel/plans/Plan-SPH1.svg`,
		plate: `${process.env.BASE_PATH}/rel/plans/Key-Plan-SPH1.svg`,
		pdf: `${process.env.BASE_PATH}/rel/plans/Tailor_Floorplans_Sheets_SPH1.pdf`,
		area: {
			interior: 1389,
			outdoor: 1326,
			total: 2715
		}
	},
	{
		name: 'SPH2',
		type: '3 Bedroom + 2 Bath',
		image: `${process.env.BASE_PATH}/rel/plans/Plan-SPH2.svg`,
		plate: `${process.env.BASE_PATH}/rel/plans/Key-Plan-SPH2.svg`,
		pdf: `${process.env.BASE_PATH}/rel/plans/Tailor_Floorplans_Sheets_SPH2.pdf`,
		area: {
			interior: 1378,
			outdoor: 1642,
			total: 3020
		}
	},
	{
		name: 'PH1',
		type: '3 Bedroom + 2 Bath',
		image: `${process.env.BASE_PATH}/rel/plans/Plan-PH1.svg`,
		plate: `${process.env.BASE_PATH}/rel/plans/Key-Plan-PH1.svg`,
		pdf: `${process.env.BASE_PATH}/rel/plans/Tailor_Floorplans_Sheets_PH1.pdf`,
		area: {
			interior: 1389,
			outdoor: 953,
			total: 2342
		}
	},
	{
		name: 'PH2',
		type: '3 Bedroom + 2 Bath',
		image: `${process.env.BASE_PATH}/rel/plans/Plan-PH2.svg`,
		plate: `${process.env.BASE_PATH}/rel/plans/Key-Plan-PH2.svg`,
		pdf: `${process.env.BASE_PATH}/rel/plans/Tailor_Floorplans_Sheets_PH2.pdf`,
		area: {
			interior: 1378,
			outdoor: 1114,
			total: 2492
		}
	}
]
