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
		name: '101',
		type: '2 Bedroom + Family',
		images: [
			{ file: `${process.env.BASE_PATH}/rel/plans/TH1-1.svg`, caption: 'Access' },
			{ file: `${process.env.BASE_PATH}/rel/plans/TH1-2.svg`, caption: 'Main' },
			{ file: `${process.env.BASE_PATH}/rel/plans/TH1-3.svg`, caption: 'Upper' }
		],
		plate: `${process.env.BASE_PATH}/rel/plans/Key-Plan-TH1.svg`,
		pdf: `${process.env.BASE_PATH}/rel/plans/Tailor_Floorplans_Sheets_101.pdf`,
		area: {
			interior: 1687,
			outdoor: 677,
			total: 2364
		}
	},
	{
		name: '102/103',
		type: '2 Bedroom + Family',
		images: [
			{ file: `${process.env.BASE_PATH}/rel/plans/TH2-1.svg`, caption: 'Access' },
			{ file: `${process.env.BASE_PATH}/rel/plans/TH2-2.svg`, caption: 'Main' },
			{ file: `${process.env.BASE_PATH}/rel/plans/TH2-3.svg`, caption: 'Upper' }
		],
		plate: `${process.env.BASE_PATH}/rel/plans/Key-Plan-TH2.svg`,
		pdf: `${process.env.BASE_PATH}/rel/plans/Tailor_Floorplans_Sheets_102.pdf`,
		area: {
			interior: 1664,
			outdoor: 673,
			total: 2337
		}
	},
	{
		name: '104',
		type: '2 Bedroom + Family',
		images: [
			{ file: `${process.env.BASE_PATH}/rel/plans/TH4-1.svg`, caption: 'Access' },
			{ file: `${process.env.BASE_PATH}/rel/plans/TH4-2.svg`, caption: 'Main' },
			{ file: `${process.env.BASE_PATH}/rel/plans/TH4-3.svg`, caption: 'Upper' }
		],
		plate: `${process.env.BASE_PATH}/rel/plans/Key-Plan-TH4.svg`,
		pdf: `${process.env.BASE_PATH}/rel/plans/Tailor_Floorplans_Sheets_104.pdf`,
		area: {
			interior: 1664,
			outdoor: 673,
			total: 2337
		}
	},
	{
		name: '105',
		type: '2 Bedroom + 2 Bath + 2 Powder + Work',
		images: [
			{ file: `${process.env.BASE_PATH}/rel/plans/TH5-1.svg`, caption: 'Access' },
			{ file: `${process.env.BASE_PATH}/rel/plans/TH5-2.svg`, caption: 'Main' },
			{ file: `${process.env.BASE_PATH}/rel/plans/TH5-3.svg`, caption: 'Upper' }
		],
		plate: `${process.env.BASE_PATH}/rel/plans/Key-Plan-TH5.svg`,
		pdf: `${process.env.BASE_PATH}/rel/plans/Tailor_Floorplans_Sheets_105.pdf`,
		area: {
			interior: 1686,
			outdoor: 821,
			total: 2507
		}
	},
	{
		name: '2601',
		type: '3 Bedroom + 2 Bath',
		image: `${process.env.BASE_PATH}/rel/plans/Plan-SPH1.svg`,
		plate: `${process.env.BASE_PATH}/rel/plans/Key-Plan-SPH1.svg`,
		pdf: `${process.env.BASE_PATH}/rel/plans/Tailor_Floorplans_Sheets_2601.pdf`,
		area: {
			interior: 1291,
			outdoor: 1326,
			total: 2617
		}
	},
	{
		name: '2602',
		type: '3 Bedroom + 2 Bath',
		image: `${process.env.BASE_PATH}/rel/plans/Plan-SPH2.svg`,
		plate: `${process.env.BASE_PATH}/rel/plans/Key-Plan-SPH2.svg`,
		pdf: `${process.env.BASE_PATH}/rel/plans/Tailor_Floorplans_Sheets_2602.pdf`,
		area: {
			interior: 1308,
			outdoor: 1642,
			total: 2950
		}
	},
	{
		name: '2701',
		type: '3 Bedroom + 2 Bath',
		image: `${process.env.BASE_PATH}/rel/plans/Plan-PH1.svg`,
		plate: `${process.env.BASE_PATH}/rel/plans/Key-Plan-PH1.svg`,
		pdf: `${process.env.BASE_PATH}/rel/plans/Tailor_Floorplans_Sheets_2701.pdf`,
		area: {
			interior: 1291,
			outdoor: 953,
			total: 2244
		}
	},
	{
		name: '2702',
		type: '3 Bedroom + 2 Bath',
		image: `${process.env.BASE_PATH}/rel/plans/Plan-PH2.svg`,
		plate: `${process.env.BASE_PATH}/rel/plans/Key-Plan-PH2.svg`,
		pdf: `${process.env.BASE_PATH}/rel/plans/Tailor_Floorplans_Sheets_2702.pdf`,
		area: {
			interior: 1308,
			outdoor: 1114,
			total: 2422
		}
	}
]
