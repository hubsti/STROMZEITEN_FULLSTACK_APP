import styles from "../styles/CustomTooltip.module.css";
import { format } from "date-fns";

/**{(timestamp) => format(new Date(timestamp), "HH-mm")}*/
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className={styles.customTooltip}>
        <div className={styles.tooltipDetails}>
          <p className={styles.label}>Time: {format(new Date(payload[0].payload.timestamp), "HH:mm")}</p>
    
            <p>Power: {payload[0].payload.value}MW</p>
       
        </div>
      </div>
    );
  }

  return null;
};

export default CustomTooltip;