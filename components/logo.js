import Link from "next/link";
import Image from "next/image";
import Kalinka from "assets/img/kalinka-logo-icon.png";
import styles from "styles/logo.module.css";

export default function Logo({ boxOn = false }) {
  return (
    <Link href="/">
      <div className={boxOn ? styles.box : styles.basic}>
        Kalinka
        <span>
          <Image
            src={Kalinka}
            alt=""
            style={{ width: "25px", height: "25px" }}
          />
        </span>
      </div>
    </Link>
  );
}
