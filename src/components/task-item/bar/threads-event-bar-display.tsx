import React from "react";
import style from "./bar.module.css";

type ThreadsEventBarDisplayProps = {
  x: number;
  y: number;
  width: number;
  height: number;
  isSelected: boolean;
  /* progress start point */
  progressX: number;
  progressWidth: number;
  barCornerRadius: number;
  styles: {
    backgroundColor: string;
    backgroundSelectedColor: string;
    progressColor: string;
    progressSelectedColor: string;
  };
  onMouseDown: (event: React.MouseEvent<SVGPolygonElement, MouseEvent>) => void;
};
export const ThreadsEventBarDisplay: React.FC<ThreadsEventBarDisplayProps> = ({
  x,
  y,
  width,
  height,
  isSelected,
  progressX,
  progressWidth,
  barCornerRadius,
  styles,
  onMouseDown,
}) => {
  const getProcessColor = () => {
    return isSelected ? styles.progressSelectedColor : styles.progressColor;
  };

  const getBarColor = () => {
    return isSelected ? styles.backgroundSelectedColor : styles.backgroundColor;
  };

  return (
    <g onMouseDown={onMouseDown}>
      <svg x={x} y={y} width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="22.8" height="22.8" rx="11.4" fill="#895725"/>
        <path d="M8.63037 9.34619C8.92755 8.50141 9.51411 7.78906 10.2862 7.33531C11.0582 6.88156 11.966 6.71569 12.8486 6.86709C13.7313 7.01849 14.5318 7.47737 15.1085 8.16247C15.6853 8.84757 16.0009 9.71468 15.9996 10.6102C15.9996 13.1382 12.2075 14.4023 12.2075 14.4023M12.4224 18.1886H12.4351" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <rect width="22.8" height="22.8" rx="11.4" stroke="#432918" stroke-width="1.2"/>
      </svg>
    </g>
  )

  return (
    <g onMouseDown={onMouseDown}>
      <rect
        x={x}
        width={width}
        y={y}
        height={height}
        ry={barCornerRadius}
        rx={barCornerRadius}
        fill={getBarColor()}
        className={style.barBackground}
      />
      <rect
        x={progressX}
        width={progressWidth}
        y={y}
        height={height}
        ry={barCornerRadius}
        rx={barCornerRadius}
        fill={getProcessColor()}
      />
    </g>
  );
};
