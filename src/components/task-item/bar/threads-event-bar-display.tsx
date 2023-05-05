import React from "react";
import style from "./bar.module.css";

type ThreadsEventBarDisplayProps = {
  event: any;
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
  event,
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

  console.log({event})
  console.log({eventType: event.type})

  const renderEventIcon = () => {
    switch (event.type) {
      case 'QUESTION':
        return(
          // Question ICon
          <svg x={x} y={y} width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="22.8" height="22.8" rx="11.4" fill="#895725"/>
              <path d="M8.63037 9.34619C8.92755 8.50141 9.51411 7.78906 10.2862 7.33531C11.0582 6.88156 11.966 6.71569 12.8486 6.86709C13.7313 7.01849 14.5318 7.47737 15.1085 8.16247C15.6853 8.84757 16.0009 9.71468 15.9996 10.6102C15.9996 13.1382 12.2075 14.4023 12.2075 14.4023M12.4224 18.1886H12.4351" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <rect width="22.8" height="22.8" rx="11.4" stroke="#432918" stroke-width="1.2"/>
          </svg>
        );

      case 'ACTION':
        return (
          <svg x={x} y={y} width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1.1" y="1.1" width="22.8" height="22.8" rx="11.4" fill="#7C66BD"/>
              <path d="M7.3999 7.40039L12.1132 18.7337L13.7866 13.8071L18.7332 12.1137L7.3999 7.40039Z" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
            <rect x="1.1" y="1.1" width="22.8" height="22.8" rx="11.4" stroke="#372F4F" stroke-width="1.2"/>
          </svg>
        )

      case 'INSIGHT':
        return (
          <svg x={x} y={y} width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1.1" y="1.1" width="22.8" height="22.8" rx="11.4" fill="#6B83FF"/>
          <g clip-path="url(#clip0_4707_16902)">
          <path d="M10.3999 16.0671H14.3999M11.0666 18.7337H13.7332M14.4599 13.4004C14.5799 12.7471 14.8932 12.2404 15.3999 11.7337C15.7218 11.4374 15.9773 11.0763 16.1497 10.6741C16.3221 10.272 16.4073 9.83786 16.3999 9.40039C16.3999 8.33952 15.9785 7.32211 15.2283 6.57196C14.4782 5.82182 13.4608 5.40039 12.3999 5.40039C11.339 5.40039 10.3216 5.82182 9.57148 6.57196C8.82133 7.32211 8.3999 8.33952 8.3999 9.40039C8.3999 10.0671 8.55324 10.8871 9.3999 11.7337C9.8826 12.1751 10.2119 12.759 10.3399 13.4004" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
          </g>
          <rect x="1.1" y="1.1" width="22.8" height="22.8" rx="11.4" stroke="#233861" stroke-width="1.2"/>
          <defs>
          <clipPath id="clip0_4707_16902">
          <rect width="16" height="16" fill="white" transform="translate(4.3999 4.40039)"/>
          </clipPath>
          </defs>
          </svg>
        )
    
      default:
        return (
          // End flag Icon
          <svg x={x} y={y} width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1.1" y="1.1" width="22.8" height="22.8" rx="11.4" fill="#8B8B8E"/>
              <path d="M10.7866 18.2137V6.78516L16.5009 9.6423L10.7866 12.4994" stroke="white" stroke-width="1.28571" stroke-linecap="round" stroke-linejoin="round"/>
            <rect x="1.1" y="1.1" width="22.8" height="22.8" rx="11.4" stroke="#BDBDBD" stroke-width="1.2"/>
          </svg>
        );
    }
  }

  console.log({ignore: renderEventIcon});

  return (
    <g onMouseDown={onMouseDown}>
      {renderEventIcon()}
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
