import Link from "next/link";

export function Footer() {
  return (
    <div className="flex flex-col justify-evenly gap-6 overflow-hidden bg-white text-tertiary pb-8 p-4 md:p-8">
      <div className="text-2xl font-bold font-americana-bold">
        <Link href={'tel:+16042991001'}>
          <p>604.299.1001</p>
        </Link>
        <Link href={'mailto:sales@tailorbymarcon.ca'}>
          <p>Sales@TailorbyMarcon.ca</p>
        </Link>
      </div>
      <p className="text-xs text-[#616161] text-justify">
        This is currently not an offering for sale. Such an offering can only be
        made by way of a disclosure statement issuant pursuant to the Real
        Estate Development Marketing Act. The material provided herein is for
        general informational purposes only and is not intended to depict
        as-built construction designs. The Developer reserves the right in its
        sole discretion to make modifications or changes to building design,
        floor plans, project designs, specifications, finishes, features, and
        dimensions, without prior notice. Renderings are artistic concepts only.
        Square footages are approximate and have been calculated from
        architectural drawings. Actual final dimensions following completion of
        construction may vary from those set out herein. E.&O.E. Marcon Alpha
        (GP) Ltd.
      </p>

      <div className="md:flex md:gap-6 text-xs">
        <div className="flex items-center gap-6 uppercase">
          <Link
            className="hover:underline"
            href="https://marcon.ca/en/privacy-policy"
            target="_blank"
          >
            Privacy Policy
          </Link>
          <Link
            className="hover:underline"
            href="https://marcon.ca/en/terms-of-use"
            target="_blank"
          >
            Terms of use
          </Link>
        </div>

        <div className="flex items-center gap-6 uppercase">
          <Link
            className="hover:underline"
            href="https://marcon.ca/wp-content/uploads/2021/01/Covid-Procedures-2021.pdf?_gl=1*1eoysx5*_gcl_au*NDk1MDQ3OTUzLjE3MTg5OTgwODA.*_ga*MTIwOTgxODQ5MC4xNzE4OTk4MDgw*_ga_XPWFSX0R9Q*MTcxODk5ODA4MC4xLjEuMTcxODk5OTU2NS40LjAuOTI4NTQzMzcz"
            target="_blank"
          >
            COVID SAFETY PLAN
          </Link>
          <div className="w-[3px] h-[3px] rounded-full bg-gray-400" />
          <span>© 2024 Marcon</span>
        </div>
      </div>
    </div>
  );
}
