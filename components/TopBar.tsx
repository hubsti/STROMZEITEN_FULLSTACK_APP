import React from "react";
import styles from "../styles/Topbar.module.css";
import { format } from "date-fns";
import IconLanguageSharp from "./Icons/Language";
import IconGlobe from "./Icons/Globe";
import IconSettingsSharp from "./Icons/Settings";
import Flag from "react-flagkit";
import { ThemeContext, themes } from "./contexts/ThemeContext";
import IconMoonStars from "./Icons/Moon";
import IconSun from "./Icons/Sun";

function TopBar() {
  const formtdate1 = format(new Date(), "do MMMM yyyy");
  const ref = React.useRef<HTMLInputElement>();

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [darkMode, setDarkMode] = React.useState(true);

  React.useEffect(() => {
    const checkIfClickedOutside = (e: { target: any }) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (isMenuOpen && ref.current && !ref.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isMenuOpen]);

  const ref1 = React.useRef<HTMLInputElement>();

  const [isMenuOpen1, setIsMenuOpen1] = React.useState(false);

  React.useEffect(() => {
    const checkIfClickedOutside = (e: { target: any }) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (isMenuOpen1 && ref1.current && !ref1.current.contains(e.target)) {
        setIsMenuOpen1(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isMenuOpen1]);

  return (
    <div className={styles.topbar}>
      <div className={styles.topbarWrapper}>
        <div className={styles.logo}>Stromzeiten</div>
        <div className={styles.dateandcountry}>
          <div className={styles.flagtitle}>
            <Flag country="BE" />
          </div>
          Belgium, {formtdate1}
        </div>
        <div className={styles.topbarRight}>
          <ThemeContext.Consumer>
            {({ changeTheme }) => (
              <div
                color="link"
                onClick={() => {
                  setDarkMode(!darkMode);
                  changeTheme(darkMode ? themes.light : themes.dark);
                }}
              >
                {" "}
                {darkMode ? (
                  <div className={styles.topbarIconContainer} ref={ref}>
                    <div className={styles.dropdown}>
                      <div className={styles.topbarDropdownBTN}>
                        <IconMoonStars />
                      </div>
                      <span className={styles.tooltiptext1}>
                        Switch to dark mode
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className={styles.topbarIconContainer} ref={ref}>
                    <div className={styles.dropdown}>
                      <div className={styles.topbarDropdownBTN}>
                        <IconSun />
                      </div>
                      <span className={styles.tooltiptext1}>
                        Switch to light mode
                      </span>
                    </div>
                  </div>
                )}
              </div>
            )}
          </ThemeContext.Consumer>
          <div className={styles.topbarIconContainer} ref={ref}>
            <div
              className={styles.dropdown}
              onClick={() => setIsMenuOpen((oldState) => !oldState)}
            >
              <div className={styles.topbarDropdownBTN}>
                <IconGlobe />
              </div>
              <span className={styles.tooltiptext1}>Choose country</span>
            </div>
            {isMenuOpen && (
              <div className={styles.dropdowncontent}>
                <b>Select your country:</b>
                <a href="#">
                  <div className={styles.flagcont}>
                    <Flag country="PL" />
                  </div>{" "}
                  Poland
                </a>
                <a href="#">
                  <div className={styles.flagcont}>
                    <Flag country="DE" />
                  </div>{" "}
                  German
                </a>
                <a href="#">
                  <div className={styles.flagcont}>
                    <Flag country="BE" />
                  </div>{" "}
                  Belgium
                </a>
                <a href="#">
                  <div className={styles.flagcont}>
                    <Flag country="FR" />
                  </div>{" "}
                  France
                </a>
              </div>
            )}
          </div>
          <div className={styles.topbarIconContainer} ref={ref1}>
            <div
              className={styles.dropdown}
              onClick={() => setIsMenuOpen1((oldState) => !oldState)}
            >
              <div className={styles.topbarDropdownBTN}>
                <IconLanguageSharp />
              </div>
              <span className={styles.tooltiptext2}>
                Choose <br /> language
              </span>
            </div>
            {isMenuOpen1 && (
              <div className={styles.dropdowncontent}>
                <b>Select your language:</b>
                <a href="#">
                  <div className={styles.flagcont}>
                    <Flag country="GB" />
                  </div>{" "}
                  English
                </a>
                <a href="#">
                  <div className={styles.flagcont}>
                    <Flag country="PL" />
                  </div>{" "}
                  Polski
                </a>
                <a href="#">
                  <div className={styles.flagcont}>
                    <Flag country="DE" />
                  </div>{" "}
                  Deutsch
                </a>
                <a href="#">
                  <div className={styles.flagcont}>
                    <Flag country="FR" />
                  </div>{" "}
                  Français
                </a>
              </div>
            )}
          </div>
          <div className={styles.topbarIconContainer}>
            <div className={styles.dropdown}>
              <div className={styles.topbarDropdownBTN}>
                <IconSettingsSharp />
              </div>
              <span className={styles.tooltiptext}>Show settings</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
