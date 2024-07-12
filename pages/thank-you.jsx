// Dependencies
import { useEffect } from "react";
import { Seo } from "@/components/common";
import { useDispatch, useSelector } from "react-redux";

// Store
import { UI_HEADER_THEME_BLUE } from "@/store/constants";
import { uiUpdateHeaderTheme } from "@/store/actions";

// Component
export default function ThankYou() {
  const dispatch = useDispatch();
  const ui = useSelector((state) => state.ui);

  //
  useEffect(() => {
    dispatch(uiUpdateHeaderTheme(UI_HEADER_THEME_BLUE));
  }, []);

  //
  return (
    <main className="page__thank-you">
      <Seo title="Thank You" />

      <div className="wrap--narrow">
        <h1>Thank You For Registering</h1>
        <p>We've received your submission and will get back to you shortly.</p>
      </div>
    </main>
  );
}
