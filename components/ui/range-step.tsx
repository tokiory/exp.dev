import clsx from "clsx";
import * as React from "react";

type RangeStepProps = {
  value: number;
  className?: string;
  onChange?: (val: number) => void;
  id?: string;
  min?: number;
  max?: number;
  step?: number;
};

export const RangeStep: React.FC<RangeStepProps> = ({
  value,
  onChange,
  className,
  id,
  min = 0,
  max = 5,
  step = 1,
}) => {
  const percentage = ((value - min) / (max - min)) * 100;
  const steps = Array.from({ length: (max - min) / step + 1 }, (_, i) => i);

  return (
    <div className={clsx("w-full h-fit relative select-none", className)}>
      <RangeTrack percentage={percentage} steps={steps} />
      <RangeThumb percentage={percentage} />
      <RangeInput
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChange}
        id={id}
      />
    </div>
  );
};

type RangeTrackProps = {
  percentage: number;
  steps: number[];
};

const RangeTrack: React.FC<RangeTrackProps> = ({ percentage, steps }) => (
  <div className="relative h-2 rounded-full overflow-hidden bg-muted">
    <div
      className="absolute top-0 left-0 h-full z-10 bg-gradient-to-r from-primary/40 to-primary transition-all duration-150"
      style={{ width: `${percentage}%` }}
    />

    {steps.map((stepIndex) => (
      <div
        key={stepIndex}
        className="absolute top-0 bottom-0 w-px bg-stone-400 z-0 opacity-40"
        style={{
          left: `${(stepIndex / (steps.length - 1)) * 100}%`,
        }}
      />
    ))}
  </div>
);

type RangeThumbProps = {
  percentage: number;
};

const RangeThumb: React.FC<RangeThumbProps> = ({ percentage }) => (
  <div
    className="absolute top-1/2 -translate-y-1/2 z-20 w-2 h-4 rounded-full bg-primary shadow ring-1 ring-border transition-all duration-150"
    style={{
      left: percentage > 0 ? `calc(${percentage}% - 6px)` : "0",
    }}
  />
);

type RangeInputProps = {
  min: number;
  id?: string;
  max: number;
  step: number;
  value: number;
  onChange?: (val: number) => void;
};

const RangeInput: React.FC<RangeInputProps> = ({
  min,
  id,
  max,
  step,
  value,
  onChange,
}) => (
  <input
    id={id}
    type="range"
    min={min}
    max={max}
    step={step}
    value={value}
    onChange={(e) => onChange?.(Number(e.target.value))}
    className="z-30 absolute top-0 left-0 w-full h-fit opacity-0 cursor-pointer"
    aria-label="Select level"
  />
);
